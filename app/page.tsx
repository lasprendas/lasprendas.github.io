import { Button } from "@/components/ui/button"
import { Star, Truck, Shield, Menu } from "lucide-react"
import Image from "next/image"

export default function LandingPage() {
  const collections = [
    {
      id: "classic",
      name: "Clásica",
      description: "Elegancia cotidiana",
      image: "/images/classic.png",
    },
    {
      id: "irrepetible",
      name: "Irrepetible",
      description: "Estilos unicos",
      image: "/images/irrepetible.png",
    },
    {
      id: "encanto",
      name: "Encanto",
      description: "Estilos mágicos",
      image: "/images/magic.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="flex items-center gap-2">
              <Image
                src="/images/lp_logo.png"
                alt="Las prendas Logo"
                title="Las prendas"
                width={45}
                height={45}
              />
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#collections" className="text-gray-600 hover:text-gray-900 transition-colors">
                Colecciones
              </a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                ¿Quiénes somos?
              </a>
              <a href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">
                Beneficios
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contáctanos
              </a>
            </div>
            <div className="flex md:hidden items-center space-x-8">
              <div className="w-12 h-12 flex items-center justify-center mx-auto">
                <Menu className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight">
                  Las prendas
                  <br />
                  <span className="magicletters magicrelative">
                    <span className="magicletters magicrelative">
                      hechas
                      <span className="estrella e1"></span>
                      <span className="estrella e3"></span>
                    </span>
                    <span className="magicletters magicrelative px-3">
                      a tu
                      <span className="estrella e2"></span>
                    </span>
                    <span className="magicletters magicrelative">
                      medida
                      <span className="estrella e4"></span>
                      <span className="estrella e5"></span>
                    </span>                    
                  </span>
                </h2>
                <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                  Descubre nuestras colecciones premium de ropa deportiva, donde el diseño y la calidad hacen magia.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#collections">
                  <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3">
                    Explorar colecciones
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src="/images/mannequins-hero.png"
                  alt="Mannequins displaying Las prendas collection"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Collections */}
      <section id="collections" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light text-gray-900 mb-4">Colecciones</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div id={collection.id} key={index} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-6">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-medium text-gray-900 mb-2">{collection.name}</h4>
                  <p className="text-gray-600">{collection.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light text-gray-900 mb-4">¿Quiénes somos?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-justify">
              En <strong>Las prendas</strong> nos dedicamos a crear ropa que te inspire a moverte sin que salgas de tu casa. Conoce a las personas que hacen la magia:
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
              <h4 className="text-lg font-medium text-gray-900 mb-2">Calidad</h4>
              <p className="text-gray-600 text-justify">Reservamos las mejores telas con tecnológia de punta para entregarte prendas de moda inigualables.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-violet-300" />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">Envio gratis</h4>
              <p className="text-gray-600 text-justify">Envio gratuito a todo colombia por compras superiores a $250.000 / Aplican T&C</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-purple-400" />
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-2">Garantia</h4>
              <p className="text-gray-600 text-justify">Todas nuestras prendas tienen garantia por 2 meses en caso de imperfecciones en las telas o las costuras / Aplican T&C.</p>
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
                Ubicación: Valle del cauca, Colombia
                <br />
                Telefóno: +57 321 4843367
                <br />
                Email: lasprendaso@gmail.com
              </p>
            </div>
            <div>
              <h5 className="font-medium mb-4">Colecciones</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#classic" className="hover:text-white transition-colors">
                    Clásica
                  </a>
                </li>
                <li>
                  <a href="#irrepetible" className="hover:text-white transition-colors">
                    Irrepetible
                  </a>
                </li>
                <li>
                  <a href="#encanto" className="hover:text-white transition-colors">
                    Encanto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-4">Ayuda</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Guía de tallas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Devoluciones
                  </a>
                </li>
              </ul>
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
                  href="https://www.facebook.com/lasprendasoo"
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
            <p>&copy; 2025 Las Prendas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
