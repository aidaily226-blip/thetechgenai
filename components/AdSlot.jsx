// AdSense Ad Slot Component
// Replace data-ad-client and data-ad-slot with your real AdSense values after approval

export default function AdSlot({ slot = 'horizontal', className = '' }) {
  const styles = {
    horizontal: { width: '100%', minHeight: '90px', maxHeight: '90px' },
    rectangle: { width: '300px', minHeight: '250px' },
    vertical: { width: '160px', minHeight: '600px' },
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem 0', ...styles[slot] }}
      className={className}>
      {/* 
        REPLACE THIS WITH YOUR REAL ADSENSE CODE AFTER APPROVAL:
        
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        
        Add this script in pages/_document.js:
        <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" />
      */}
      <div style={{
        width: '100%', height: '100%', minHeight: styles[slot].minHeight,
        background: '#0d1117', border: '1px dashed #1e2a38', borderRadius: '8px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#475569', fontSize: '0.75rem', fontFamily: 'JetBrains Mono, monospace'
      }}>
        Ad Slot — Replace with AdSense code after approval
      </div>
    </div>
  )
}
