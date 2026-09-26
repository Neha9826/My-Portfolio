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
    let lights = [];
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

      const random = seededRandom(42861);
      // Keep the skyline visually compact even when the Projects section is tall.
      const cityScale = Math.min(width, height * 0.72);
      const horizon = Math.min(height * 0.43, Math.max(height * 0.22, cityScale * 0.72));
      const count = Math.max(24, Math.min(76, Math.round(width / 19)));
      buildings = [];

      // A deliberately composed skyline: low blocks at the edges, a tall central tower,
      // and stepped buildings that lead the eye toward it.
      for (let i = 0; i < count; i += 1) {
        const x = (i / (count - 1)) * width + (random() - 0.5) * (width / count) * 0.65;
        const distance = Math.abs(x / width - 0.57);
        const cluster = Math.max(0, 1 - distance * 1.85);
        const scale = width / 1280;
        const w = (18 + random() * 34) * Math.max(0.55, scale);
        let h = (30 + random() * 115) * scale * (0.48 + cluster * 0.85);
        if (x > width * 0.53 && x < width * 0.67) h *= 1.65;
        if (x > width * 0.56 && x < width * 0.62) h *= 1.55;
        const baseY = horizon + (random() - 0.5) * 34 * scale;
        buildings.push({
          x, baseY, w, h,
          depth: random(),
          skew: (7 + random() * 17) * Math.max(0.55, scale),
          phase: random() * Math.PI * 2,
          bright: random() > 0.68,
        });
      }

      // Signature tower near the center-right, with a stepped crown and antenna.
      buildings.push({
        x: width * 0.565,
        baseY: horizon + 8,
        w: Math.max(48, width * 0.105),
        h: Math.min(width * 0.47, height * 0.31),
        skew: Math.max(13, width * 0.022),
        depth: 0.95,
        phase: 0.7,
        bright: true,
        tower: true,
      });

      lights = Array.from({ length: Math.max(42, Math.round(width / 13)) }, () => ({
        x: random() * width,
        y: horizon - random() * Math.min(width * 0.16, height * 0.15) + random() * Math.min(width * 0.5, height * 0.46),
        phase: random() * Math.PI * 2,
        speed: 0.3 + random() * 0.8,
        size: 0.7 + random() * 1.4,
      }));
    };

    const line = (points, alpha, lineWidth = 0.8, glow = false) => {
      ctx.beginPath();
      points.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
      ctx.strokeStyle = `rgba(92, 220, 255, ${alpha})`;
      ctx.lineWidth = lineWidth;
      if (glow) {
        ctx.shadowBlur = 9;
        ctx.shadowColor = "rgba(0, 210, 255, .72)";
      }
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const drawBuilding = (b) => {
      const { x, baseY, w, h, depth, skew, phase, bright, tower } = b;
      const topY = baseY - h;
      const dx = skew;
      const dy = skew * 0.48;
      const a = 0.13 + depth * 0.22 + (bright ? 0.12 : 0);
      const front = [[x, topY], [x + w, topY], [x + w, baseY], [x, baseY], [x, topY]];
      const side = [[x + w, topY], [x + w + dx, topY - dy], [x + w + dx, baseY - dy], [x + w, baseY]];
      const roof = [[x, topY], [x + dx, topY - dy], [x + w + dx, topY - dy], [x + w, topY], [x, topY]];
      line(front, a, tower ? 1.1 : 0.75);
      line(side, a * 0.8, 0.7);
      line(roof, a * 1.35, 0.85, bright || tower);

      const floors = Math.max(2, Math.floor(h / (tower ? 20 : 15)));
      for (let i = 1; i < floors; i += 1) {
        const y = topY + (h / floors) * i;
        line([[x, y], [x + w, y]], a * 0.58, 0.48);
        if (tower && i % 2 === 0) {
          line([[x + w * 0.18, y], [x + w * 0.82, y]], a * 0.5, 0.5);
        }
      }

      // Vertical structural bays give the buildings the fine CAD-like wireframe.
      const bays = Math.max(2, Math.floor(w / 13));
      for (let i = 1; i < bays; i += 1) {
        const bx = x + (w / bays) * i;
        line([[bx, topY], [bx, baseY]], a * 0.48, 0.45);
      }

      if (tower) {
        const crownY = topY - dy;
        line([[x + w * 0.22, topY], [x + w * 0.22, topY - h * 0.07], [x + w * 0.78, topY - h * 0.07], [x + w * 0.78, topY]], a * 1.5, 1, true);
        line([[x + w * 0.5, topY - h * 0.07], [x + w * 0.5, topY - h * 0.16]], 0.62, 0.9, true);
        line([[x + w * 0.37, crownY], [x + w * 0.37, crownY - 12], [x + w * 0.63, crownY - 12], [x + w * 0.63, crownY]], a, 0.7);
      } else if (bright || depth > 0.82) {
        const columnX = x + w * (0.25 + (Math.sin(phase) + 1) * 0.2);
        line([[columnX, topY + 2], [columnX, baseY - 2]], Math.min(0.8, a * 2), 0.7, true);
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      if (!reducedMotion) time += 0.008;

      const cityScale = Math.min(width, height * 0.72);
      const horizon = Math.min(height * 0.43, Math.max(height * 0.22, cityScale * 0.72));
      const groundEnd = Math.min(height, horizon + width * 0.48);

      // Black-blue atmosphere, brightest around the skyline and fading downward.
      const atmosphere = ctx.createRadialGradient(width * 0.56, horizon * 0.72, 0, width * 0.56, horizon * 0.72, width * 0.78);
      atmosphere.addColorStop(0, "rgba(0, 118, 172, .11)");
      atmosphere.addColorStop(0.5, "rgba(0, 57, 91, .045)");
      atmosphere.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = atmosphere;
      ctx.fillRect(0, 0, width, height);

      // Distant skyline first, then the taller foreground structures.
      [...buildings].sort((a, b) => a.depth - b.depth).forEach(drawBuilding);

      // Perspective infrastructure lanes converge beneath the skyline.
      const vanishingX = width * 0.52;
      const vanishingY = horizon + 5;
      for (let i = -12; i <= 12; i += 1) {
        const x = vanishingX + i * (width / 17);
        line([[vanishingX + i * 1.5, vanishingY], [x, groundEnd]], 0.1 + (i % 3 === 0 ? 0.055 : 0), 0.7);
      }
      for (let i = 0; i < 19; i += 1) {
        const t = i / 18;
        const y = vanishingY + Math.pow(t, 1.7) * (groundEnd - vanishingY);
        line([[0, y], [width, y]], 0.045 + t * 0.07, 0.65);
      }

      // Interconnected glowing routes, like data moving through the city.
      const routes = [
        [[0, horizon + width * 0.12], [width * 0.22, horizon + width * 0.08], [width * 0.42, horizon + width * 0.14], [width * 0.62, horizon + width * 0.09], [width, horizon + width * 0.15]],
        [[0, horizon + width * 0.24], [width * 0.28, horizon + width * 0.18], [width * 0.49, horizon + width * 0.25], [width * 0.76, horizon + width * 0.19], [width, horizon + width * 0.23]],
        [[width * 0.12, groundEnd * 0.92], [width * 0.34, horizon + width * 0.23], [width * 0.54, horizon + width * 0.17], [width * 0.8, groundEnd * 0.9]],
      ];
      routes.forEach((route, i) => line(route, 0.15 + (i === 1 ? 0.08 : 0), 1.05, true));

      lights.forEach((p, i) => {
        const drift = reducedMotion ? 0 : Math.sin(time * p.speed + p.phase) * 3.5;
        const pulse = 0.35 + (Math.sin(time * 1.7 + p.phase) + 1) * 0.3;
        const x = p.x + drift;
        const y = p.y;
        ctx.beginPath();
        ctx.arc(x, y, p.size * (i % 5 === 0 ? 1.25 : 1), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 220, 255, ${pulse})`;
        ctx.shadowBlur = i % 5 === 0 ? 17 : 8;
        ctx.shadowColor = "rgba(0, 215, 255, .95)";
        ctx.fill();
      });
      ctx.shadowBlur = 0;

      // A few brighter junctions make the city feel powered, not randomly speckled.
      const junctions = [
        [width * 0.06, horizon + width * 0.13],
        [width * 0.23, horizon + width * 0.2],
        [width * 0.42, horizon + width * 0.11],
        [width * 0.73, horizon + width * 0.17],
        [width * 0.91, horizon + width * 0.1],
      ];
      junctions.forEach(([x, y], i) => {
        const pulse = 0.55 + (Math.sin(time * 1.4 + i) + 1) * 0.2;
        ctx.beginPath();
        ctx.arc(x, y, 2.1 + (i % 2), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 231, 255, ${pulse})`;
        ctx.shadowBlur = 20;
        ctx.shadowColor = "rgba(0, 210, 255, .95)";
        ctx.fill();
      });
      ctx.shadowBlur = 0;

      // Fade the city into the page so the section content remains the hero.
      const fade = ctx.createLinearGradient(0, 0, 0, height);
      fade.addColorStop(0, "rgba(2, 5, 10, .05)");
      fade.addColorStop(Math.min(0.68, groundEnd / height), "rgba(2, 5, 10, .02)");
      fade.addColorStop(1, "rgba(2, 5, 10, .78)");
      ctx.fillStyle = fade;
      ctx.fillRect(0, 0, width, height);

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
