// Performance utilities for monitoring and optimization

// Enhanced debounce function for expensive operations
export const debounce = (func, wait, immediate = false) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

// Enhanced throttle function with leading and trailing options
export const throttle = (func, limit, options = {}) => {
  let inThrottle;
  let lastFunc;
  let lastRan;
  const { leading = true, trailing = true } = options;
  
  return function(...args) {
    const context = this;
    if (!lastRan && leading) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (trailing && (Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};

// Request Animation Frame throttle for smooth animations
export const rafThrottle = (func) => {
  let rafId = null;
  return function(...args) {
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      func.apply(this, args);
      rafId = null;
    });
  };
};

// Check if device prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Enhanced device performance detection
export const getDevicePerformance = () => {
  const memory = navigator.deviceMemory || 4; // Default to 4GB if not available
  const cores = navigator.hardwareConcurrency || 2; // Default to 2 cores
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  
  let performanceLevel = 'high';
  
  // Low-end device detection
  if (memory <= 2 || cores <= 2) {
    performanceLevel = 'low';
  } else if (memory <= 4 || cores <= 4) {
    performanceLevel = 'medium';
  }
  
  // Consider network speed
  if (connection) {
    const effectiveType = connection.effectiveType;
    if (effectiveType === 'slow-2g' || effectiveType === '2g') {
      performanceLevel = 'low';
    } else if (effectiveType === '3g' && performanceLevel === 'high') {
      performanceLevel = 'medium';
    }
  }
  
  return {
    level: performanceLevel,
    memory,
    cores,
    connection: connection ? connection.effectiveType : 'unknown'
  };
};

// Check if device is low-end (legacy function for compatibility)
export const isLowEndDevice = () => {
  return getDevicePerformance().level === 'low';
};

// Enhanced intersection observer for lazy loading
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  };
  
  return new IntersectionObserver(callback, { ...defaultOptions, ...options });
};

// Optimized image lazy loading with WebP support
export const lazyLoadImage = (src, options = {}) => {
  const { 
    placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNGMEYwRjAiLz48L3N2Zz4=',
    webpSrc = null,
    quality = 'high'
  } = options;
  
  return new Promise((resolve, reject) => {
    // Check WebP support
    const supportsWebP = (function() {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').startsWith('data:image/webp');
    })();
    
    const devicePerf = getDevicePerformance();
    let imageSrc = src;
    
    // Use WebP if supported and available
    if (supportsWebP && webpSrc) {
      imageSrc = webpSrc;
    }
    
    // Adjust quality based on device performance
    if (devicePerf.level === 'low' && quality === 'high') {
      // Could implement quality reduction logic here
    }
    
    const img = new Image();
    img.onload = () => resolve(imageSrc);
    img.onerror = () => {
      // Fallback to original if WebP fails
      if (imageSrc !== src) {
        const fallbackImg = new Image();
        fallbackImg.onload = () => resolve(src);
        fallbackImg.onerror = () => reject(new Error('Failed to load image'));
        fallbackImg.src = src;
      } else {
        reject(new Error('Failed to load image'));
      }
    };
    img.src = imageSrc;
  });
};

// Enhanced performance observer for monitoring
export const observePerformance = () => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const loadTime = entry.loadEventEnd - entry.fetchStart;
          console.log('Page load time:', loadTime, 'ms');
          
          // Warn if page load is slow
          if (loadTime > 3000) {
            console.warn('Slow page load detected:', loadTime, 'ms');
          }
        }
        if (entry.entryType === 'paint') {
          console.log(entry.name, entry.startTime, 'ms');
          
          // Track important paint metrics
          if (entry.name === 'first-contentful-paint' && entry.startTime > 2000) {
            console.warn('Slow First Contentful Paint:', entry.startTime, 'ms');
          }
        }
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime, 'ms');
          if (entry.startTime > 2500) {
            console.warn('Poor LCP score:', entry.startTime, 'ms');
          }
        }
      }
    });
    
    try {
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
    } catch (e) {
      // Fallback for older browsers
      observer.observe({ entryTypes: ['navigation', 'paint'] });
    }
  }
};

// Memory usage monitoring
export const monitorMemoryUsage = () => {
  if ('memory' in performance) {
    const memory = performance.memory;
    const usage = {
      used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
      total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
      limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
    };
    
    console.log('Memory usage:', usage);
    
    // Warn if memory usage is high
    if (usage.used / usage.limit > 0.9) {
      console.warn('High memory usage detected:', usage);
    }
    
    return usage;
  }
  return null;
};

// Preload critical resources with priority hints
export const preloadCriticalResources = () => {
  const criticalResources = [
    // Add your critical resources here
    { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: true },
    // { href: '/images/hero-bg.webp', as: 'image', type: 'image/webp' },
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    
    if (resource.type) link.type = resource.type;
    if (resource.crossorigin) link.crossOrigin = 'anonymous';
    
    // Add priority hint if supported
    if ('importance' in link) {
      link.importance = 'high';
    }
    
    document.head.appendChild(link);
  });
};

// Frame rate monitoring
export const monitorFrameRate = (callback, duration = 1000) => {
  let frames = 0;
  let lastTime = performance.now();
  
  function tick() {
    frames++;
    const currentTime = performance.now();
    
    if (currentTime >= lastTime + duration) {
      const fps = Math.round(frames * 1000 / (currentTime - lastTime));
      callback(fps);
      
      if (fps < 30) {
        console.warn('Low FPS detected:', fps);
      }
      
      frames = 0;
      lastTime = currentTime;
    }
    
    requestAnimationFrame(tick);
  }
  
  requestAnimationFrame(tick);
};

// Optimize CSS animations based on device performance
export const optimizeAnimations = () => {
  const devicePerf = getDevicePerformance();
  const root = document.documentElement;
  
  if (devicePerf.level === 'low') {
    // Disable heavy animations on low-end devices
    root.style.setProperty('--animation-duration', '0.1s');
    root.style.setProperty('--animation-reduced', '1');
    
    // Disable particle effects
    const particles = document.querySelectorAll('.particle, .floating-particle');
    particles.forEach(particle => {
      particle.style.display = 'none';
    });
  } else if (devicePerf.level === 'medium') {
    // Reduce animation complexity
    root.style.setProperty('--animation-duration', '0.3s');
    root.style.setProperty('--animation-reduced', '0.5');
  }
};

// Efficient scroll handler
export const createOptimizedScrollHandler = (callback) => {
  let ticking = false;
  
  return throttle(() => {
    if (!ticking) {
      requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  }, 16); // ~60fps
};

// Bundle size analyzer (development only)
export const analyzeBundleSize = () => {
  if (process.env.NODE_ENV === 'development') {
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;
    
    scripts.forEach(script => {
      fetch(script.src, { method: 'HEAD' })
        .then(response => {
          const size = response.headers.get('content-length');
          if (size) {
            totalSize += parseInt(size);
            console.log(`Script: ${script.src}, Size: ${(parseInt(size) / 1024).toFixed(2)}KB`);
          }
        })
        .catch(() => {}); // Ignore CORS errors
    });
    
    setTimeout(() => {
      console.log(`Total estimated bundle size: ${(totalSize / 1024).toFixed(2)}KB`);
    }, 1000);
  }
};
