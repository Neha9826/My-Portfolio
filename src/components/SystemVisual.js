import { useEffect, useRef } from "react";

/**
 * Lightweight canvas constellation: no WebGL dependency, with pointer response,
 * gentle orbital motion, and reduced-motion support.
 */
export const SystemVisual = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    if (!context) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let width = 0;
    let height = 0;
    let frame = 0;
    let rotation = 0;
    let scrollProgress = 0;
    let points = [];

    const makePoints = () => {
      const count = width < 480 ? 74 : 112;
      points = Array.from({ length: count }, (_, index) => {
        const y = 1 - (index / (count - 1)) * 2;
        const radius = Math.sqrt(1 - y * y);
        const angle = Math.PI * (3 - Math.sqrt(5)) * index;
        return {
          x: Math.cos(angle) * radius,
          y,
          z: Math.sin(angle) * radius,
          seed: index * 1.731,
          size: 0.7 + ((index * 17) % 10) / 10,
        };
      });
    };

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      makePoints();
    };

    const onPointerMove = (event) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointer.targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };
    const onPointerLeave = () => {
      pointer.targetX = 0;
      pointer.targetY = 0;
    };
    const onScroll = () => {
      const bounds = canvas.getBoundingClientRect();
      scrollProgress = Math.max(0, Math.min(1, -bounds.top / Math.max(bounds.height, 1)));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      pointer.x += (pointer.targetX - pointer.x) * 0.045;
      pointer.y += (pointer.targetY - pointer.y) * 0.045;
      if (!reducedMotion) rotation += 0.0022;

      const centerX = width * 0.5;
      const centerY = height * 0.49;
      const radius = Math.min(width, height) * (0.34 + scrollProgress * 0.035);
      const angleY = rotation + pointer.x * 0.35 + scrollProgress * 0.7;
      const angleX = pointer.y * 0.24;
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      // Soft orbital rings create depth without turning the visual into a flat icon.
      context.save();
      context.translate(centerX, centerY);
      context.rotate(-0.24 + pointer.x * 0.08);
      [1.18, 0.92, 0.66].forEach((scale, index) => {
        context.beginPath();
        context.ellipse(0, 0, radius * scale, radius * scale * (0.43 + index * 0.025), 0, 0, Math.PI * 2);
        context.strokeStyle = index === 1 ? "rgba(255,117,76,0.24)" : "rgba(179,155,255,0.13)";
        context.lineWidth = 1;
        context.stroke();
      });
      context.restore();

      const projected = points.map((point) => {
        const x1 = point.x * cosY - point.z * sinY;
        const z1 = point.x * sinY + point.z * cosY;
        const y1 = point.y * cosX - z1 * sinX;
        const z2 = point.y * sinX + z1 * cosX;
        const perspective = 1.7 / (1.7 - z2 * 0.42);
        return {
          x: centerX + x1 * radius * perspective,
          y: centerY + y1 * radius * perspective,
          z: z2,
          size: point.size * perspective,
          alpha: 0.25 + ((z2 + 1) / 2) * 0.7,
        };
      });

      // Connect nearby projected nodes; the globe reads as a living system.
      for (let i = 0; i < projected.length; i += 1) {
        for (let j = i + 1; j < projected.length; j += 1) {
          const a = projected[i];
          const b = projected[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < radius * 0.31 && (a.z + b.z) > -0.9) {
            const alpha = (1 - distance / (radius * 0.31)) * Math.min(a.alpha, b.alpha) * 0.24;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.strokeStyle = `rgba(151, 151, 224, ${alpha})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }
      }

      projected.forEach((point, index) => {
        const warm = index % 7 === 0 || index % 11 === 0;
        context.beginPath();
        context.arc(point.x, point.y, point.size * (warm ? 1.25 : 1), 0, Math.PI * 2);
        context.fillStyle = warm
          ? `rgba(255, ${125 + (index % 4) * 12}, 79, ${point.alpha})`
          : `rgba(178, 187, 255, ${point.alpha * 0.86})`;
        context.shadowBlur = warm ? 13 : 5;
        context.shadowColor = warm ? "rgba(255,107,69,0.7)" : "rgba(145,132,255,0.5)";
        context.fill();
      });
      context.shadowBlur = 0;

      // A bright core anchors the constellation and subtly pulses.
      const pulse = reducedMotion ? 1 : 1 + Math.sin(rotation * 2.4) * 0.045;
      const glow = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius * 0.48);
      glow.addColorStop(0, "rgba(255,128,82,0.17)");
      glow.addColorStop(0.45, "rgba(142,104,255,0.08)");
      glow.addColorStop(1, "rgba(8,9,13,0)");
      context.fillStyle = glow;
      context.beginPath();
      context.arc(centerX, centerY, radius * 0.48 * pulse, 0, Math.PI * 2);
      context.fill();

      if (!reducedMotion) frame = window.requestAnimationFrame(draw);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    resize();
    onScroll();
    draw();

    return () => {
      observer.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="system-visual-canvas" aria-hidden="true" />;
};
