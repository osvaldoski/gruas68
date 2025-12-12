import { Phone, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TruckIcon } from "@/components/icons/truck-icon"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-navbar text-navbar-foreground shadow-lg border-b border-primary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <TruckIcon className="h-8 w-8 text-primary-foreground" />
            <span className="font-bold text-xl text-white">Grúas Ruta 68</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-white/80 hover:text-white transition-colors">
              Servicios
            </a>
            <a href="#galeria" className="text-white/80 hover:text-white transition-colors">
              Galería
            </a>
            <a href="#contacto" className="text-white/80 hover:text-white transition-colors">
              Contacto
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+56922462139"
              className="hidden sm:flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-lg font-bold hover:bg-white/90 transition-opacity"
            >
              <Phone className="h-4 w-4" />
              +56 9 2246 2139
            </a>
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
