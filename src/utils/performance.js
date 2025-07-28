// Performance utilities for monitoring and optimization

// Debounce function for expensive operations
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function for scroll events
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Check if device prefers reduced motion
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Check if device is low-end
export const isLowEndDevice = () => {
  // Check for various indicators of low-end devices
  return (
    navigator.hardwareConcurrency <= 2 ||
    navigator.deviceMemory <= 2 ||
    /Android.*4\.|iPhone.*OS.*[5-9]_/.test(navigator.userAgent)
  );
};

// Lazy load images
export const lazyLoadImage = (src, placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNGMEYwRjAiLz48L3N2Zz4=') => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(src);
    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = src;
  });
};

// Performance observer for monitoring
export const observePerformance = () => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          console.log('Page load time:', entry.loadEventEnd - entry.fetchStart, 'ms');
        }
        if (entry.entryType === 'paint') {
          console.log(entry.name, entry.startTime, 'ms');
        }
      }
    });
    
    observer.observe({ entryTypes: ['navigation', 'paint'] });
  }
};

// Preload critical resources
export const preloadCriticalResources = () => {
  const criticalResources = [
    // Add any critical images or assets here
  ];
  
  criticalResources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    document.head.appendChild(link);
  });
};
