import { Truck, Car, Wrench, Shield, Clock, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Truck,
    title: "Arrastre de Vehículos",
    description: "Remolque seguro para autos, camionetas y motocicletas a cualquier destino.",
  },
  {
    icon: Car,
    title: "Rescate en Carretera",
    description: "Asistencia inmediata si tu vehículo queda varado en carretera o autopista.",
  },
  {
    icon: Wrench,
    title: "Auxilio Mecánico",
    description: "Cambio de llanta, paso de corriente y reparaciones menores en el lugar.",
  },
  {
    icon: Shield,
    title: "Servicio Asegurado",
    description: "Trabajamos con las principales aseguradoras del país.",
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description: "Servicio las 24 horas, los 365 días del año sin excepción.",
  },
  {
    icon: MapPin,
    title: "Cobertura Amplia",
    description: "Cubrimos toda la ciudad y carreteras cercanas en un radio de 100km.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones completas para cualquier emergencia vehicular
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-card-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
