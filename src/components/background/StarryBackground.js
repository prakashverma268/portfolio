// src/components/StarryBackground.js
import React, { useEffect, useState } from 'react';
import '../contact/contact.css'; // Make sure to link the updated CSS

const StarryBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStars = () => {
      const starCount = 200; // Increase the number of stars for more effect
      const starsArr = [];
      for (let i = 0; i < starCount; i++) {
        const size = Math.random() * 2 + 1; // Random size between 1px to 4px
        starsArr.push({
          id: i,
          left: `${Math.random() * 100}vw`, // Random horizontal position
          top: `${Math.random() * 100}vh`, // Random vertical position
          size: `${size}px`, // Random star size
          color: `hsl(${Math.random() * 360}, 100%, 80%)`, // Random color (hue)
          animationDuration: `${Math.random() * 15 + 10}s`, // Random speed
        });
      }
      setStars(starsArr);
    };
    createStars();
  }, []);

  return (
    <div className="starfield">
      {stars.map(star => (
        <div
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            animationDuration: star.animationDuration,
          }}
        />
      ))}
    </div>
  );
};

export default StarryBackground;
