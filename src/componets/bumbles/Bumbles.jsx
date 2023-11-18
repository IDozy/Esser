import React from 'react';
import './Bumbles.css';

const Bumbles = () => {
  function createBubble() {
    const section = document.querySelector('.bumbles__section'); // Agregado el punto para el selector de clase
    const createElement = document.createElement('span');
    var size = Math.random() * 60;
    createElement.style.width = 20 + size + 'px';
    createElement.style.height = 20 + size + 'px';
    createElement.style.left = Math.random() * window.innerWidth + 'px'; // Corregido innerWidth
    section.appendChild(createElement);

    setTimeout(() => {
      createElement.remove();
    }, 4000);
  }
  setInterval(createBubble, 100);

  return <div className='bumbles__section'></div>;
};

export default Bumbles;
