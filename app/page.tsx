import { Button } from "@/components/ui/button"
import { SimpleMenu } from "@/components/custom/menu"
import { Star, Truck, Shield, BotIcon, Shirt } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {


  const navLinks = [
    { href: "#benefits", text: "Beneficios" },
    { href: "#about", text: "¿Quiénes somos?" },
    { href: "#contact", text: "Contáctanos" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <SimpleMenu navLinks={navLinks} />

      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight">
                  Las prendas,
                  <br />
                  <span className="inline-flex flex-wrap gap-x-3 mt-2">
                    <span className="magicletters magicrelative">
                      tu
                      <span className="estrella e1"></span>
                    </span>
                    <span className="magicletters magicrelative">
                      Agente
                      <span className="estrella e3"></span>
                    </span>
                    <span className="magicletters magicrelative">
                      de
                      <span className="estrella e2"></span>
                    </span>
                    <span className="magicletters magicrelative">
                      Imagen
                      <span className="estrella e4"></span>
                      <span className="estrella e5"></span>
                    </span>
                  </span>
                </h2>
                <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                  Descubre el poder de tu estilo con nuestro Agente de Imagen hecho con inteligencia artificial.
                  Aprende a vestir con confianza y brilla en cada ocasión.
                  Proximamente nuestra app estará disponible en Google Play y App Store.
                </p>
              </div>

            </div>
            <div className="relative">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/lasprendas-app.png"
                  alt="Mannequins displaying Las prendas collection"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Benefits */}
      <section id="benefits" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light text-gray-900 mb-4">Beneficios</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-orange-700" />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">Asesoría Experta</h4>
              <p className="text-gray-600 text-justify">Recibe guía experta generada por nuestro AI, que comprende tus necesidades y te acompaña paso a paso para encontrar tu mejor estilo día a día.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shirt className="h-6 w-6 text-violet-300" />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">Estilo Inteligente</h4>
              <p className="text-gray-600 text-justify">Descubre qué prendas y accesorios te favorecen con lo que tengas en tu closet mediante nuestro AI experto.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-purple-400" />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">Seguridad Personal</h4>
              <p className="text-gray-600 text-justify">Camina con firmeza y proyecta tu mejor versión. Nuestro AI te brinda la seguridad de saber que siempre llevas el estilo que más te favorece.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light text-gray-900 mb-4">¿Quiénes somos?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-justify">
              En <strong>Las prendas</strong> democratizamos el acceso al asesoramiento de imagen profesional. Conoce a quienes hacen la magia:
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-12 md:gap-16">
            <div className="text-center">
              <div className="w-60 h-60 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src="/images/tefa.png"
                  alt="Sthephany Arias"
                  title="Sthephany Arias"
                  width={250}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-medium text-gray-900">Sthephany Arias</h4>
              <p className="text-gray-600">Co-fundadora</p>
            </div>
            <div className="text-center">
              <div className="w-60 h-60 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src="/images/artur.png"
                  alt="Arturo Victoria"
                  title="Arturo Victoria"
                  width={250}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-medium text-gray-900">Arturo Victoria</h4>
              <p className="text-gray-600">Co-fundador</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-light mb-4">Las prendas</h4>
              <p className="text-gray-400 text-sm">
                Ubicación: Bogotá, Colombia
                <br />
                Email: info@lasprendas.com
                <br />
                Telefóno: +57 321 4843367
              </p>
            </div>
            <div>
              <h5 className="font-medium mb-4">Conéctate</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="https://www.instagram.com/lasprendaso"
                    target="_blank"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/lasprendaso"
                    target="_blank"
                    className="hover:text-white transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@lasprendaso"
                    target="_blank"
                    className="hover:text-white transition-colors"
                  >
                    Tiktok
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Las prendas. Todos los derechos reservados.</p>
            <a href="/privacy" className="mt-2 inline-block text-sm underline underline-offset-4 hover:text-white transition-colors">
              Política de privacidad
            </a>
            <a href="/delete-account" className="mt-2 ml-4 inline-block text-sm underline underline-offset-4 hover:text-white transition-colors">
              Eliminar cuenta
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
