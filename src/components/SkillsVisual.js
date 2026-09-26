import { useEffect, useRef } from "react";

export const SkillsVisual = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let time = 0;
    let reveal = 0;
    let points = [];

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.max(38, Math.min(100, Math.round(width / 15)));
      let seed = 721;
      const random = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      points = Array.from({ length: count }, (_, i) => ({
        x: random() * width,
        y: random() * height,
        phase: random() * Math.PI * 2,
        warm: i % 9 === 0,
      }));
    };

    const updateReveal = () => {
      const bounds = canvas.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      reveal = Math.max(0, Math.min(1, (viewport - bounds.top) / Math.max(viewport * 0.78, 1)));
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      if (!reducedMotion) time += 0.016;
      const visibleCount = Math.ceil(points.length * (0.18 + reveal * 0.82));
      const active = points.slice(0, visibleCount).map((p) => ({
        ...p,
        x: p.x + (reducedMotion ? 0 : Math.sin(time + p.phase) * 11),
        y: p.y + (reducedMotion ? 0 : Math.cos(time * 0.8 + p.phase) * 8),
      }));

      for (let i = 0; i < active.length; i += 1) {
        for (let j = i + 1; j < active.length; j += 1) {
          const a = active[i], b = active[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 115) {
            const alpha = (1 - distance / 115) * 0.62 * reveal;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.strokeStyle = a.warm || b.warm
              ? `rgba(255,126,84,${alpha})`
              : `rgba(157,151,231,${alpha})`;
            context.lineWidth = 0.7;
            context.stroke();
          }
        }
      }

      active.forEach((p) => {
        const alpha = (0.34 + (Math.sin(time + p.phase) + 1) * 0.2) * reveal;
        context.beginPath();
        context.arc(p.x, p.y, p.warm ? 2.8 : 1.7, 0, Math.PI * 2);
        context.fillStyle = p.warm
          ? `rgba(255,143,98,${Math.min(1, alpha + 0.2)})`
          : `rgba(183,181,255,${alpha})`;
        context.shadowBlur = p.warm ? 19 : 10;
        context.shadowColor = p.warm ? "rgba(255,107,69,.65)" : "rgba(143,126,255,.5)";
        context.fill();
      });
      context.shadowBlur = 0;
      if (!reducedMotion) frame = window.requestAnimationFrame(draw);
    };

    const onScroll = () => {
      updateReveal();
      if (reducedMotion) draw();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    window.addEventListener("scroll", onScroll, { passive: true });
    resize();
    updateReveal();
    draw();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="skills-network-canvas" aria-hidden="true" />;
};
