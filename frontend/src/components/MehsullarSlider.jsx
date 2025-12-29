import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGetProductsQuery } from '../redux/api/productsApi';
import toast from 'react-hot-toast';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Redux importları
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cart/cartSlice';

const Mehsul = ({ mehsulAdiProps, mehsulQiymetiProps, mehsulShekliProps, mehsulunId }) => {
  const dispatch = useDispatch();

  const mehsuluSebeteElaveEt = () => {
    dispatch(addToCart({
      id: mehsulunId,
      name: mehsulAdiProps,
      price: mehsulQiymetiProps,
      image: mehsulShekliProps.url,
      quantity: 1,
    }));
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-between bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <Link to={`/mehsullar/${mehsulunId}`} className="w-full">
        <img className="p-4 rounded-t-lg w-full h-80 object-contain" src={mehsulShekliProps.url} alt="product image" />
      </Link>
      <div className="px-5 pb-5 w-full text-center">
        <Link to={`/mehsullar/${mehsulunId}`}>
          <h5 className="text-[14px] font-medium tracking-tight text-gray-900 dark:text-white">
            {mehsulAdiProps}
          </h5>
        </Link>
        <div className="flex flex-col items-center mt-2">
          <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
            {mehsulQiymetiProps}&#8380;
          </span>
          {/* A tag-i yerine button istifade edirik */}
          {/* <button
            onClick={mehsuluSebeteElaveEt}
            className="text-white bg-green-800 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 mt-2 transition-all duration-300 dark:text-white dark:border-green-500 dark:hover:bg-green-600 dark:hover:text-white dark:focus:ring-green-800"
          >
            əlavə et
          </button> */}
        </div>
      </div>
    </div>
  );
};

const MehsullarSlider = () => {
  const { data, isLoading, error, isError } = useGetProductsQuery();
  
  useEffect(() => {
    if (isError) {
      console.log(error);
      toast.error(error?.data?.message || 'Serverde xeta var');
    }
  }, [isError, error]);

  return (
    <div className="container mx-auto py-10 px-4 relative">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Məhsullarımız</h2>
      
      {isLoading ? (
        <div className="text-center text-gray-600 dark:text-gray-400">Loading products...</div>
      ) : (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 40 },
          }}
          navigation={false}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="mySwiper w-full"
        >
          {data?.products?.map((birProduct) => (
            <SwiperSlide key={birProduct._id} className="p-2">
              <Mehsul
                mehsulunId={birProduct._id}
                mehsulAdiProps={birProduct.name}
                mehsulQiymetiProps={birProduct.price}
                mehsulShekliProps={birProduct.images[0]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default MehsullarSlider;