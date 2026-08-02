import React from 'react';

// Simple placeholder component for Adsense/ad units.
// Configure real ad unit IDs via environment variables or a runtime config.

export default function AdsensePlaceholder({position}){
  // Example: process.env.REACT_APP_ADSENSE_ID could hold the publisher/slot
  const adId = process.env.REACT_APP_ADSENSE_ID || '';

  return (
    <div style={{border:'1px dashed #cfcfcf',padding:12,margin:'16px 0',textAlign:'center',borderRadius:6,background:'#fafafa'}}>
      <div style={{fontSize:12,color:'#666'}}>Ad slot: {position}</div>
      {adId ? (
        <div style={{marginTop:8}}>
          {/* Real ad code (Google Adsense) should be injected here at build/runtime. Do not commit publisher or slot IDs to source. */}
          <div>Adsense configured (REACT_APP_ADSENSE_ID present)</div>
          <div style={{fontSize:11,color:'#888',marginTop:6}}>Publisher ID taken from environment at build time.</div>
        </div>
      ) : (
        <div style={{marginTop:8,color:'#444'}}>Ad placeholder — configure REACT_APP_ADSENSE_ID to display real ads</div>
      )}
    </div>
  );
}
