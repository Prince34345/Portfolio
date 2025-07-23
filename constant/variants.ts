export  const imageBounceVariants = {
    // Initial state for the fade-in and slide
    initial: {
      opacity: 0,
      x: -40,
    },
    // Animation state including the bounce and neon glow
    animate: {
      opacity: 1,
      x: 0,
      // Bouncy vertical movement
      y: [0, -5, 0], // Move up 5px and back to original position
      transition: {
        x: { duration: 0.8 },
        opacity: { duration: 0.8 },
        y: {
          repeat: Infinity,        // Loop indefinitely
          repeatType: "reverse",   // Bounce up and down smoothly
          duration: 1,             // Time for one full up-and-down bounce
          ease: "easeOut",         // Smooth start, then a slight bounce back (or use 'spring' for more pronounced)
          // For a *more* pronounced bouncy effect, you can use type: "spring"
          // type: "spring",
          // stiffness: 150,     // Adjust stiffness for more/less bounce
          // damping: 10,        // Adjust damping for how quickly it settles
          // mass: 1             // Adjust mass
        },
        // Neon glow animation (same as before, but ensure it runs concurrently)
        boxShadow: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        },
      },
    },
  };


export const neonGlowVariants = {
    animate: {
      boxShadow: [
        '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff', // Magenta
        '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff', // Cyan
        '0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00, 0 0 40px #00ff00', // Green
        '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff', // Back to Magenta
      ],
      transition: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      },
    },
  };