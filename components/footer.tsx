import { TruckIcon } from "@/components/icons/truck-icon"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <TruckIcon className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">Grúas Ruta 68</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <a href="#servicios" className="hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#galeria" className="hover:text-primary transition-colors">
              Galería
            </a>
            <a href="#contacto" className="hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          <p className="text-sm text-muted-foreground">© 2025 Servicio Grúas Ruta 68. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
