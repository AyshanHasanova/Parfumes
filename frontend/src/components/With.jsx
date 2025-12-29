import React from 'react';

const With = () => {
  return (
    <section className="relative py-20 px-6 bg-white overflow-hidden">
      {/* Arxa fon bəzəyi - incə sarı və yaşıl dairələr */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-yellow-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Kiçik başlıq */}
        <span className="text-yellow-600 font-semibold tracking-widest uppercase text-sm mb-4 block">
          Sizə Yaxın Fleam Team
        </span>

        {/* Ana başlıq */}
        <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
          Öz imza qoxunuzu <span className="text-green-600">canlı kəşf edin</span>
        </h2>

        {/* Təsvir mətni */}
        <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto italic">
          "Söhbət təbii və estetik ətir dəstlərindən gedir. Həm özünüz, həm də sevdikləriniz üçün 
          təbiətin ən gözəl notlarını bir araya gətirdik. Mağazalarımıza gəlin və duyğularınıza toxunan qoxunu tapın."
        </p>


        {/* Alt hissədə incə detal */}
        <div className="mt-12 flex items-center justify-center gap-2 text-gray-400">
          <div className="w-10 h-[1px] bg-gray-200"></div>
          <p className="text-xs uppercase tracking-tighter tracking-[0.3em]">Fleam Team Experience</p>
          <div className="w-10 h-[1px] bg-gray-200"></div>
        </div>
      </div>
    </section>
  );
};

export default With;