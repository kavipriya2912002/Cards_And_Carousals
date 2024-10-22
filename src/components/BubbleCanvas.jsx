import React, { useEffect, useRef, useState } from 'react';

const BubbleCanvas = () => {
  const canvasRef = useRef(null);
  const [bubbles, setBubbles] = useState([]);
  const img = new Image();
  img.src = 'https://assets.codepen.io/721952/bubbles_1.webp'; // (8 frames)

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let cw = canvas.width = window.innerWidth;
    let ch = canvas.height = window.innerHeight;

    const makeBubble = (x, y) => {
      const scale = Math.random() * 0.4 + 0.4; // Scale between 0.4 and 0.8
      const dur = Math.random() * 4000 + 3000; // Duration between 3000 and 7000ms
      const start = performance.now();

      const bubble = {
        x: x - 75 * scale,
        y: y - 75 * scale,
        scale,
        start,
        dur,
        step: 0,
      };

      setBubbles((prev) => [...prev, bubble]);

      // Animate bubble
      const animateBubble = (timestamp) => {
        const elapsed = timestamp - bubble.start;
        const progress = Math.min(elapsed / bubble.dur, 1);
        bubble.y -= progress * 2; // Move up

        // Increment the step based on the duration to show the sprite
        bubble.step = Math.floor(progress * 8); // 8 frames in the sprite

        // Update bubble position
        setBubbles((prev) => {
          const updatedBubbles = [...prev];
          updatedBubbles[updatedBubbles.length - 1] = bubble; // Update the current bubble
          return updatedBubbles;
        });

        if (progress < 1) {
          requestAnimationFrame(animateBubble);
        }
      };

      requestAnimationFrame(animateBubble);
    };

    const handlePointerMove = (e) => {
      makeBubble(e.clientX, e.clientY);
    };

    window.addEventListener('pointerdown', handlePointerMove);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('resize', () => {
      cw = canvas.width = window.innerWidth;
      ch = canvas.height = window.innerHeight;
    });

    const draw = () => {
      ctx.clearRect(0, 0, cw, ch);
      bubbles.forEach((bubble) => {
        ctx.drawImage(
          img,
          0,
          bubble.step * 150,
          150,
          150,
          bubble.x,
          bubble.y,
          bubble.scale * 150,
          bubble.scale * 150
        );
      });
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('pointerdown', handlePointerMove);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('resize', () => {
        cw = canvas.width = window.innerWidth;
        ch = canvas.height = window.innerHeight;
      });
    };
  }, [bubbles]);

  return (
    <div className="h-screen w-full bg-[hsl(270,75%,8%)] flex items-center justify-center">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

export default BubbleCanvas;
