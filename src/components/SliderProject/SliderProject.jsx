import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styled from 'styled-components';

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const SwiperWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;

  @media (min-width: 768px) {
    height: 70vh;
  }

  @media (min-width: 1024px) {
    height: 50vh;
  }
`;

const SliderProject = ({ slider }) => {
  if (!slider || Object.keys(slider).length === 0) return null; // Evita erro ao acessar undefined/null

  console.log(slider);

  const slidesArray = Array.isArray(slider) ? slider : Object.values(slider); // Garante um array válido

  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 4500, disableOnInteraction: false }}
      modules={[Autoplay]}
      style={{ width: '100%', height: '100%' }}
    >
      {slidesArray.map((slide, index) => (
        <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          <SwiperWrapper>
            <SlideImage src={slide} alt={"Imagem relativa ao projeto"} />
          </SwiperWrapper>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderProject;
