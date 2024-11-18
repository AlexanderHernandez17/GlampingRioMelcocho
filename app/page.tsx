"use client";
import { title, subtitle } from "@/components/primitives";
import FullWidthCarousel from "@/components/carrusel";
import ButtonComponent from "@/components/button";
import ProfileCard from "@/components/domos";


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
    role: "caracteristicas",
    description: `aqui va la informacion y precio del domo`
  };

  const profileData2 = {
    imageSrc: "/rio.jpeg",
    name: "Domo Rio",
    role: "caracteristicas",
    description: `aqui va la informacion y precio del domo`
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
          <br/>
          Aqui viene la lista de servicios
         </div>
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
                profileType={profileData1.profileType}
              />
              </div>

              <div className="flex flex-col items-center justify-center mt-14">
              <ProfileCard
                imageSrc={profileData2.imageSrc}
                name={profileData2.name}
                role={profileData2.role}
                description={profileData2.description}
                profileType={profileData2.profileType}
                reverseOrder={true}  // Puedes cambiar el orden de la imagen
              />
            </div>
    </div>
  );
}


