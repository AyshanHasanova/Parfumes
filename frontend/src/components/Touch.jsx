import React from 'react';

const Touch = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Başlıq və təsvir hissəsi */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Bizimlə əlaqədə qalın</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg">
            Sualınız var və ya məhsullarımızla yaxından tanış olmaq istəyirsiniz? 
            Bizə müraciət edin, sizə kömək etməkdən məmnun olarıq.
          </p>
        </div>

        {/* Məlumat blokları hissəsi */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          
          {/* Ünvan bloku */}
          <div className="group p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-green-50">
            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:bg-green-500 transition-colors duration-300">
                <i className="fa-solid fa-location-dot text-xl text-green-500 group-hover:text-white"></i>
              </div>
              <h6 className="font-bold text-xl mb-3 text-gray-900">Ünvanımız</h6>
              <p className="text-gray-600 leading-relaxed text-center md:text-left">
                Şəmkir rayonu, <br /> Təzəkənd kəndi
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer" 
                className="mt-4 text-green-600 font-semibold hover:text-green-700 transition-colors"
              >
                Xəritədə bax →
              </a>
            </div>
          </div>
          
          {/* Kontakt bloku */}
          <div className="group p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-green-50">
            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:bg-green-500 transition-colors duration-300">
                <i className="fa-solid fa-phone text-xl text-green-500 group-hover:text-white"></i>
              </div>
              <h6 className="font-bold text-xl mb-3 text-gray-900">Əlaqə</h6>
              <div className="space-y-2 text-center md:text-left">
                <p className="text-gray-700 font-medium hover:text-green-600 transition-colors">
                  <a href="tel:+994773464811">(077) 346 48 11</a>
                </p>
                <p className="text-gray-700 font-medium hover:text-green-600 transition-colors">
                  <a href="tel:+994777113832">(077) 711 38 32</a>
                </p>
                <p className="text-gray-500 text-sm mt-2 font-mono">tflame183@gmail.com</p>
              </div>
            </div>
          </div>
          
          {/* İş saatları bloku */}
          <div className="group p-8 bg-gray-50 rounded-2xl transition-all duration-300 hover:bg-green-50">
            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:bg-green-500 transition-colors duration-300">
                <i className="fa-regular fa-clock text-xl text-green-500 group-hover:text-white"></i>
              </div>
              <h6 className="font-bold text-xl mb-3 text-gray-900">İş Rejimi</h6>
              <div className="flex items-center gap-3">
                <span className="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold animate-pulse">
                  Açıqdır
                </span>
                <p className="text-gray-700 font-semibold uppercase tracking-wider text-lg">7 / 24</p>
              </div>
              <p className="text-gray-500 text-sm mt-3">Həftənin hər günü, günün hər saatı xidmətinizdəyik.</p>
            </div>
          </div>

        </div>

        {/* Xəritə */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12117.801452243552!2d46.0125!3d40.825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1saz!2saz!4v1700000000000" // Qeyd: Real koordinatlarını bura yerləşdirə bilərsən
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Touch;