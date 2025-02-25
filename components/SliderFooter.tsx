"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useState } from "react";
import Link from "next/link";

function SliderFooter() {
  const [currentText, setCurrentText] = useState("votre mariage");
  const [isAnimating, setIsAnimating] = useState(false);

  const texts = ["votre mariage", "vos événements", "votre plaisir"];

  return (
    <div className="relative lg:pt-[4rem] 2xl:pt-[5rem]">
      <div className="absolute z-10 p-6 text-white lg:w-1/2 lg:ml-10 lg:mt-10">
        <h2 className="text-3xl lg:text-4xl font-bold font-roboto uppercase">
          Choisissez l&apos;élégance et le prestige pour{" "}
          <span className="text-3xl lg:text-4xl inline-block text-nowrap font-roboto font-bold mb-4 mt-2 uppercase relative">
            <span
              className={`inline-block transition-transform duration-500 ${isAnimating ? "translate-y-[50%] opacity-0" : "translate-y-0 opacity-100"}`}
            >
              {currentText}
            </span>
            <span className="absolute bottom-[-0.75rem] left-0 right-0 h-[4px] bg-primary w-full" />
          </span>
        </h2>
        <div className="flex justify-center lg:justify-start">
          <Link
            className="btn bg-primary text-white mt-6 px-4 py-4 uppercase font-bold font-roboto hover:bg-primary/80 transition-all duration-300"
            href="/vehicle"
          >
            Découvrez nos véhicules
          </Link>
        </div>
      </div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
        loop={true}
        modules={[Pagination, Autoplay]}
        pagination={{
          dynamicBullets: true,
        }}
        onSlideChange={(swiper) => {
          setIsAnimating(true);
          setTimeout(() => {
            setCurrentText(texts[swiper.realIndex]);
            setIsAnimating(false);
          }, 250);
        }}
      >
        <SwiperSlide>
          <div className="h-80 lg:h-96 2xl:h-[35rem] bg-[url('../public/footer/mariage.png')] bg-cover bg-center" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-80 lg:h-96 2xl:h-[35rem] bg-[url('../public/footer/event.png')] bg-cover bg-center" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-80 lg:h-96 2xl:h-[35rem] bg-[url('../public/footer/pleasure.png')] bg-cover bg-center" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderFooter;
