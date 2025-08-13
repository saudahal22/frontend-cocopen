'use client';

import { useEffect, useRef } from 'react';

export default function LogoScroller() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const logoSources = [
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"
    ];

    const logoCount = 17;
    const logoWidth = 65;
    const spacing = 20;
    const speed = 1.2;

    const logos = [];

    for (let i = 0; i < logoCount; i++) {
      const img = document.createElement('img');
      img.src = logoSources[i % logoSources.length];
      img.className = "absolute h-12 w-12 object-contain";
      img.style.left = `${i * (logoWidth + spacing)}px`;
      img.style.top = "0px";
      container.appendChild(img);
      logos.push({ el: img, x: i * (logoWidth + spacing) });
    }

    function animate() {
      logos.forEach(logo => {
        logo.x -= speed;
        if (logo.x < -(logoWidth)) {
          const maxX = Math.max(...logos.map(l => l.x));
          logo.x = maxX + logoWidth + spacing;
          const randomLogo = logoSources[Math.floor(Math.random() * logoSources.length)];
          logo.el.src = randomLogo;
        }
        logo.el.style.left = `${logo.x}px`;
      });
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-16 overflow-hidden"></div>
  );
}