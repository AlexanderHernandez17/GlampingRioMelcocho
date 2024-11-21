"use client";
import { motion, useInView } from "framer-motion";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { useRef } from "react";

// Componente genérico ProfileCard
interface ProfileCardProps {
  imageSrc: string;
  name: string;
  role: string;
  description: string | JSX.Element; // Permite cadenas o JSX
  reverseOrder?: boolean; // Si usas esta propiedad
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  imageSrc,
  name,
  role,
  description,
  reverseOrder = false, // Por defecto es false (imagen a la izquierda)
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: isInView ? 0 : -100, opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col gap-8 ${reverseOrder ? "md:flex-row-reverse" : "md:flex-row"}`}
    >
      {/* Contenedor de la imagen */}
      <div className="relative w-full md:w-80 h-96">
        <Card
          isBlurred
          className="w-full h-full overflow-hidden border-none bg-background/60 dark:bg-default-100/50 shadow-lg border-2 border-purple-500"
        >
          <CardBody className="p-0 relative">
            <Image
              alt={name}
              src={imageSrc}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
              priority={true}
            />
            {/* Texto sobre la imagen */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white text-center">

            </div>
          </CardBody>
        </Card>
      </div>

      {/* Tarjeta de texto */}
      <div className="flex flex-col gap-4 md:w-[28rem] h-96 p-4">
      <h3 className="font-semibold text-xl">{name}</h3>
      <p className="text-small">{role}</p>
        <p className="text-medium font-medium">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProfileCard;