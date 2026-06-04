'use client';

import React from 'react';

export default function WhatsAppButton() {
  // Kendi telefon numaranı buraya yaz (Başına 90 ekleyerek sıfırsız)
  const phoneNumber = "905369202214"; 
  
  // Esnafın sana göndereceği hazır mesaj şablonu
  const message = "Merhaba Omnitek, kafem/restoranım için Wi-Fi hotspot (H3S) çözümleri hakkında bilgi almak ve hızlı randevu oluşturmak istiyorum.";
  
  // URL formatına dönüştürme
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 group"
      aria-label="WhatsApp ile İletişime Geçin"
    >
      {/* Yeşil WhatsApp Logosu Simgesi */}
      <svg 
        className="w-8 h-8 fill-current" 
        viewBox="0 0 24 24"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.93 0c3.165.001 6.14 1.233 8.377 3.469 2.237 2.236 3.466 5.21 3.466 8.377 0 6.533-5.337 11.883-11.87 11.883-2.002-.001-3.973-.51-5.713-1.478L0 24zm6.59-3.859c1.64.973 3.244 1.488 4.74 1.489 5.383 0 9.761-4.383 9.766-9.764.002-2.607-1.011-5.059-2.854-6.903-1.843-1.842-4.29-2.856-6.896-2.858-5.392 0-9.771 4.382-9.776 9.763-.002 1.614.43 3.192 1.252 4.601L1.921 22.18l4.726-1.241zm11.365-6.113c-.301-.151-1.781-.879-2.056-.979-.275-.1-.475-.151-.675.151-.199.302-.774.979-.949 1.18-.174.201-.35.226-.651.075-1.204-.602-2.006-1.06-2.812-2.443-.211-.362.211-.336.604-1.121.066-.13.033-.245-.016-.346-.05-.101-.475-1.144-.651-1.564-.171-.411-.344-.355-.475-.362-.123-.007-.263-.009-.404-.009s-.369.053-.563.262c-.193.208-.738.721-.738 1.758s.754 2.038.86 2.179c.105.14 1.484 2.266 3.596 3.177 1.211.522 1.802.617 2.474.517.472-.071 1.442-.589 1.643-1.157.2-.569.2-1.056.14-.157-.06-.101-.26-.151-.561-.302z"/>
      </svg>
      
      {/* Üzerine gelince açılan ufak bir "Bizimle İletişime Geçin" balonu */}
      <span className="absolute right-16 bg-white text-gray-800 text-xs font-medium px-3 py-1.5 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none border border-gray-100">
        WhatsApp'tan Hemen İletişime Geçin
      </span>
    </a>
  );
}