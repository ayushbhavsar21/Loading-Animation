import React, { useEffect } from 'react';
import './App.css'; // Import your CSS file
import img from "./assets/Girl.png";

const App = () => {
  const words = "FASHION•STYLE "; // Add more words if needed
  const ANIMATION_DURATION = 3000; // Define your animation duration in milliseconds

  useEffect(() => {
    const createElements = (offset) => {
      const characters = words.split("");
      characters.forEach((char, i) => {
        const div = document.createElement("div");
        div.innerText = char;
        div.classList.add("character");
        div.style.animationDelay = `-${i * (ANIMATION_DURATION / 16) - offset}ms`;

        if (offset >= 0) {
          document.getElementById("spiral").appendChild(div);
        } else {
          document.getElementById("spiral2").appendChild(div);
        }
      });
    };

    createElements(0);
    createElements(-1 * (ANIMATION_DURATION / 2));
    
  }, []);

  return (
    <div className='Container' >
      
      <div id="spiral" className="spiral-container"></div>
      
        <img src={img} alt="" />
      
      <div id="spiral2" className="spiral-container"></div>
    </div>
  );
};

export default App;
