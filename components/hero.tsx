import { Phone, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative bg-secondary text-secondary-foreground py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
              <Clock className="h-4 w-4" />
              Servicio 24/7
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-foreground">
              ¿Tu auto se detuvo en la <span className="text-primary">Ruta 68</span>?
            </h1>

            <div className="space-y-3 text-base sm:text-lg text-foreground/80 max-w-lg">
              <p className="font-semibold text-foreground text-lg sm:text-xl">¡No te preocupes!</p>
              <p>
                Ofrecemos servicio de grúa para vehículos livianos las 24 horas, rápido y confiable en toda la Ruta 68.
              </p>
              <p>Asistencia inmediata en casos de panne, accidentes o traslado.</p>
              <p className="text-primary font-semibold">Atención profesional, segura y al mejor precio.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="tel:+56922462139">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg px-6 sm:px-8"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  +56 9 2246 2139
                </Button>
              </a>
              <a href="#contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary/50 text-primary hover:bg-primary/10 text-base sm:text-lg px-6 sm:px-8 bg-transparent"
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  Ubicación
                </Button>
              </a>
            </div>

            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-primary/20">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-primary">15+</p>
                <p className="text-xs sm:text-sm text-foreground/70">Años de experiencia</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-primary">24/7</p>
                <p className="text-xs sm:text-sm text-foreground/70">Disponibilidad</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-primary">5k+</p>
                <p className="text-xs sm:text-sm text-foreground/70">Rescates exitosos</p>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/tow-truck-rescuing-car-on-highway-professional-ser.jpg"
                alt="Grúa rescatando vehículo en carretera"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 md:mt-0 md:absolute md:-bottom-6 md:left-1/2 md:-translate-x-1/2 bg-card p-4 rounded-xl shadow-lg border border-primary/20 w-full max-w-xs md:w-auto">
              <div className="flex items-center justify-center gap-3">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Llámanos ahora</p>
                  <a
                    href="tel:+56922462139"
                    className="font-bold text-card-foreground text-lg hover:text-primary transition-colors"
                  >
                    +56 9 2246 2139
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
