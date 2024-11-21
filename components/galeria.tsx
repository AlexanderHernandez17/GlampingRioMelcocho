import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { motion } from "framer-motion";
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface CarruselProps {
  mediaUrl: string; // Ahora es una URL de imagen o video
}

const items = [
{
        mediaUrl: "/galeria00.jpg", // Imagen
    },
  {
    mediaUrl: "/galeria1.jpeg", // Imagen
  },
  {
    mediaUrl: "/galeria2.jpeg", // Imagen
  },
  {
    mediaUrl: "/galeria3.jpeg", // Imagen
  },
  {
    mediaUrl: "/video1.mp4", // Video
  },
  {
    mediaUrl: "/galeria4.jpeg", // Imagen
  },
  {
    mediaUrl: "/galeria5.jpg", // Imagen
  },
  {
    mediaUrl: "/galeria6.jpg", // Imagen
  },
  {
    mediaUrl: "/video2.mp4", // Video
  },
  {
    mediaUrl: "/galeria7.jpg", // Imagen
  },
  {
    mediaUrl: "/galeria8.jpg", // Imagen
  },
  {
    mediaUrl: "/galeria9.jpg", // Imagen
  },
  {
    mediaUrl: "/galeria10.jpg", // Imagen
  },
];

const Galeria: React.FC<CarruselProps> = ({ mediaUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-96 w-full mx-auto rounded-xl overflow-hidden">
        <div className="absolute inset-0 z-0">
          {mediaUrl.endsWith('.mp4') ? (
            <video
              src={mediaUrl}
              autoPlay
              loop
              muted
              className="object-cover w-full h-full rounded-xl"
            />
          ) : (
            <Image
              priority={true}
              alt="Card media"
              src={mediaUrl}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function CarruselComponent() {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { // configuración para pantallas pequeñas (móviles)
            slidesPerView: 1,
          },
          1024: { // configuración para pantallas grandes (escritorio)
            slidesPerView: 3,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <Galeria mediaUrl={item.mediaUrl} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
