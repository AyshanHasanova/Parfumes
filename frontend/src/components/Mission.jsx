import React from 'react';

const Mission = () => {
  return (
    <section className="py-12 px-6 md:py-24 bg-white flex justify-center overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Sol Tərəf: Mətn Bölməsi */}
        <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">
          <span className="inline-block px-4 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold mb-5 tracking-[0.2em] uppercase">
            Məqsədimiz
          </span>
          
          <h2 className="text-3xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Bizim <span className="text-yellow-500">missiyamız</span>
          </h2>
          
          <div className="relative">
            {/* Dekorativ sarı xətt */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-yellow-400 rounded-full hidden md:block"></div>
            
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium md:pl-8">
              Fleam Team olaraq, biz standartlardan kənara çıxırıq. Hər bir ətirimiz fərdiliyi vurğulamaq üçün xüsusi olaraq dizayn edilib. 
              <br className="my-4 block" />
              Biz sadəcə qoxu satmırıq; biz sizə özünüzü ifadə etməyin ən estetik yolunu təqdim edirik. 
              Modern, qalıcı və təsir edici. <span className="text-yellow-600 font-semibold italic">Sərhədləri qoxunla müəyyən et.</span>
            </p>
          </div>

          <div className="mt-10">
            <button className="px-10 py-4 border-2 border-yellow-400 text-yellow-700 font-bold rounded-2xl hover:bg-yellow-400 hover:text-yellow-950 transition-all duration-300 active:scale-95 uppercase tracking-wider text-sm">
              Daha Ətraflı
            </button>
          </div>
        </div>

        {/* Sağ Tərəf: Şəkil Bölməsi */}
        <div className="w-full md:w-1/2 order-1 md:order-2 relative">
          {/* Arxa fondakı dekorativ element */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-50 rounded-full blur-3xl opacity-60"></div>
          
          <img
            src="https://avonpartner.az/assets/images/1763034450sunset.webp"
            alt="Mission banner"
            className="w-full h-[400px] md:h-[550px] object-cover rounded-[2.5rem] shadow-2xl border-4 border-yellow-100 transform hover:scale-[1.02] transition-transform duration-700"
          />
        </div>

      </div>
    </section>
  );
};

export default Mission;
