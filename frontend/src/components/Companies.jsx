import React from 'react';

const Companies = () => {
  return (
    <section className="companies bg-[#edf1f0] py-12 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">As seen in</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 testimonials" data-aos="fade-up">
          {/* Birinci şirkət rəyi */}
          <div className="testimonial flex flex-col items-center p-6 w-full max-w-sm">
            <img src="https://ap-gerejiq.myshopify.com/cdn/shop/files/logo1.png?v=1752649288&width=175" alt="Parker & Co." className="mb-4 w-32 h-auto" />
            <p className="text-sm md:text-base font-light italic text-gray-700">
              "Also the customer service is <br /> phenomenal.I would purchase again"
            </p>
          </div>
          
          {/* İkinci şirkət rəyi */}
          <div className="testimonial flex flex-col items-center p-6 w-full max-w-sm" data-aos="fade-up">
            <img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/testimonial-02.png" alt="The Hayden" className="mb-4 w-32 h-auto" />
            <p className="text-sm md:text-base font-light italic text-gray-700">
              "Great product line.Very attentive staff to <br /> deal with"
            </p>
          </div>
          
          {/* Üçüncü şirkət rəyi */}
          <div className="testimonial third flex flex-col items-center p-6 w-full max-w-sm" data-aos="fade-up">
            <img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/testimonial-01.png" alt="Good Mood Collection" className="mb-4 w-32 h-auto" />
            <p className="text-sm md:text-base font-light italic text-gray-700">
              "Looking to affordably upgrade your <br /> everday dinneware ? Looking no further than e.Space"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;