import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@nextui-org/react";

const Servicio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      style={{ display: "inline-block" }}
    >
      <Card
        style={{
          borderRadius: "16px",
          padding: "0",
          overflow: "hidden",
          display: "inline-flex",
        }}
      >
        <Image
          src="/servicios.jpeg" // Ruta fija
          alt="Imagen de servicio"
          width={400} // Tamaño ajustado
          height={300} // Tamaño ajustado
          style={{ borderRadius: "inherit" }}
        />
      </Card>
    </motion.div>
  );
};

export default Servicio;
