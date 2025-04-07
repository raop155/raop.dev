import { Particle } from "./Particle";

const MAX_PARTICLES = 100;

export const setupParticleAnimation = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Set canvas size
  const setCanvasSize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  setCanvasSize();
  window.addEventListener("resize", setCanvasSize);

  // Create particles
  const particles: Particle[] = [];
  for (let i = 0; i < MAX_PARTICLES; i++) {
    particles.push(new Particle(canvas.width, canvas.height));
  }

  // Animation loop
  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.update(canvas.width, canvas.height);
      particle.draw(ctx);
    });

    requestAnimationFrame(animate);
  };
  animate();

  // Return cleanup function
  return () => {
    window.removeEventListener("resize", setCanvasSize);
  };
};
