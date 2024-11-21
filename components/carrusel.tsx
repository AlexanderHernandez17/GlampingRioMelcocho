import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image"; // Importa el componente Image de Next.js

const FullWidthCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      style={{ width: "100vw", height: "400px" }} // Ajusta la altura según lo necesites
    >
      <SwiperSlide>
        <Image
          src="/menDomo.jpg"
          alt="Slide 1"
          layout="fill" // Usa 'fill' para que ocupe el espacio del SwiperSlide
          objectFit="cover" // Ajusta la imagen para cubrir el área sin distorsionarse
          priority={true}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/mainDomo.jpg"
          alt="Slide 2"
          layout="fill" // Usa 'fill' para que ocupe el espacio del SwiperSlide
          objectFit="cover" // Ajusta la imagen para cubrir el área sin distorsionarse
          priority={true}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/rio.jpeg"
          alt="Slide 3"
          layout="fill" // Usa 'fill' para que ocupe el espacio del SwiperSlide
          objectFit="cover" // Ajusta la imagen para cubrir el área sin distorsionarse
          priority={true}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/domo1.jpg"
          alt="Slide 4"
          layout="fill" // Usa 'fill' para que ocupe el espacio del SwiperSlide
          objectFit="cover" // Ajusta la imagen para cubrir el área sin distorsionarse
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default FullWidthCarousel;

