import React from 'react';

export default function OmnitekLogo({ width = 400, height = 400, className = "" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 800 800" 
      width={width} 
      height={height} 
      className={className}
    >
      <defs>
        {/* Üstteki Yay ve Geçiş Renkleri */}
        <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0D4B75" />
          <stop offset="50%" stopColor="#2BB673" />
          <stop offset="100%" stopColor="#7AC143" />
        </linearGradient>

        {/* H3S Büyük Harf Geçiş Renkleri */}
        <linearGradient id="h3sGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0071BC" />
          <stop offset="50%" stopColor="#1B75BB" />
          <stop offset="100%" stopColor="#7AC143" />
        </linearGradient>
      </defs>

      <style>{`
        .nav-text { font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; font-weight: 500; fill: #0D2C54; }
        .sub-text { font-family: 'Inter', sans-serif; font-weight: 400; fill: #1A2B49; letter-spacing: 1px; }
        .bold-text { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 800; fill: url(#h3sGradient); }
      `}</style>

      {/* 1. Üstteki Oval Yay (Arc) */}
      <path 
        d="M 240 280 Q 400 180 560 280" 
        fill="none" 
        stroke="url(#arcGradient)" 
        strokeWidth="12" 
        strokeLinecap="round" 
      />

      {/* 2. "Omnitek" Yazısı */}
      <text x="400" y="370" fontSize="105" textAnchor="middle" className="nav-text" letter-spacing="-2px">
        Omnitek
      </text>

      {/* 3. Ortadaki İnce Yeşil Çizgi */}
      <line x1="20" y1="410" x2="780" y2="410" stroke="#7AC143" strokeWidth="3" />

      {/* 4. Büyük "H3S" Bölümü */}
      {/* H Harfi */}
      <text x="220" y="580" fontSize="210" className="bold-text">H</text>
      
      {/* 3 Harfi */}
      <text x="365" y="580" fontSize="210" className="bold-text">3</text>
      
      {/* Wi-Fi Dalgalı Anahtar Simgesi (3 ile S Arasında) */}
      <g transform="translate(525, 495) scale(1.1)">
        {/* Anahtarın Gövdesi ve Dişleri */}
        <path d="M15 25 L35 45 M27 37 L33 35 M31 41 L37 39" stroke="#0071BC" strokeWidth="5" strokeLinecap="round"/>
        {/* Sinyal Dalgaları */}
        <circle cx="10" cy="20" r="4" fill="#2BB673" />
        <path d="M6 12 A 10 10 0 0 1 18 16" fill="none" stroke="#2BB673" strokeWidth="3" strokeLinecap="round" />
        <path d="M2 6 A 16 16 0 0 1 24 10" fill="none" stroke="#2BB673" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* S Harfi */}
      <text x="545" y="580" fontSize="210" className="bold-text">S</text>

      {/* 5. Alt Başlık "HotSpotSecuritySystems" */}
      <text x="400" y="640" fontSize="36" textAnchor="middle" className="sub-text">
        HotSpotSecuritySystems
      </text>
    </svg>
  );
}