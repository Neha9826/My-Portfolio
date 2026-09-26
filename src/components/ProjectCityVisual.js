import { useEffect, useRef } from "react";

export const ProjectCityVisual = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let time = 0;
    let buildings = [];
    let particles = [];
    let resizeObserver;

    const seededRandom = (seed) => () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.round(width * ratio));
      canvas.height = Math.max(1, Math.round(height * ratio));
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      const random = seededRandom(92817);
      const count = Math.max(34, Math.min(90, Math.round(width / 16)));
      const horizon = height * 0.53;
      buildings = Array.from({ length: count }, (_, i) => {
        const depth = random();
        const baseY = horizon + Math.pow(depth, 0.72) * height * 0.5;
        const scale = 0.28 + depth * 1.15;
        const w = (14 + random() * 38) * scale;
        const h = (24 + random() * 145) * scale;
        return {
          x: random() * width,
          baseY,
          w,
          h,
          depth,
          phase: random() * Math.PI * 2,
          bright: i % 5 === 0,
        };
      });
      particles = Array.from({ length: Math.max(22, Math.round(width / 28)) }, () => ({
        x: random() * width,
        y: horizon + random() * (height - horizon),
        phase: random() * Math.PI * 2,
        speed: 0.15 + random() * 0.45,
      }));
    };

    const stroke = (points, alpha, lineWidth = 0.7) => {
      ctx.beginPath();
      points.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
      ctx.strokeStyle = `rgba(70, 207, 255, ${alpha})`;
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    };

    const drawBuilding = (b) => {
      const { x, baseY, w, h, depth, phase, bright } = b;
      const skew = w * (0.2 + depth * 0.16);
      const topY = baseY - h;
      const alpha = 0.07 + depth * 0.19 + (bright ? 0.07 : 0);
      const front = [[x, topY], [x + w, topY], [x + w, baseY], [x, baseY], [x, topY]];
      const side = [[x + w, topY], [x + w + skew, topY - skew * 0.42], [x + w + skew, baseY - skew * 0.42], [x + w, baseY]];
      const roof = [[x, topY], [x + skew, topY - skew * 0.42], [x + w + skew, topY - skew * 0.42], [x + w, topY]];
      stroke(front, alpha);
      stroke(side, alpha * 0.9);
      stroke(roof, alpha * 1.35);

      // Fine floor lines and a few bright service columns.
      const floors = Math.max(2, Math.floor(h / 17));
      for (let i = 1; i < floors; i += 1) {
        const y = topY + (h / floors) * i;
        stroke([[x, y], [x + w, y]], alpha * 0.55, 0.45);
      }
      if (bright || depth > 0.72) {
        const columnX = x + w * (0.25 + (Math.sin(phase) + 1) * 0.2);
        stroke([[columnX, topY + 3], [columnX, baseY - 2]], alpha * 1.9, 0.65);
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      if (!reducedMotion) time += 0.006;
      const horizon = height * 0.53;

      // Perspective floor grid, converging into the city.
      for (let i = 0; i <= 22; i += 1) {
        const x = (i / 22) * width;
        stroke([[width * 0.5, horizon], [x, height]], 0.055 + (i % 4 === 0 ? 0.035 : 0), 0.6);
      }
      for (let i = 0; i < 14; i += 1) {
        const t = i / 13;
        const y = horizon + Math.pow(t, 1.8) * (height - horizon);
        stroke([[0, y], [width, y]], 0.035 + t * 0.055, 0.55);
      }

      // Distant skyline first, foreground structures last.
      [...buildings].sort((a, b) => a.depth - b.depth).forEach(drawBuilding);

      particles.forEach((p, i) => {
        const drift = reducedMotion ? 0 : Math.sin(time * p.speed + p.phase) * 5;
        const pulse = 0.2 + (Math.sin(time * 1.5 + p.phase) + 1) * 0.22;
        const x = p.x + drift;
        const y = p.y;
        ctx.beginPath();
        ctx.arc(x, y, i % 7 === 0 ? 1.8 : 1.1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 220, 255, ${pulse})`;
        ctx.shadowBlur = i % 7 === 0 ? 12 : 5;
        ctx.shadowColor = "rgba(30, 211, 255, .8)";
        ctx.fill();
      });
      ctx.shadowBlur = 0;

      // A restrained luminous horizon, like a live infrastructure bus.
      const glow = ctx.createLinearGradient(0, horizon, width, horizon);
      glow.addColorStop(0, "rgba(30, 211, 255, 0)");
      glow.addColorStop(0.5, "rgba(30, 211, 255, .16)");
      glow.addColorStop(1, "rgba(30, 211, 255, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, horizon - 1, width, 2);

      if (!reducedMotion) frame = window.requestAnimationFrame(draw);
    };

    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();
    draw();

    return () => {
      resizeObserver.disconnect();
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="project-city-canvas" aria-hidden="true" />;
};
