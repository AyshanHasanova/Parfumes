import React from 'react';
import { Link } from 'react-router-dom';

// Redux importları
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cart/cartSlice'; // bu yol səninki kimi ola bilər

const Mehsul = ({ mehsulAdiProps, mehsulQiymetiProps, mehsulShekliProps, mehsulunId }) => {
  const dispatch = useDispatch();

  const mehsuluSebeteElaveEt = () => {
    console.log('Add to cart button was clicked!');
 
    dispatch(addToCart({
      id: mehsulunId,
      name: mehsulAdiProps,
      price: mehsulQiymetiProps,
      image: mehsulShekliProps.url,
      quantity: 1
    }));
  };

  return (
    <div className="w-full flex flex-col justify-between h-auto max-w-sm bg-white border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/mehsullar/${mehsulunId}`}>
        <img className="p-8 rounded-t-lg" src={mehsulShekliProps.url} alt="product image" />
      </Link>
      <div className="px-5 pb-5">
        <h5 className="text-[13px] font-semibold tracking-tight text-gray-900 dark:text-white relative top-[-25px]">
          {mehsulAdiProps}
        </h5>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">{mehsulQiymetiProps}₼</span>
          
          {/* <button 
            onClick={mehsuluSebeteElaveEt}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button> */}
            <button 
    onClick={() => console.log('Düymə işləyir!')}
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Add to Card
  </button>

    
        </div>
      </div>
    </div>
  );
};

export default Mehsul;

