import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Servicio Grúas Ruta 68 | Asistencia Vial 24/7",
  description:
    "Servicio Grúas Ruta 68 - Asistencia vial y rescate vehicular las 24 horas. Arrastre de autos, auxilio mecánico y servicio en carretera. Llámanos ahora.",
  generator: "v0.app",
  keywords: ["grúas ruta 68", "asistencia vial", "rescate vehicular", "remolque", "carretera", "grúas"],
}

export const viewport: Viewport = {
  themeColor: "#1e56a0",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
