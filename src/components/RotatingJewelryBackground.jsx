import React from 'react';

const JewelryItem = ({ delay, duration, size, top, left, rotationSpeed, color }) => {
  const style = {
    position: 'absolute',
    top: top,
    left: left,
    width: size,
    height: size,
    background: `linear-gradient(135deg, ${color} 0%, rgba(255,255,255,0.8) 50%, ${color} 100%)`,
    borderRadius: '50%', // Making them round like gems/rings
    opacity: 0.7,
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(5px)',
    animation: `float ${duration}s ease-in-out infinite, rotate ${rotationSpeed}s linear infinite`,
    animationDelay: `${delay}s`,
    zIndex: 0,
  };

  return <div style={style} className="jewelry-placeholder" />;
};

const RotatingJewelryBackground = () => {
  // Styles for animations
  const keyframes = `
    @keyframes float {
      0% { transform: translateY(0px) translateX(0px); }
      50% { transform: translateY(-20px) translateX(10px); }
      100% { transform: translateY(0px) translateX(0px); }
    }
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;

  // Mock data simulating different jewelry pieces scattered in the background
  const items = [
    { id: 1, top: '10%', left: '10%', size: '80px', delay: 0, duration: 6, rotationSpeed: 20, color: '#e0e0e0' }, // Silver
    { id: 2, top: '20%', left: '80%', size: '120px', delay: 1, duration: 7, rotationSpeed: 25, color: '#ffd700' }, // Gold
    { id: 3, top: '60%', left: '15%', size: '100px', delay: 2, duration: 8, rotationSpeed: 22, color: '#b0c4de' }, // Silver/Blue
    { id: 4, top: '70%', left: '75%', size: '90px', delay: 0.5, duration: 6.5, rotationSpeed: 18, color: '#e6e6fa' }, // Gem
    { id: 5, top: '40%', left: '40%', size: '150px', delay: 1.5, duration: 9, rotationSpeed: 30, color: '#fff' }, // Diamond
    { id: 6, top: '85%', left: '30%', size: '70px', delay: 2.5, duration: 5, rotationSpeed: 15, color: '#ffd700' },
  ];

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      overflow: 'hidden',
      zIndex: -1,
      pointerEvents: 'none',
      background: '#111' // Dark background to let jewelry pop
    }}>
      <style>{keyframes}</style>
      
      {/* Overlay to ensure text readability if needed */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
        zIndex: 1
      }} />

      {items.map(item => (
        <JewelryItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default RotatingJewelryBackground;
