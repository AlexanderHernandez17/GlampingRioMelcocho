import { Button } from "@nextui-org/button";

export default function ButtonComponent() {
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button
        as="a" // Permite usarlo como un enlace
        href="https://wa.me/573146428400" // Cambia por tu número de WhatsApp
        target="_blank" // Abre en una nueva pestaña
        rel="noopener noreferrer" // Asegura la navegación segura
        style={{ backgroundColor: 'violet', color: 'white' }} // Ajusta el color del texto según sea necesario
        variant="shadow"
      >
        ¡Reserva ahora!
      </Button>
    </div>
  );
}
