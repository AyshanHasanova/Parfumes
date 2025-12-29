import React from 'react';

const Features = () => {
  return (
    <section className="features bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-8">
          {/* Birinci xüsusiyyət kartı */}
          <div className="shipping-icon flex flex-col items-center w-full max-w-xs p-4">
            <img src="/assets/images/icons/icon1.png" alt="Free Shipping" className="mb-4 w-20 h-20" />
            <h5 className="text-xl font-semibold mb-2 text-gray-800">Free Shipping</h5>
            <p className="text-sm font-light text-gray-600">Free Shipping for orders over $130</p>
          </div>

          {/* İkinci xüsusiyyət kartı */}
          <div className="shipping-icon flex flex-col items-center w-full max-w-xs p-4">
            <img src="/assets/images/icons/icon2.png" alt="Returns" className="mb-4 w-20 h-20" />
            <h5 className="text-xl font-semibold mb-2 text-gray-800">Returns</h5>
            <p className="text-sm font-light text-gray-600">Within 30 days for an exchange.</p>
          </div>

          {/* Üçüncü xüsusiyyət kartı */}
          <div className="shipping-icon flex flex-col items-center w-full max-w-xs p-4">
            <img src="/assets/images/icons/icon3.png" alt="Online Support" className="mb-4 w-20 h-20" />
            <h5 className="text-xl font-semibold mb-2 text-gray-800">Online Support</h5>
            <p className="text-sm font-light text-gray-600">24 hours a day, 7 days a week</p>
          </div>

          {/* Dördüncü xüsusiyyət kartı */}
          <div className="shipping-icon flex flex-col items-center w-full max-w-xs p-4">
            <img src="/assets/images/icons/icon4.png" alt="Flexible Payment" className="mb-4 w-20 h-20" />
            <h5 className="text-xl font-semibold mb-2 text-gray-800">Flexible Payment</h5>
            <p className="text-sm font-light text-gray-600">Pay with Multiple Credit Cards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;