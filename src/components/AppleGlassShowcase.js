import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AppleGlassShowcase = () => {
  const [activeTab, setActiveTab] = useState('cards');

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Apple-Style Glass Effects
        </h2>
        
        {/* Pills Navigation */}
        <div className="liquid-pill-tabs w-max mx-auto mb-12">
          <div className="flex relative">
            <motion.div 
              className="liquid-pill-tab-bg"
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ 
                width: activeTab === 'cards' ? '108px' : 
                       activeTab === 'buttons' ? '125px' : 
                       activeTab === 'widgets' ? '123px' : '130px',
                x: activeTab === 'cards' ? 0 : 
                   activeTab === 'buttons' ? 113 : 
                   activeTab === 'widgets' ? 243 : 371
              }}
            />
            <button 
              className={`liquid-pill-tab ${activeTab === 'cards' ? 'active' : ''}`}
              onClick={() => setActiveTab('cards')}
            >
              Cards
            </button>
            <button 
              className={`liquid-pill-tab ${activeTab === 'buttons' ? 'active' : ''}`}
              onClick={() => setActiveTab('buttons')}
            >
              Buttons
            </button>
            <button 
              className={`liquid-pill-tab ${activeTab === 'widgets' ? 'active' : ''}`}
              onClick={() => setActiveTab('widgets')}
            >
              Widgets
            </button>
            <button 
              className={`liquid-pill-tab ${activeTab === 'navigation' ? 'active' : ''}`}
              onClick={() => setActiveTab('navigation')}
            >
              Navigation
            </button>
          </div>
        </div>
        
        {/* Cards Display */}
        {activeTab === 'cards' && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Apple Glass Card */}
            <div className="apple-glass p-6 h-64 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Apple Glass Card</h3>
                <p className="text-sm text-gray-300">Modern glass effect with interactive hover highlight</p>
              </div>
              <div className="text-xs text-gray-400">
                iOS 17 / macOS Sonoma Style
              </div>
            </div>
            
            {/* macOS Card */}
            <div className="macos-card p-6 h-64 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">macOS Settings Card</h3>
                <p className="text-sm text-gray-300">Subtle glass effect with hover lift animation</p>
              </div>
              <div className="text-xs text-gray-400">
                macOS Sonoma Style
              </div>
            </div>
            
            {/* Liquid Glass Card */}
            <div className="liquid-glass-card p-6 h-64 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Liquid Glass Card</h3>
                <p className="text-sm text-gray-300">Interactive glass effect with animated bubbles</p>
              </div>
              <div className="text-xs text-gray-400">
                Enhanced Glassmorphism
              </div>
            </div>
            
            {/* Aurora Border Card */}
            <div className="aurora-border h-64">
              <div className="h-full p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Aurora Border Card</h3>
                  <p className="text-sm text-gray-300">Animated border gradient effect</p>
                </div>
                <div className="text-xs text-gray-400">
                  Animated Glassmorphism
                </div>
              </div>
            </div>
            
            {/* iOS 17 Bottom Sheet */}
            <div className="ios-bottom-sheet h-64 flex flex-col justify-between pt-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">iOS 17 Bottom Sheet</h3>
                <p className="text-sm text-gray-300">Modal sheet with pull indicator</p>
              </div>
              <div className="text-xs text-gray-400 mb-4">
                iOS 17 Style
              </div>
            </div>
            
            {/* Liquid Hover Card */}
            <div className="liquid-hover-card p-6 h-64 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Interactive Hover Card</h3>
                <p className="text-sm text-gray-300">Tracks mouse position for highlight effect</p>
              </div>
              <div className="text-xs text-gray-400">
                Advanced Interaction
              </div>
            </div>
          </motion.div>
        )}

        {/* Buttons Display */}
        {activeTab === 'buttons' && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center gap-4">
              <button className="ios-button w-full">
                iOS 17 Button
              </button>
              <p className="text-xs text-gray-400">Standard iOS 17 Button</p>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <button className="dynamic-glass-button w-full">
                Dynamic Glass Button
              </button>
              <p className="text-xs text-gray-400">Animated glass effect</p>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <button className="liquid-button w-full">
                Liquid Button
              </button>
              <p className="text-xs text-gray-400">Interactive liquid effect</p>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <div className="liquid-spinner"></div>
              <p className="text-xs text-gray-400">Liquid Spinner</p>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <div className="macos-toolbar w-full">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <div className="flex-1"></div>
                <div className="w-6 h-6 rounded-full bg-white/10"></div>
              </div>
              <p className="text-xs text-gray-400">macOS Window Controls</p>
            </div>
            
            <div className="flex flex-col items-center gap-4">
              <div className="ios-menu w-full">
                <div className="ios-menu-item">Menu Item 1</div>
                <div className="ios-menu-item">Menu Item 2</div>
              </div>
              <p className="text-xs text-gray-400">iOS 17 Menu</p>
            </div>
          </motion.div>
        )}
        
        {/* Widgets Display */}
        {activeTab === 'widgets' && (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="ios-widget">
              <h3 className="text-lg font-semibold mb-2">iOS 17 Widget</h3>
              <p className="text-sm text-gray-300">Modern widget design with glass effect</p>
              <div className="mt-4 flex justify-between">
                <div className="w-12 h-12 rounded-xl bg-white/10"></div>
                <div className="w-12 h-12 rounded-xl bg-white/10"></div>
                <div className="w-12 h-12 rounded-xl bg-white/10"></div>
              </div>
            </div>
            
            <div className="macos-notification">
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">Notification Title</h3>
                <span className="text-xs text-gray-400">now</span>
              </div>
              <p className="text-sm text-gray-300">This is a notification message with macOS style glass effect</p>
              <div className="mt-4 flex justify-end gap-2">
                <button className="text-sm px-3 py-1 bg-white/10 rounded-md">Close</button>
                <button className="text-sm px-3 py-1 bg-blue-500/80 rounded-md">Action</button>
              </div>
            </div>
            
            <div className="macos-search col-span-full">
              <input type="text" placeholder="Search..." />
              <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="bg-white/10 rounded-lg p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-blue-500/30 flex items-center justify-center">
                    <span>A</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Search Result 1</div>
                    <div className="text-xs text-gray-400">Description</div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md bg-purple-500/30 flex items-center justify-center">
                    <span>B</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Search Result 2</div>
                    <div className="text-xs text-gray-400">Description</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="liquid-glass-section p-6 col-span-full">
              <h3 className="text-lg font-semibold mb-2">Liquid Glass Section</h3>
              <p className="text-sm text-gray-300">Full section with advanced glass effect and animated background</p>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="aspect-square rounded-xl bg-white/10"></div>
                <div className="aspect-square rounded-xl bg-white/10"></div>
                <div className="aspect-square rounded-xl bg-white/10"></div>
                <div className="aspect-square rounded-xl bg-white/10"></div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Navigation Display */}
        {activeTab === 'navigation' && (
          <motion.div 
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="macos-toolbar w-full">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white/10 rounded-lg px-4 py-1 text-sm">Website Title</div>
              </div>
              <div className="w-6 h-6 rounded-full bg-white/10"></div>
            </div>
            
            <div className="macos-dock mx-auto">
              <div className="macos-dock-item bg-gradient-to-br from-blue-500 to-indigo-600"></div>
              <div className="macos-dock-item bg-gradient-to-br from-blue-500 to-black"></div>
              <div className="macos-dock-item bg-gradient-to-br from-red-500 to-rose-600"></div>
              <div className="macos-dock-item bg-gradient-to-br from-amber-500 to-orange-600"></div>
              <div className="macos-dock-item bg-gradient-to-br from-purple-500 to-violet-600"></div>
            </div>
            
            <div className="liquid-toolbar w-full flex justify-between">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-md bg-white/10"></div>
                <div className="w-6 h-6 rounded-md bg-white/10"></div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-md bg-white/10"></div>
                <div className="w-6 h-6 rounded-md bg-white/10"></div>
              </div>
            </div>
            
            <div className="ios-menu w-full mx-auto">
              <div className="ios-menu-item">
                <div className="w-5 h-5 rounded-md bg-blue-500/40"></div>
                <span>Menu Item 1</span>
              </div>
              <div className="ios-menu-item">
                <div className="w-5 h-5 rounded-md bg-purple-500/40"></div>
                <span>Menu Item 2</span>
              </div>
              <div className="ios-menu-item">
                <div className="w-5 h-5 rounded-md bg-blue-500/40"></div>
                <span>Menu Item 3</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AppleGlassShowcase;
