import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styled from 'styled-components';

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // Ajusta a imagem para cobrir todo o contêiner
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const SwiperWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh; // Ajusta a altura para ocupar metade da altura da tela

  @media (min-width: 768px) {
    height: 70vh; // Ajusta a altura para ocupar 70% da tela em dispositivos maiores
  }

  @media (min-width: 1024px) {
    height: 50vh; // Ajusta a altura para ocupar 80% da tela em desktops
  }
`;

const SliderProject = ({slider}) => {
  console.log(slider);
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 4500, disableOnInteraction: false }}
      modules={[Autoplay]}
      style={{ width: '100%', height: '100%' }}
    >
      {Object.values(slider).map((slide, index) => (
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
