import React from 'react';

const MenPerfume = () => {
  return (
    <section className="py-24 px-6 bg-[#f7fbff] flex justify-center items-center min-h-[600px] overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center relative">
        
        {/* Sol tərəf: İri və şəffaf arxa fon yazısı (Dizayn detalı) */}
        <div className="absolute -left-20 top-0 select-none pointer-events-none hidden lg:block">
          <h1 className="text-[180px] font-black text-blue-100/50 leading-none">
            AQUA
          </h1>
        </div>

        {/* Şəkil Bölməsi - Asimmetrik və Təmiz */}
        <div className="w-full md:w-1/2 flex justify-center relative z-10">
          <div className="relative group">
            {/* Şəffaf mavi dekorativ kvadrat */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-blue-200"></div>
            
            <div className="overflow-hidden shadow-[20px_20px_60px_rgba(0,0,0,0.05)] rounded-sm">
              <img 
                src="https://www.avonpartner.az/assets/images/1741690812sunset%20blu.webp" 
                alt="Men's Fragrance" 
                className="w-[300px] md:w-[400px] h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out"
              />
            </div>

            {/* Şəffaf mavi dekorativ kvadrat - aşağı sağ */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-blue-200"></div>
          </div>
        </div>

        {/* Mətn Bölməsi - Poetik və Minimalist */}
        <div className="w-full md:w-1/2 mt-16 md:mt-0 md:pl-16 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="space-y-2 mb-8">
            <span className="text-blue-400 text-xs font-bold tracking-[0.5em] uppercase">
              The Essence
            </span>
            <h2 className="text-5xl md:text-7xl font-extralight text-slate-900 tracking-tighter">
              Səssiz <br /> <span className="font-bold text-blue-500">Dərinlik</span>
            </h2>
          </div>

          <div className="max-w-sm space-y-6">
            <p className="text-slate-500 text-lg leading-relaxed font-light">
              Bəzən ən güclü sözlər heç vaxt deyilməyənlərdir. 
              Hava kimi yüngül, dəniz qədər dərin bir varlıq.
            </p>
            
            {/* Minimalist Vizual Ayırıcı */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-[1px] bg-blue-300"></div>
              <div className="w-2 h-2 rounded-full border border-blue-300"></div>
              <div className="w-12 h-[1px] bg-blue-300"></div>
            </div>

            <p className="text-slate-400 text-sm italic">
              "Minimalizm sadəcə bir seçim deyil, o, artıq olan hər şeydən imtina etməkdir."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MenPerfume;