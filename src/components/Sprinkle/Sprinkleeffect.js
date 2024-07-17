import React, { useEffect } from 'react';
import './Sprinkle.css';

const SprinkleEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      createSprinkle(e.clientX, e.clientY);
    };

    const createSprinkle = (x, y) => {
      const sprinkle = document.createElement('div');
      sprinkle.className = 'sprinkle';
      sprinkle.style.left = `${x}px`;
      sprinkle.style.top = `${y}px`;

      document.body.appendChild(sprinkle);

      setTimeout(() => {
        sprinkle.remove();
      }, 1000); // Match the duration of the disappear animation
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default SprinkleEffect;
