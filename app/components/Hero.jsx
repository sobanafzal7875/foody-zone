import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const images = [
  { src: "/slide-2.jpg", title: "FLAVORS YOU LOVE MOST", price: "$7.99" },
  { src: "/img-08.jpg", title: "DISCOVER THE BEST GRILLs", price: "$5.99" },
  { src: "/burger-16.jpg", title: "DISCOVER THE REAL BURGERS", price: "$6.99" },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      speed={500}
      className="w-full h-[600px] relative z-10" // Add z-10 to the slider
    >
      {images.map((item, index) => (
        <SwiperSlide key={index} className="">
          {/* Background Image */}
          <img src={item.src} className="w-full h-full object-cover" alt="Burger" />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center p-6">
            <h1>{item.title}</h1>
            <p className="text-lg mt-4">
              Enjoy the food you love <span className="text-yellow-400 font-bold">FROM {item.price}</span>
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;