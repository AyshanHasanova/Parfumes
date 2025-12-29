import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const Founders = () => {
  return (
   <>

<section className="founder py-5">
            <div className="container found">
            <h2>We pride ourselves on have a <br/> team of highly skilled</h2>
              <div className="ceo-card py-2">
              <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            modules={[Pagination]}
            className="mySwiper collabKarusel"
        >
            <SwiperSlide>
                <div className="swiper-slide">
                    <div className="ceo">
                        <img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/our-team-01.jpg" alt="" />
                        <div className="overlay">
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                        <div className="ceo-text">
                            <h5>Slava Fedutik</h5>
                            <p> - Founder, Chief Creative</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="swiper-slide">
                    <div className="ceo">
                        <img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/our-team-02.jpg" alt="" />
                        <div className="overlay">
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-youtube"></i>
                        </div>
                        <div className="ceo-text">
                            <h5>Jennifer C.</h5>
                            <p> - Founder, Ceo</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="swiper-slide">
                                        <div className="ceo">
                                            <img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/our-team-03.jpg" alt=""/>
                                            <div className="overlay">
                                                <i className="fa-brands fa-twitter"></i>
                                                <i className="fa-brands fa-facebook"></i>
                                                <i className="fa-brands fa-instagram"></i>
                                                <i className="fa-brands fa-youtube"></i>
                                            </div>
                                            <div className="ceo-text">
                                                <h5>Valeriia Nadopta</h5>
                                                <p> - Founder,Ceo</p>
                                            </div>
                                        </div>
                                      </div>
            </SwiperSlide>

        </Swiper>
              </div>
            </div>
        </section>
   </>
  )
}

export default Founders