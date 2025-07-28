import React, { useCallback, useMemo } from 'react';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = React.memo(() => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  // Memoize particle options for better performance
  const particleOptions = useMemo(() => ({
    fpsLimit: 30, // Reduced from 60 for better performance
    interactivity: {
      events: {
        onClick: {
          enable: false, // Disabled for mobile performance
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2, // Reduced from 4
        },
        repulse: {
          distance: 80, // Reduced from 100
          duration: 0.3, // Reduced from 0.4
        },
      },
    },
    particles: {
      color: {
        value: "#1E90FF",
      },
      links: {
        color: "#3B82F6",
        distance: 120, // Reduced from 150
        enable: true,
        opacity: 0.2, // Reduced from 0.3
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 0.8, // Reduced from 1
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000, // Increased area to reduce particle density
        },
        value: 40, // Reduced from 80 for better performance
      },
      opacity: {
        value: 0.25, // Reduced from 0.3
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 }, // Reduced max size from 5 to 3
      },
    },
    detectRetina: true,
    pauseOnBlur: true, // Pause when tab is not active
    pauseOnOutsideViewport: true, // Pause when not visible
  }), []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0"
      options={particleOptions}
    />
  );
});

ParticleBackground.displayName = 'ParticleBackground';

export default ParticleBackground;
