// components/benefits.tsx

export default function BenefitsSection() {
  return (
    <section id="faydalar" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bölüm Başlığı 
        <div className="text-center max-w-3xl mx-auto mb-16">
           <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-2 block">
            İşletmenize Katkısı
          </span> */}
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Wi-Fi sadece internet değil — <em className="text-cyan-300 not-italic font-bold">bir pazarlama aracı</em>
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Güvenli bir hotspot sistemi işletmenizi korurken aynı zamanda müşteri kazanmanızı, geri getirmenizi ve tanımanızı sağlar. Çoğu işletme bunu fark etmeden müşteri kaybediyor.
          </p>
        </div>

      {/* SORU BANDI — Saydam Gri (Glassmorphism) ve Merkezlenmiş */}
        <div className="bg-gray-500/10 backdrop-blur-md border border-gray-600/20 rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center gap-8 mb-12 shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
          
          <div className="max-w-3xl">
            <div className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-white mb-4">
              Geçen ay kaç müşteri bağlandı? Kaçı geri geldi?
            </div>
            <p className="text-gray-400 text-base md:text-lg lg:text-xl m-0 leading-relaxed">
              Eğer cevabı bilmiyorsanız, bu veriler şu an elinizden kayıp gidiyor. Aşağıda ne kaybettiğinizi görün.
            </p>
          </div>

          <a 
            href="#iletisim" 
            className="inline-flex bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-4 px-10 rounded-xl transition-all duration-300 text-lg shadow-[0_0_20px_rgba(0,180,216,0.2)] hover:shadow-[0_0_30px_rgba(0,180,216,0.4)] transform hover:-translate-y-1"
          >
            Ücretsiz Keşif Talep Et &rarr;
          </a>
          
        </div>
        
        {/* ANA FAYDA KARTLARI — 2 Kolonlu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Müşteriyi tanı */}
          <div className="bg-[#13223C]/60 backdrop-blur-md border border-[#1E345E] rounded-2xl p-8 relative overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="absolute -top-6 -right-6 text-9xl opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 select-none">👤</div>
            <div className="text-4xl mb-4">👤</div>
            <h3 className="text-white text-xl font-semibold mb-3">Müşterinizi tanıyın</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Misafir wi-fi'a bağlanmak için adını, telefon veya e-posta adresini bırakır. Artık o kişiye <strong className="text-gray-200">"Bu hafta sonu özel menümüz var"</strong> diye SMS veya mail atabilirsiniz. Reklam bütçesi harcamadan kendi müşterinize ulaşırsınız.
            </p>
            <div className="mt-5 p-3 bg-cyan-500/10 rounded-lg border-l-4 border-cyan-500">
              <span className="text-xs text-cyan-400 italic">"Geçen ay 340 yeni müşteri kaydı topladık, hiç reklam vermedik."</span>
            </div>
          </div>

          {/* Tekrar ziyaret */}
          <div className="bg-[#13223C]/60 backdrop-blur-md border border-[#1E345E] rounded-2xl p-8 relative overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="absolute -top-6 -right-6 text-9xl opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 select-none">🔄</div>
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-white text-xl font-semibold mb-3">Müşterinizi geri getirin</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Sistem aynı cihazın tekrar bağlandığını tanır. Hangi müşteri kaç kez geldi, kim bir daha gelmedi — bunu görürsünüz. Sadık müşterinize özel kampanya yaparsınız, kaybettiğiniz müşteriyi <strong className="text-gray-200">yeniden kazanmak için</strong> harekete geçersiniz.
            </p>
            <div className="mt-5 p-3 bg-cyan-500/10 rounded-lg border-l-4 border-cyan-500">
              <span className="text-xs text-cyan-400 italic">Sadık müşteri yeni müşteri kazanmaktan 5× daha az maliyetlidir.</span>
            </div>
          </div>

          {/* Sosyal medya */}
          <div className="bg-[#13223C]/60 backdrop-blur-md border border-[#1E345E] rounded-2xl p-8 relative overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="absolute -top-6 -right-6 text-9xl opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 select-none">📱</div>
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-white text-xl font-semibold mb-3">Sosyal medyanızı büyütün</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Wi-fi bağlantı ekranına <strong className="text-gray-200">"Instagram'ımızı takip et"</strong> veya <strong className="text-gray-200">"Google'da yorum bırak"</strong> adımı koyabilirsiniz. Müşteri zaten bağlanmak istiyor — bu adım sadece 10 saniye alır ama size her gün organik takipçi ve yorum kazandırır.
            </p>
            <div className="mt-5 p-3 bg-cyan-500/10 rounded-lg border-l-4 border-cyan-500">
              <span className="text-xs text-cyan-400 italic">Günde 50 bağlantı = ayda 1.500 potansiyel takipçi veya yorum fırsatı.</span>
            </div>
          </div>

          {/* Anlık kampanya */}
          <div className="bg-[#13223C]/60 backdrop-blur-md border border-[#1E345E] rounded-2xl p-8 relative overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="absolute -top-6 -right-6 text-9xl opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 select-none">📢</div>
            <div className="text-4xl mb-4">📢</div>
            <h3 className="text-white text-xl font-semibold mb-3">Anlık kampanya yayınlayın</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Bağlantı ekranı sizin reklam panonuzdur. <strong className="text-gray-200">Bugünün özel menüsü, hafta sonu etkinliği, 2. kahve kampanyası</strong> — bunları dakikalar içinde değiştirebilirsiniz. Müşteri bağlanırken görür, sipariş verirken aklında olur.
            </p>
            <div className="mt-5 p-3 bg-cyan-500/10 rounded-lg border-l-4 border-cyan-500">
              <span className="text-xs text-cyan-400 italic">Ekstra bütçe yok. Müşteri zaten orada — sadece doğru mesajı görüyor.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}