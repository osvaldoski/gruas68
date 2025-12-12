"use client"

import { useState } from "react"
import { X } from "lucide-react"

const photos = [
  {
    src: "/tow-truck-lifting-car-professional-service-daytime.jpg",
    alt: "Grúa levantando vehículo",
  },
  {
    src: "/flatbed-tow-truck-with-car-loaded-highway.jpg",
    alt: "Grúa plataforma con auto cargado",
  },
  {
    src: "/tow-truck-night-rescue-roadside-assistance.jpg",
    alt: "Rescate nocturno en carretera",
  },
  {
    src: "/mechanic-changing-tire-roadside-service.jpg",
    alt: "Cambio de llanta en carretera",
  },
  {
    src: "/tow-truck-fleet-professional-vehicles-yellow.jpg",
    alt: "Flota de grúas profesionales",
  },
  {
    src: "/car-accident-tow-truck-rescue-scene.jpg",
    alt: "Rescate de accidente vehicular",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="galeria" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Galería de Trabajos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conoce nuestro equipo y algunos de nuestros rescates
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(photo.src)}
              className="relative aspect-[3/2] rounded-lg overflow-hidden group cursor-pointer"
            >
              <img
                src={photo.src || "/placeholder.svg"}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-secondary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-secondary-foreground font-medium">Ver imagen</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-secondary/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-secondary-foreground hover:text-primary transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage || "/placeholder.svg"}
            alt="Imagen ampliada"
            className="max-w-full max-h-[90vh] rounded-lg"
          />
        </div>
      )}
    </section>
  )
}
