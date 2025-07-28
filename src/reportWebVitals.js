// Web Vitals monitoring for performance tracking
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry);
    onINP(onPerfEntry);
    onFCP(onPerfEntry);
    onLCP(onPerfEntry);
    onTTFB(onPerfEntry);
  }
};

// Enhanced reporting with console logging
const logPerformanceMetrics = () => {
  const reportMetric = (metric) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`${metric.name}: ${Math.round(metric.value)}ms`);
    }
  };

  onCLS(reportMetric);
  onINP(reportMetric);
  onFCP(reportMetric);
  onLCP(reportMetric);
  onTTFB(reportMetric);
};

export { reportWebVitals, logPerformanceMetrics };
