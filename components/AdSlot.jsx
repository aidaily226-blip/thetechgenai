import { useEffect, useRef } from 'react';

export default function AdSlot({ slot = 'horizontal', className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Check if script is already added to avoid duplicates on re-renders
    if (containerRef.current.querySelector('script')) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.dataset.cfasync = 'false';
    script.src = 'https://pl29290402.profitablecpmratenetwork.com/11913838880defd0ff54d22f910990ca/invoke.js';

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: '2rem auto', 
        width: '100%',
        maxWidth: '1200px', // Prevent it from getting too large on ultrawide screens
        aspectRatio: '4 / 1', // 4:1 ratio as requested
        overflow: 'hidden',
        background: '#0d1117', // Placeholder background color
        borderRadius: '8px'
      }}
      className={className}
    >
      <div 
        ref={containerRef}
        id="container-11913838880defd0ff54d22f910990ca" 
        style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {/* Adsterra script will inject the ad here */}
      </div>
    </div>
  )
}
