"use client";
import { title, subtitle } from "@/components/primitives";
import FullWidthCarousel from "@/components/carrusel";
import ButtonComponent from "@/components/button";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <section className="relative">
        {/* Texto sobre el carrusel */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="inline-block max-w-xl text-center">
            <span className={title()}>Disfruta de una experiencia de &nbsp;</span>
            <span className={title({ color: "violet" })}>ecoturismo&nbsp;</span>
            <br />
            <span className={title()}>
              en las montañas de antioquia.
            </span>
            <div className="flex flex-col items-center justify-center mt-14">
              <ButtonComponent/>
            </div>
          </div>
        </div>

        <div className="relative">
          <FullWidthCarousel />
        </div>
      </section>
    </div>
  );
}

