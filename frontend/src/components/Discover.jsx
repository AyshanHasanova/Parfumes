// import React from 'react'

// const Discover  = () => {
//   return (
//     <section className="discover text-center py-16 px-4 md:px-8 bg-white overflow-hidden">
//       {/* Başlıq və mətn hissəsi */}
//       <h2 className="text-4xl md:text-5xl font-bold mb-4">Yeni Bir Hiss Kəşf Et</h2>
//       <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
//       Hər toxunuşda səni özünə daha da yaxınlaşdıran bir qoxu.
//       </p>

//       {/* Mağaza kartları hissəsi */}
//       <div className="shops flex flex-col md:flex-row justify-center max-w-7xl mx-auto gap-12">
//         {/* İlk kart - Summer Collection */}
//         <div className="shop1 relative w-full md:w-1/2 overflow-hidden cursor-pointer group">
//           <img
//             src="https://ap-gerejiq.myshopify.com/cdn/shop/files/banner2.jpg?v=1752546486&width=3000"
//             alt="Summer Collection"
//             className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
//           />
//           {/* Mətn hissəsi şəkilin altında */}
//           <div className="shop-text p-8 text-left text-gray-800">
//             <h3 className="text-2xl font-semibold mb-2">Yay Kolleksiyası</h3>
//             <a href="#" className="flex items-center text-gray-800 hover:text-black transition-colors duration-300">
//               <span className="text-lg mr-2">İndi al</span>
//               <i className="fa-solid fa-arrow-right"></i>
//             </a>
//           </div>
//         </div>

//         {/* İkinci kart - From Our Blog */}
//         <div className="shop1 relative w-full md:w-1/2 overflow-hidden cursor-pointer group">
//           <img
//             src="https://ap-gerejiq.myshopify.com/cdn/shop/files/banner1.jpg?v=1752546470&width=3000"
//             alt="From Our Blog"
//             className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
//           />
//           {/* Mətn hissəsi şəkilin altında */}
//           <div className="shop-text p-8 text-left text-gray-800">
//             <h3 className="text-2xl font-semibold mb-2">Bloqumuzdan</h3>
//             <a href="#" className="flex items-center text-gray-800 hover:text-black transition-colors duration-300">
//               <span className="text-lg mr-2">Oxu</span>
//               <i className="fa-solid fa-arrow-right"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Discover;


import React from 'react';
import { Link } from 'react-router-dom'; // Link komponentini daxil edirik

const Discover = () => {
  return (
    <section className="discover text-center py-16 px-4 md:px-8 bg-white overflow-hidden">
      {/* Başlıq və mətn hissəsi */}
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Yeni Bir Hiss Kəşf Et</h2>
      <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
        Hər toxunuşda səni özünə daha da yaxınlaşdıran bir qoxu.
      </p>

      {/* Mağaza kartları hissəsi */}
      <div className="flex flex-col md:flex-row justify-center max-w-7xl mx-auto gap-12">
        
        {/* İlk kart - Summer Collection */}
        <div className="relative w-full md:w-1/2 overflow-hidden cursor-pointer group">
          <Link to="/store"> {/* Bütün kartı kliklənən edirik */}
            <div className="overflow-hidden">
              <img
                src="https://ap-gerejiq.myshopify.com/cdn/shop/files/banner2.jpg?v=1752546486&width=3000"
                alt="Summer Collection"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 text-left text-gray-800">
              <h3 className="text-2xl font-semibold mb-2">Yay Kolleksiyası</h3>
              <div className="flex items-center text-gray-800 group-hover:text-green-500 transition-colors duration-300">
                <span className="text-lg mr-2 border-b border-transparent group-hover:border-green-500">İndi al</span>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </Link>
        </div>

        {/* İkinci kart - From Our Blog */}
        <div className="relative w-full md:w-1/2 overflow-hidden cursor-pointer group">
          <Link to="/store"> {/* Bloq üçün də /store-a yönləndirmə */}
            <div className="overflow-hidden">
              <img
                src="https://ap-gerejiq.myshopify.com/cdn/shop/files/banner1.jpg?v=1752546470&width=3000"
                alt="From Our Blog"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 text-left text-gray-800">
              <h3 className="text-2xl font-semibold mb-2">Bloqumuzdan</h3>
              <div className="flex items-center text-gray-800 group-hover:text-green-500 transition-colors duration-300">
                <span className="text-lg mr-2 border-b border-transparent group-hover:border-green-500">Oxu</span>
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Discover;