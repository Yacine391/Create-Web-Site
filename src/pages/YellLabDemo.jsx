import React from 'react';
import { Link } from 'react-router-dom';
import RotatingJewelryBackground from '../components/RotatingJewelryBackground';

const YellLabDemo = () => {
  return (
    <div className="yell-demo-page" style={{ minHeight: '100vh', color: 'white', fontFamily: 'sans-serif' }}>
      <RotatingJewelryBackground />
      
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2rem 4rem', position: 'relative', zIndex: 10 }}>
        <div className="logo" style={{ fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '2px' }}>YELL LAB</div>
        <nav>
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
            <li>SHOP</li>
            <li>COLLECTIONS</li>
            <li>ABOUT</li>
            <li><Link to="/" style={{ color: 'inherit', textDecoration: 'underline' }}>BACK TO HOME</Link></li>
          </ul>
        </nav>
      </header>

      <main style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '80vh', 
        position: 'relative', 
        zIndex: 10,
        textAlign: 'center'
      }}>
        <h1 style={{ 
          fontSize: '5rem', 
          fontWeight: '900', 
          lineHeight: '1', 
          marginBottom: '1rem',
          textTransform: 'uppercase',
          letterSpacing: '-2px',
          background: 'linear-gradient(to right, #fff, #aaa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Defy Gravity.
        </h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem', opacity: 0.8 }}>
          Discover the new collection of avant-garde jewelry designed for the bold.
        </p>
        <button style={{
          padding: '1rem 2.5rem',
          background: 'white',
          color: 'black',
          border: 'none',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Explore Collection
        </button>
      </main>
    </div>
  );
};

export default YellLabDemo;
