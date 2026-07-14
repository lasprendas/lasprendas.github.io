import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, LockKeyhole, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de privacidad | Las prendas",
  description: "Política de tratamiento de datos personales de Las prendas.",
}

const sectionClassName = "border-t border-gray-200 pt-8"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center" aria-label="Las prendas — ir al inicio">
            <Image
              src="/images/lp_logo.png"
              alt="Las prendas"
              width={45}
              height={45}
              priority
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-12">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-900">
            <LockKeyhole className="h-6 w-6 text-violet-200" />
          </div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-gray-500">Última actualización: 13 de julio de 2026</p>
          <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">Política de privacidad</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            En Las prendas cuidamos la información que compartes para crear y vestir tu maniquí digital. Esta política explica qué datos tratamos, para qué los usamos y cómo puedes ejercer tus derechos.
          </p>
        </div>

        <div className="space-y-9 leading-7 text-gray-600">
          <section className={sectionClassName}>
            <h2 className="text-2xl font-medium text-gray-900">1. Responsable del tratamiento</h2>
            <p className="mt-3">
              Las prendas es responsable del tratamiento de los datos personales recopilados a través de su aplicación móvil y sitio web. Para consultas, solicitudes o reclamos sobre privacidad puedes escribir a{" "}
              <a className="font-medium text-gray-900 underline underline-offset-4 hover:text-gray-600" href="mailto:info@lasprendas.com">info@lasprendas.com</a>.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className="text-2xl font-medium text-gray-900">2. Información que tratamos</h2>
            <p className="mt-3">Dependiendo de cómo uses la aplicación, podemos tratar:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Datos de cuenta y contacto que nos proporciones, como nombre, correo electrónico o identificadores de usuario.</li>
              <li>Fotografías que subas de ti misma/o y las imágenes de prendas que decidas utilizar.</li>
              <li>El maniquí digital y las imágenes generadas a partir de tus fotografías y prendas.</li>
              <li>Preferencias de estilo, solicitudes dentro de la aplicación e información técnica necesaria para prestar y proteger el servicio.</li>
            </ul>
            <p className="mt-3">
              Las fotografías pueden revelar rasgos físicos y, según el uso que se les dé, constituir datos sensibles. Por ello, solicitamos tu autorización expresa antes de procesarlas. No debes subir imágenes de otras personas sin contar con su autorización.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className="text-2xl font-medium text-gray-900">3. Para qué usamos tus datos</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Crear, mostrar y administrar tu maniquí digital personalizado.</li>
              <li>Generar visualizaciones de prendas sobre el maniquí y ofrecerte funciones de asesoría de imagen.</li>
              <li>Operar, mantener, proteger y mejorar la aplicación; resolver problemas y atender tus solicitudes.</li>
              <li>Cumplir obligaciones legales y prevenir usos fraudulentos o no autorizados.</li>
            </ul>
            <p className="mt-3">No usamos tus fotografías ni tu maniquí para fines publicitarios sin tu autorización previa y específica.</p>
          </section>

          <section className={sectionClassName}>
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-violet-600" />
              <h2 className="text-2xl font-medium text-gray-900">4. Uso de inteligencia artificial</h2>
            </div>
            <p className="mt-3">
              Para crear el maniquí digital y generar las visualizaciones de prendas, Las prendas utiliza Gemini AI de Google. Cuando solicitas estas funciones, las imágenes y las instrucciones estrictamente necesarias pueden enviarse a este proveedor para que procese la solicitud y devuelva el resultado.
            </p>
            <p className="mt-3">
              El tratamiento por parte de proveedores tecnológicos está sujeto a sus controles y condiciones aplicables. Te recomendamos no incluir en las imágenes información innecesaria, documentos, menores de edad ni contenido íntimo. Las imágenes generadas son una representación visual orientativa y no una medición corporal ni una identificación biométrica.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className="text-2xl font-medium text-gray-900">5. Conservación y seguridad</h2>
            <p className="mt-3">
              Conservamos los datos solo durante el tiempo necesario para prestar el servicio, atender obligaciones legales o resolver reclamaciones. Aplicamos medidas técnicas y organizativas razonables para evitar accesos, usos, pérdidas o divulgaciones no autorizados. Sin embargo, ningún servicio digital puede garantizar seguridad absoluta.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className="text-2xl font-medium text-gray-900">6. Tus derechos y cómo ejercerlos</h2>
            <p className="mt-3">
              Puedes conocer, actualizar, rectificar o solicitar la supresión de tus datos; pedir prueba de tu autorización; revocar el consentimiento cuando corresponda; y presentar consultas o reclamos sobre su tratamiento. Para ejercerlos, escríbenos a{" "}
              <a className="font-medium text-gray-900 underline underline-offset-4 hover:text-gray-600" href="mailto:info@lasprendas.com">info@lasprendas.com</a> indicando tu solicitud y el correo asociado a tu cuenta. También puedes dejar de usar las funciones de generación de maniquí en cualquier momento.
            </p>
          </section>

          <section className={sectionClassName}>
            <h2 className="text-2xl font-medium text-gray-900">7. Menores de edad y cambios a esta política</h2>
            <p className="mt-3">
              La aplicación no está dirigida a menores de edad. Si consideras que un menor nos ha proporcionado información personal o imágenes sin la autorización correspondiente, contáctanos para revisar el caso. Podemos actualizar esta política cuando cambien nuestras prácticas o la normativa; publicaremos la versión vigente en esta ruta con su fecha de actualización.
            </p>
          </section>
        </div>
      </article>

      <footer className="border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-500">
        © 2026 Las prendas. Todos los derechos reservados.
      </footer>
    </main>
  )
}
