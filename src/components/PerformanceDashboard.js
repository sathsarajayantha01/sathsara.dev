import React, { useState, useEffect } from 'react';
import { 
  getDevicePerformance, 
  monitorMemoryUsage, 
  monitorFrameRate 
} from '../utils/performance';

const PerformanceDashboard = () => {
  const [devicePerf, setDevicePerf] = useState(null);
  const [memoryUsage, setMemoryUsage] = useState(null);
  const [fps, setFps] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return;

    setDevicePerf(getDevicePerformance());
    
    // Monitor memory usage every 5 seconds
    const memoryInterval = setInterval(() => {
      const usage = monitorMemoryUsage();
      setMemoryUsage(usage);
    }, 5000);

    // Monitor FPS
    monitorFrameRate((currentFps) => {
      setFps(currentFps);
    });

    return () => {
      clearInterval(memoryInterval);
    };
  }, []);

  // Don't render in production
  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-4 right-4 z-[9999] bg-blue-600 text-white px-3 py-2 rounded-lg text-sm shadow-lg hover:bg-blue-700 transition-colors"
        style={{ fontSize: '12px' }}
      >
        📊 Perf
      </button>

      {/* Performance dashboard */}
      {isVisible && (
        <div className="fixed top-16 right-4 z-[9998] bg-black/90 text-white p-4 rounded-lg shadow-xl backdrop-blur-sm max-w-xs">
          <h3 className="text-sm font-bold mb-3 text-blue-400">Performance Monitor</h3>
          
          {/* Device Performance */}
          {devicePerf && (
            <div className="mb-3">
              <h4 className="text-xs font-semibold text-gray-300 mb-1">Device Performance</h4>
              <div className="text-xs space-y-1">
                <div className="flex justify-between">
                  <span>Level:</span>
                  <span className={`font-bold ${
                    devicePerf.level === 'high' ? 'text-green-400' :
                    devicePerf.level === 'medium' ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {devicePerf.level.toUpperCase()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Memory:</span>
                  <span>{devicePerf.memory}GB</span>
                </div>
                <div className="flex justify-between">
                  <span>Cores:</span>
                  <span>{devicePerf.cores}</span>
                </div>
                <div className="flex justify-between">
                  <span>Network:</span>
                  <span className="text-xs">{devicePerf.connection}</span>
                </div>
              </div>
            </div>
          )}

          {/* FPS Monitor */}
          <div className="mb-3">
            <h4 className="text-xs font-semibold text-gray-300 mb-1">Frame Rate</h4>
            <div className="flex justify-between">
              <span className="text-xs">FPS:</span>
              <span className={`text-sm font-bold ${
                fps >= 55 ? 'text-green-400' :
                fps >= 30 ? 'text-yellow-400' : 'text-red-400'
              }`}>
                {fps}
              </span>
            </div>
            {fps < 30 && (
              <div className="text-xs text-red-400 mt-1">⚠️ Low FPS detected</div>
            )}
          </div>

          {/* Memory Usage */}
          {memoryUsage && (
            <div className="mb-3">
              <h4 className="text-xs font-semibold text-gray-300 mb-1">Memory Usage</h4>
              <div className="text-xs space-y-1">
                <div className="flex justify-between">
                  <span>Used:</span>
                  <span>{memoryUsage.used}MB</span>
                </div>
                <div className="flex justify-between">
                  <span>Total:</span>
                  <span>{memoryUsage.total}MB</span>
                </div>
                <div className="flex justify-between">
                  <span>Usage:</span>
                  <span className={`${
                    (memoryUsage.used / memoryUsage.limit) > 0.9 ? 'text-red-400' :
                    (memoryUsage.used / memoryUsage.limit) > 0.7 ? 'text-yellow-400' : 'text-green-400'
                  }`}>
                    {Math.round((memoryUsage.used / memoryUsage.limit) * 100)}%
                  </span>
                </div>
              </div>
              {(memoryUsage.used / memoryUsage.limit) > 0.9 && (
                <div className="text-xs text-red-400 mt-1">⚠️ High memory usage</div>
              )}
            </div>
          )}

          {/* Tips */}
          <div className="text-xs text-gray-400 border-t border-gray-700 pt-2">
            <div>💡 Tips:</div>
            <ul className="list-disc list-inside mt-1 space-y-1">
              <li>FPS &lt; 30 = Performance issue</li>
              <li>Memory &gt; 90% = Optimization needed</li>
              <li>Low-end = Heavy effects disabled</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default PerformanceDashboard;
