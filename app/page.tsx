"use client";
import { title, subtitle } from "@/components/primitives";
import FullWidthCarousel from "@/components/carrusel";
import ButtonComponent from "@/components/button";
import ProfileCard from "@/components/domos";
import Servicio from "@/components/servicios";
import Mapa from "@/components/googleMaps";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Home() {

  const services = [
    {
      id: 1,
      title: "Servicio 1",
      description: "Descripción del servicio 1. Un servicio excelente para todos los usuarios.",
      link: "/servicio1"
    },
    {
      id: 2,
      title: "Servicio 2",
      description: "Descripción del servicio 2. Ofrecemos una experiencia única para todos.",
      link: "/servicio2"
    },
    {
      id: 3,
      title: "Servicio 3",
      description: "Descripción del servicio 3. Mejora tus habilidades con este servicio.",
      link: "/servicio3"
    }
  ];

  const profileData1 = {
    imageSrc: "/mainDomo.jpg",
    name: "Domo Montaña",
    role: "COP 375,000.00",
    description: `El glamping con el mejor ambiente ecológico de Antioquia. 
    Somos el único glamping ubicado en medio de una reserva forestal al borde 
    del río más cristalino de todo Colombia. 

    DÉJATE ENCANTAR POR EL MISTERIO, LA MARAVILLA Y LA BELLEZA DE LOS ANDES.
  
  - Hay WIFI y señal celular. 

  Ideal para amantes de la naturaleza y aventureros que buscan sumegirse en la naturaleza, con tranquilidad, privacidad, glamour y estilo`
  };

  const profileData2 = {
    imageSrc: "/rio.jpeg",
    name: "Domo Rio",
    role: "COP 350,000.00",
    description: `Ubicado en el corazón de una reserva forestal, nuestro glamping ofrece una experiencia ecológica incomparable en Antioquia.
     El único de su tipo, rodeado por la majestuosidad de la naturaleza y el agua más pura que puedas imaginar.
     
     DÉJATE ENCANTAR POR EL SONIDO RELAJANTE DEL RIO MELCOCHO.
     `
  };


  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative">
        <FullWidthCarousel />
        <section className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-4 py-8 md:py-10 z-10">
          <div className="flex flex-col items-center justify-center mt-16">
            <div className="max-w-xl text-center text-white">
              <span className={title()}>Disfruta de una experiencia de &nbsp;</span>
              <span className={title({ color: "green" })}>ecoturismo&nbsp;</span>
              <br />
              <span className={title()}>en las montañas de antioquia.</span>
              <div className="flex flex-col items-center justify-center mt-14">
                <ButtonComponent/>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-col items-center justify-center mt-16">
          <div className="max-w-xl text-center">
          <span className={title({ color: "green" })}>Nuestros servicios&nbsp;</span>
         </div>
         </div>

         <div className="flex flex-col items-center justify-center mt-16">
         <Servicio/>
         </div>

         <div className="flex flex-col items-center justify-center mt-16">
          <div className="max-w-xl text-center">
          <span className={title()}>Conoce nuestros &nbsp;</span>
          <span className={title({ color: "green" })}>Domos&nbsp;</span>
          <br />
         </div>
         </div>

         
      <div className="flex flex-col items-center justify-center mt-14">
              <ProfileCard
                imageSrc={profileData1.imageSrc}
                name={profileData1.name}
                role={profileData1.role}
                description={profileData1.description}
              />
              </div>

              <div className="flex flex-col items-center justify-center mt-14">
              <ProfileCard
                imageSrc={profileData2.imageSrc}
                name={profileData2.name}
                role={profileData2.role}
                description={profileData2.description}
                reverseOrder={true}  // Puedes cambiar el orden de la imagen
              />
            </div>

            <div className="flex flex-col items-center justify-center mt-14">
            <span className={title({ color: "green" })}>Galeria de Visitantes ¡Antojate!&nbsp;</span>
            </div>

            <div className="flex flex-col items-center justify-center mt-14">
            <span className={title({ color: "green" })}>Nuestra Ubicacion&nbsp;</span>
            </div>

            <div className="flex flex-col items-center justify-center mt-10">
            <Mapa />
            </div>
    </div>
  );
}