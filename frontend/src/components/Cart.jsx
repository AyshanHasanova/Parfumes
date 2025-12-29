import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from '../redux/features/cart/cartSlice';
import { Link } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";



// Frontend Stripe açarını buraya əlavə et
const stripePromise = loadStripe("STRIPE_PUBLISHABLE_KEY"); // Stripe dashboard-dan alırsan

// Checkout form komponenti
const CheckoutForm = ({ amount, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Backend-dən payment intent al
      const { data } = await axios.post("http://localhost:5000/api/v1/create-payment-intent", {
        amount: Math.round(amount * 100) // cent cinsindən göndər
      });

      const clientSecret = data.clientSecret;

      // Kart məlumatını Stripe-a göndər
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        alert(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        alert("Ödəniş uğurla tamamlandı!");
        onSuccess(); // Səbəti təmizlə
      }
    } catch (error) {
      console.error(error);
      alert("Ödəniş zamanı xəta baş verdi");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <CardElement className="p-2 border rounded mb-4" />
      <button
        type="submit"
        disabled={!stripe || loading}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        {loading ? "Emal edilir..." : `Ödə ${amount.toFixed(2)}₼`}
      </button>
    </form>
  );
};

// Əsas Cart komponenti
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalPrice = useSelector(state => state.cart.totalPrice);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-20 text-center">
        <h2 className="text-2xl mb-4">Səbət boşdur.</h2>
        <Link to="/" className="transition-colors duration-300 bg-[rgba(101,44,0,0.8)] hover:bg-[rgba(160,82,45,0.7)] text-white px-4 py-3 rounded disabled:opacity-50">
          Mağazaya qayıt
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl mb-6 font-semibold">Sənin səbətin</h1>

      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="flex items-center border-b py-4">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
            <div className="flex flex-col ml-4 flex-grow">
              <span className="font-semibold text-lg">{item.name}</span>
              <span className="text-gray-600">{item.price}₼</span>
              <div className="flex items-center mt-2 space-x-2">
                <button
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-semibold">{(item.price * item.quantity).toFixed(2)}₼</span>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-600 hover:underline mt-2"
              >
                Sil
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={() => dispatch(clearCart())}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Səbəti boşalt
        </button>
        <div className="text-xl font-semibold">
          Ümumi: {totalPrice.toFixed(2)}₼ ({totalQuantity} məhsul)
        </div>
      </div>

      <div className="mt-6 text-right">
        <Elements stripe={stripePromise}>
          <CheckoutForm amount={totalPrice} onSuccess={() => dispatch(clearCart())} />
        </Elements>
      </div>
    </div>
  );
};

export default Cart;