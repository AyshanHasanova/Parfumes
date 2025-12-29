import React from 'react';

const Beauty = () => {
  return (
    <section className="beauty py-12 px-4 md:px-8 lg:px-16">
      {/* Containerın max-w-7xl ilə daha mərkəzə yığılmasını təmin edir */}
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sol hissə - böyük şəkil */}
          <div className="products-left relative w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
            <img 
              src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/banner-21.jpg" 
              alt="Empower Yourself" 
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" 
            />
            <div className="product-overlay absolute bottom-0 left-0 p-8 text-white z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Ətirni kəşf et</h3>
              <p className="text-base md:text-lg font-light mb-4">
              Zərifliyin görünməyən imzası.
              </p>
              {/* Sizin Link komponentinizin yerinə sadə bir düymə əlavə etdim */}
              <a href="#" className="inline-block px-6 py-3 border border-white text-white font-medium rounded-full transition-colors duration-300 hover:bg-white hover:text-black">
                Daha çoxu
              </a>
            </div>
          </div>

          {/* Sağ hissə - məhsul kartları */}
          <div className="products-right w-full md:w-1/2 grid grid-cols-2 gap-4">
            {/* Hər bir məhsul kartı */}
            {[
              { 
                price: "22.49", 
                name: "incandessence", 
                img1: "https://strgimgr.umico.az/sized/840/233950-0d00c29a8c6740aa51551490391826b1.jpg", 
                img2: "https://strgimgr.umico.az/sized/840/233950-81e625bc48f57ee0987226d08c317284.jpg",
                discount: "-17%"
              },
              { 
                price: "22.49", 
                name: "Little Black Dress", 
                img1: "https://kozmetik.avon.com.tr/assets/tr-tr/images/product/prod_1223483_1_613x613.jpg", 
                img2: "https://i.ebayimg.com/images/g/QtkAAOSwrr5jzZWj/s-l400.jpg"
              },
              { 
                price: "22.49", 
                name: "Musk marine", 
                img1: "https://kozmetik.avon.com.tr/assets/tr-tr/images/product/prod_1221691_1_613x613.jpg", 
                img2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRkT4uzuFTBqN10CuAtLW3lS24f0serfSXNA&s",
                discount: "-8%"
              },
              { 
                price: "22.49", 
                name: "Pur blanca", 
                img1: "https://strgimgr.umico.az/sized/1680/738665-daaeef010038afa18cf11428c9f58ffd.jpg", 
                img2: "https://n11scdn.akamaized.net/a1/375_535/01/59/01/64/IMG-4521131093340723281.jpg"
              },
              { 
                price: "18", 
                name: "Wild Country", 
                img1: "https://strgimgr.umico.az/sized/840/234138-c9fefc822cc237aa182225aacb618134.jpg", 
                img2: "https://avon.uk.com/cdn/shop/files/prod_1200852_3.jpg?v=1688568632"
              },
              { 
                price: "22.49", 
                name: "Incandessence Lotus", 
                img1: "https://avonpartner.az/assets/images/1701767767hh.jpg", 
                img2: "https://avon.uk.com/cdn/shop/files/prod_1198410_2.jpg?v=1688569008"
              }
            ].map((product, index) => (
              <div key={index} className="beauty-card relative group">
                <div className="card relative overflow-hidden rounded-lg shadow-sm">
                  {/* Normal və hover şəkli */}
                  <div className="card-image relative">
                    <img src={product.img1} alt={product.name} className="w-full h-full object-cover rounded-lg transform transition-transform duration-300 group-hover:opacity-0" />
                    <img src={product.img2} alt={product.name} className="w-full h-full object-cover rounded-lg absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  {/* Endirim etiketi */}
                  {product.discount && (
                    <span className="absolute top-2 left-2 bg-black text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                      {product.discount}
                    </span>
                  )}
                  {/* Üstünə gəldikdə görünən ikonlar */}
                  <div className="icons-overlay absolute inset-0 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-0 bg-green-500 bg-opacity-50">
                    <i className="fa-solid fa-bag-shopping text-white text-2xl mb-4 cursor-pointer hover:text-gray-300"></i>
                    <i className="fa-solid fa-eye text-white text-2xl mb-4 cursor-pointer hover:text-gray-300"></i>
                    <i className="fa-solid fa-star text-white text-2xl mb-4 cursor-pointer hover:text-gray-300"></i>
                    <i className="fa-brands fa-nfc-directional text-white text-2xl cursor-pointer hover:text-gray-300"></i>
                  </div>
                </div>
                {/* Məhsul məlumatı */}
                <div className="card-title text-center mt-4">
                  <div className="card-text text-gray-500 text-sm font-medium">{product.price}</div>
                  <div className="card-name text-gray-800 font-semibold">{product.name}</div>
                  <div className="rate text-yellow-400 text-sm mt-1">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beauty;
