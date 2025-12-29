import React from 'react';

const WomenPerfume = () => {
  return (
    <section className="py-24 px-6 bg-[#fffbf9] flex justify-center items-center min-h-[600px] overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col md:flex-row-reverse items-center relative">
        
        {/* Arxa fon detalı: Şəffaf və iri yazı (Pudra tonunda) */}
        <div className="absolute -right-20 bottom-0 select-none pointer-events-none hidden lg:block">
          <h1 className="text-[180px] font-black text-rose-50/80 leading-none uppercase">
            Aura
          </h1>
        </div>

        {/* Şəkil Bölməsi - Tağ formalı zərif kəsim */}
        <div className="w-full md:w-1/2 flex justify-center relative z-10">
          <div className="relative group">
            {/* Dekorativ element: İncə dairəvi pudra rəngli xətt */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-rose-100 rounded-full -z-10 group-hover:scale-110 transition-transform duration-1000"></div>
            
            <div className="overflow-hidden shadow-[0_20px_60px_rgba(251,228,228,0.4)] rounded-t-[12rem] rounded-b-lg border-[8px] border-white">
              <img 
                src="https://avonpartner.az/assets/images/1744192646tod.webp" 
                alt="Women's Fragrance" 
                className="w-[300px] md:w-[380px] h-auto object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
              />
            </div>

            {/* Sol aşağıda minimalist həndəsi blok */}
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-rose-50/40 backdrop-blur-sm border border-rose-100 -z-10"></div>
          </div>
        </div>

        {/* Mətn Bölməsi - Zərif və Poetik */}
        <div className="w-full md:w-1/2 mt-16 md:mt-0 md:pr-16 flex flex-col items-center md:items-end text-center md:text-right">
          <div className="space-y-2 mb-8">
            <span className="text-rose-300 text-xs font-bold tracking-[0.5em] uppercase">
              The Collection
            </span>
            <h2 className="text-5xl md:text-7xl font-extralight text-stone-800 tracking-tighter">
              İpək <br /> <span className="font-bold text-rose-400">Yumşaqlığı</span>
            </h2>
          </div>

          <div className="max-w-sm space-y-6">
            <p className="text-stone-500 text-lg leading-relaxed font-light">
              Görünməz bir ipək kimi bədəni saran, 
              isti və zərif bir varlıq. Sadəliyin daxilində gizlənmiş sonsuz bir cazibə.
            </p>
            
            {/* Minimalist Vizual Ayırıcı */}
            <div className="flex items-center justify-center md:justify-end gap-3">
              <div className="w-2 h-2 rounded-full bg-rose-200"></div>
              <div className="w-32 h-[1px] bg-rose-100"></div>
            </div>

            <p className="text-stone-400 text-sm italic tracking-wide">
              "Əsl zəriflik, artıq heç nəyi çıxara bilməyəcəyiniz nöqtədə başlayır."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WomenPerfume;