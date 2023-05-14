import React, { useState } from 'react';
import './animatedlabel.css';


function AnimatedLabel({ text }) {
  const [animated, setAnimated] = useState(false);
  const  label = text
      .split("")
      .map(
        (letter, idx) =>
          `<span style="transition-delay:${idx * 20}ms">${letter}</span>`
      )
      .join("");
   const handleMouseEnter = () => {
    setAnimated(true);
  };

  const handleMouseLeave = () => {
    setAnimated(false);
  };

  return (
    <label>
    <span
      className={`label ${animated ? 'span' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </span>
    </label>
  );
}

export default AnimatedLabel;