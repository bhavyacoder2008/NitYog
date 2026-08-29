import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {
  buildWhatsAppUrl,
  defaultWhatsAppMessage,
} from '../utils/whatsapp.js'

function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-[75vh] w-[min(calc(100%-2rem),75rem)] items-center justify-center py-12 md:py-20">
      <section className="grid w-full items-center gap-8 overflow-hidden rounded-3xl border border-brand-brown/15 bg-[#fffaf0] p-6 text-center shadow-[0_1rem_3rem_rgb(77_44_2_/_0.12)] md:grid-cols-[0.8fr_1.2fr] md:p-10 md:text-left lg:p-14">
        <div className="mx-auto flex size-56 items-center justify-center rounded-full bg-cream/70 p-5 sm:size-72">
          <img
            className="max-h-full max-w-full object-contain"
            src="https://images.meesho.com/images/products/438118830/9k2ae_512.avif?width=512"
            alt="NitYog teddy bear mascot"
          />
        </div>

        <div>
          <p className="font-heading text-6xl font-semibold text-brand-orange sm:text-7xl">
            404
          </p>
          <h1 className="mt-2 font-heading text-3xl font-semibold sm:text-4xl">
            Oops! This page does not exist.
          </h1>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-ink/70 md:mx-0">
            The page may have wandered away. If you are looking for a toy or need more information, our team is just a WhatsApp message away.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[#25d366] px-5 py-3 font-semibold text-[#102a18] no-underline transition-colors hover:bg-[#20bd5a] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-brown"
              href={buildWhatsAppUrl(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="size-6" aria-hidden="true" />
              Ask Us on WhatsApp
            </a>
            <Link
              className="inline-flex min-h-13 items-center justify-center rounded-xl border-2 border-brand-brown px-5 py-3 font-semibold text-brand-brown no-underline transition-colors hover:bg-brand-brown hover:text-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-orange"
              to="/"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NotFoundPage
