import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, Mail, Trash2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Eliminar cuenta | Las prendas",
  description: "Solicita la eliminación de tu cuenta y datos asociados en Las prendas.",
}

const deletionEmail = "info@lasprendas.com"
const emailSubject = "Solicitud de eliminación de cuenta - Las prendas"
const emailBody = `Hola,\n\nSolicito la eliminación de mi cuenta de Las prendas y los datos asociados.\n\nCorreo asociado a mi cuenta: [escribe aquí tu correo]\n\nConfirmo que deseo eliminar mi cuenta.\n\nGracias.`
const mailtoUrl = `mailto:${deletionEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center" aria-label="Las prendas — ir al inicio">
            <Image src="/images/lp_logo.png" alt="Las prendas" width={45} height={45} priority />
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900">
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mb-12">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-900">
            <Trash2 className="h-6 w-6 text-violet-200" />
          </div>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-gray-500">Las prendas</p>
          <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">Eliminar tu cuenta</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
            Puedes solicitar la eliminación de tu cuenta de Las prendas y de los datos asociados en cualquier momento.
          </p>
        </div>

        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-medium text-gray-900">Solicita la eliminación</h2>
          <ol className="mt-5 list-decimal space-y-3 pl-6 leading-7 text-gray-600">
            <li>Selecciona el botón para abrir un correo dirigido a nuestro equipo.</li>
            <li>Indica el correo electrónico asociado a tu cuenta de Las prendas.</li>
            <li>Envía la solicitud y responde al correo de confirmación que te enviaremos para verificarla.</li>
          </ol>
          <a
            href={mailtoUrl}
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-gray-900 px-5 py-3 font-medium text-white transition-colors hover:bg-gray-700"
          >
            <Mail className="h-5 w-5" />
            Solicitar eliminación por correo
          </a>
          <p className="mt-4 text-sm leading-6 text-gray-500">
            Si el botón no abre tu aplicación de correo, escribe a{" "}
            <a className="font-medium text-gray-700 underline underline-offset-4 hover:text-gray-900" href={`mailto:${deletionEmail}`}>
              {deletionEmail}
            </a>{" "}
            con el asunto “{emailSubject}”.
          </p>
        </section>

        <section className="mt-10 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-medium text-gray-900">Qué eliminamos</h2>
          <p className="mt-3 leading-7 text-gray-600">
            Tras verificar tu solicitud, eliminaremos tu cuenta y los datos asociados: fotografías originales, imágenes de referencia de contorno, imágenes de prendas, maniquíes digitales, visualizaciones generadas, preferencias, registros y metadatos vinculados a tu cuenta.
          </p>
          <p className="mt-3 leading-7 text-gray-600">
            Estos archivos se eliminan de nuestra infraestructura de DigitalOcean y dejan de estar disponibles en la aplicación.
          </p>
        </section>

        <section className="mt-8 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-medium text-gray-900">Plazo y confirmación</h2>
          <p className="mt-3 leading-7 text-gray-600">
            Completaremos la eliminación dentro de un plazo máximo de 30 días después de confirmar tu solicitud. Te notificaremos por correo cuando el proceso haya finalizado. No conservamos las imágenes ni los datos asociados a la cuenta después de su eliminación.
          </p>
          <div className="mt-5 flex gap-3 rounded-lg bg-gray-100 p-4 text-sm leading-6 text-gray-600">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gray-900" />
            <p>La eliminación de la cuenta es permanente y no se puede deshacer.</p>
          </div>
        </section>

        <p className="mt-10 text-sm text-gray-500">
          Para conocer más sobre el tratamiento de tus datos, consulta nuestra{" "}
          <Link href="/privacy" className="underline underline-offset-4 hover:text-gray-800">Política de privacidad</Link>.
        </p>
      </article>

      <footer className="border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-500">
        © 2026 Las prendas. Todos los derechos reservados.
      </footer>
    </main>
  )
}
