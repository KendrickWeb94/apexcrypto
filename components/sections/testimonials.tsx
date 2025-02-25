// components/TestimonialsSwiper.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { testimonials } from "@/constants";
import Rating from "@/public/imgs/rating.png";
import Image from "next/image";

export { Rating };

const TestimonialsSwiper: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.on("slideChange", () => {
        setActiveIndex(swiperRef.current.swiper.activeIndex);
      });
    }
  }, []);

  return (
    <Swiper
      modules={[Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      centeredSlides={true}
      loop={true}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1.1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1.8,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2.5,
          spaceBetween: 50,
        },
      }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={testimonial.id}>
          <div
            className={`flex flex-col my-14 gap-4 border border-white/10 rounded-lg p-5 bg-gradient-to-r from-white/10 to-primary/10 transition-transform duration-300 ${
              activeIndex === index ? "scale-100" : "scale-100"
            }`}
          >
            <p className="text-white/60">{testimonial.comment}</p>
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.imageUrl}
                  alt={`${testimonial.name}'s profile`}
                  className="rounded-full w-14 h-14 border border-white/80"
                />
                <div className="">
                  <p className="font-dm-medium">{testimonial.name}</p>
                  <p className="text-sm text-white/40">
                    {new Date(testimonial.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <Image src={Rating} alt="" width={80} />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialsSwiper;
