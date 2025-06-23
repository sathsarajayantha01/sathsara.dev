import React, { useEffect } from 'react';

const LiquidEffect = () => {
  useEffect(() => {
    // Function to update CSS variables based on mouse position
    const handleMouseMove = (e) => {
      const liquidElements = document.querySelectorAll('.liquid-glass, .liquid-card, .liquid-button, .liquid-interactive');
      
      liquidElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        
        // Calculate mouse position relative to the element
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Only update if mouse is within or close to the element (50px buffer)
        const buffer = 50;
        if (
          x >= -buffer && 
          x <= rect.width + buffer && 
          y >= -buffer && 
          y <= rect.height + buffer
        ) {
          // Convert to percentage
          const xPercent = ((x / rect.width) * 100).toFixed(2);
          const yPercent = ((y / rect.height) * 100).toFixed(2);
          
          // Update CSS variables
          element.style.setProperty('--mouse-x', `${xPercent}%`);
          element.style.setProperty('--mouse-y', `${yPercent}%`);
        }
      });
    };

    // Function to create liquid gradient bubbles
    const createBubbles = () => {
      const liquidCards = document.querySelectorAll('.liquid-glass-card');

      liquidCards.forEach(card => {
        // Clean up existing bubbles
        const existingBubbles = card.querySelectorAll('.bubble');
        existingBubbles.forEach(bubble => bubble.remove());
        
        // Create new bubbles
        const bubblesCount = 5 + Math.floor(Math.random() * 5);
        
        for (let i = 0; i < bubblesCount; i++) {
          const bubble = document.createElement('div');
          bubble.className = 'bubble';
          
          const size = 20 + Math.random() * 60;
          const left = Math.random() * 100;
          const duration = 3 + Math.random() * 8;
          const delay = Math.random() * 2;
          
          bubble.style.width = `${size}px`;
          bubble.style.height = `${size}px`;
          bubble.style.left = `${left}%`;
          bubble.style.bottom = '-100px';
          bubble.style.animationDuration = `${duration}s`;
          bubble.style.animationDelay = `${delay}s`;
          
          card.appendChild(bubble);
        }
      });
    };

    // Set up event listeners
    document.addEventListener('mousemove', handleMouseMove);
    
    // Initialize bubbles
    createBubbles();
    
    // Recreate bubbles periodically
    const bubbleInterval = setInterval(createBubbles, 15000);
    
    // Add the styles for bubbles
    const style = document.createElement('style');
    style.textContent = `
      .bubble {
        position: absolute;
        background: radial-gradient(
          circle at center,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0.05) 50%,
          transparent 70%
        );
        border-radius: 50%;
        pointer-events: none;
        z-index: -1;
        animation: float-bubble linear infinite;
      }
      
      @keyframes float-bubble {
        0% {
          transform: translateY(0) scale(0);
          opacity: 0;
        }
        10% {
          opacity: 0.8;
          transform: translateY(0) scale(1);
        }
        100% {
          transform: translateY(-100vh) scale(1.5);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(bubbleInterval);
      document.head.removeChild(style);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default LiquidEffect;
