import React from 'react';

const Healty = () => {
  return (
    <section className="py-12 px-6 md:py-24 bg-white flex justify-center overflow-hidden border-b border-gray-50">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">
        
        {/* Sol Tərəf: Şəkil Bölməsi */}
        <div className="w-full md:w-1/2 relative">
          {/* Arxa fondakı dekorativ yaşıl effekt */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-50 rounded-full blur-3xl opacity-60"></div>
          
          <img 
            src="/assets/cherish.png" 
            alt="Healthy skin" 
            className="w-full h-[400px] md:h-[550px] object-cover rounded-[2.5rem] shadow-2xl border-4 border-green-100 transform hover:scale-[1.02] transition-transform duration-700"
          />
        </div>

        {/* Sağ Tərəf: Mətn Bölməsi */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold mb-5 tracking-[0.2em] uppercase">
            Təbii Seçim
          </span>
          
          <h2 className="text-3xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Emosional və <span className="text-green-500">İlhamverici</span>
          </h2>
          
          <div className="relative">
            {/* Sol tərəfdə yaşıl vurğu xətti */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-green-400 rounded-full hidden md:block"></div>
            
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium md:pl-8 italic">
              "Bəzən bir qoxu bizi illər əvvələ qaytarır, bəzən isə xəyallarımızdakı məkana aparır. 
              Fleam Team ailəsi olaraq missiyamız sizin hekayənizi qoxularla nəql etməkdir. 
              <br className="my-4 block" />
              Təbiətin ən saf cövhərlərindən ilham alaraq, hər kəsin ruhuna toxunacaq bir imza 
              qoxusu tapacağına inanırıq. Bizimlə öz duyğularınızın izini sürün."
            </p>
          </div>
          
          <div className="mt-10">
            <button className="px-10 py-4 border-2 border-green-400 text-green-700 font-bold rounded-2xl hover:bg-green-400 hover:text-white transition-all duration-300 active:scale-95 uppercase tracking-wider text-sm">
              Kəşf Et
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Healty;