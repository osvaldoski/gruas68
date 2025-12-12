import { Phone, MapPin, Clock, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contacto" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contáctanos</h2>
            <p className="text-muted-foreground mb-8">
              Contáctanos al <span className="font-semibold text-primary">+56 9 2246 2139</span> y volvamos a ponerte en
              marcha.
            </p>

            <div className="space-y-6">
              <Card className="border-border bg-card">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Teléfono 24/7</p>
                    <a
                      href="tel:+56922462139"
                      className="font-bold text-xl text-card-foreground hover:text-primary transition-colors"
                    >
                      +56 9 2246 2139
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="h-12 w-12 bg-primary/80 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Correo electrónico</p>
                    <a
                      href="mailto:contacto@gruasruta68.com"
                      className="font-bold text-card-foreground hover:text-primary transition-colors"
                    >
                      contacto@gruasruta68.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="h-12 w-12 bg-primary/60 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ubicación</p>
                    <p className="font-bold text-card-foreground">Ruta 68, Región de Valparaíso</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="h-12 w-12 bg-primary/40 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Horario</p>
                    <p className="font-bold text-card-foreground">24 horas, 7 días a la semana</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="bg-secondary p-8 rounded-2xl text-center">
              <Phone className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-secondary-foreground mb-2">¿Necesitas ayuda ahora?</h3>
              <p className="text-muted-foreground mb-6">Llámanos y estaremos contigo en minutos</p>
              <a href="tel:+56922462139">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xl py-6"
                >
                  <Phone className="h-6 w-6 mr-3" />
                  +56 9 2246 2139
                </Button>
              </a>
              <p className="text-xs text-muted-foreground mt-4">Grúas Ruta 68 — Línea directa 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
