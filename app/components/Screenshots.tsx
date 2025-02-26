"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';

type GalleryProps = {
  images?: string[];
};

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  return (
    <section className="app-shot-one" id="galeria">
      
      <div className="container-fluid">
        <div className="block-title text-center">
          <h2 className="text-xl md:text-2xl mb-20 font-medium">
            Nuestros clientes son<br /> <span>lo más importante</span>.
          </h2>
        </div>
        <div
          className="app-shot-one__carousel"
          style={{ position: "relative", paddingBottom: "50px" }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop
            speed={1000}
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              1499: { slidesPerView: 5 },
              991: { slidesPerView: 3 },
              767: { slidesPerView: 1 },
              575: { slidesPerView: 1 }
            }}
          >
            {[...Array(9)].map((_, i) => (
              <SwiperSlide key={i}>
                <div className="app-shot-item pb-20">
                  <Image
                    src={`/assets/app-shots/${i + 1}.webp`}
                    alt=""
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
