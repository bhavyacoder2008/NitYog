import { FaArrowRight, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import mascot from '../../docs/brandkit/images/logo/mascot.png'
import { businessAddress } from '../config/business.js'
import { buildWhatsAppUrl } from '../utils/whatsapp.js'

const aboutWhatsAppMessage =
  'Hi, I have a question about NitYog toys. Please help me with more information.'

const businessGstin = import.meta.env.VITE_BUSINESS_GSTIN?.trim()

function AboutPage() {
  const whatsappUrl = buildWhatsAppUrl(aboutWhatsAppMessage)
  const whatsappNumber = new URL(whatsappUrl).pathname.slice(1)
  const formattedNumber = /^91\d{10}$/.test(whatsappNumber)
    ? `+91 ${whatsappNumber.slice(2, 7)} ${whatsappNumber.slice(7)}`
    : `+${whatsappNumber}`

  return (
    <main className="mx-auto w-[min(calc(100%-2rem),75rem)] py-10 md:py-16">
      <header className="border-b border-brand-brown/15 pb-6 md:pb-8">
        <h1 className="font-heading text-4xl font-semibold md:text-5xl">
          About Us
        </h1>
        <p className="mt-3 text-base text-brand-brown md:text-lg">
          NitYog — Little Joys, Big Smiles.
        </p>
      </header>

      <div className="mt-8 grid items-start gap-8 md:mt-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <section aria-labelledby="about-nityog-heading">
          <div className="flex items-center gap-5 lg:flex-col lg:items-start lg:gap-6">
            <img
              className="h-28 w-24 shrink-0 object-contain sm:h-36 sm:w-32 lg:h-44 lg:w-40"
              src={mascot}
              alt=""
            />
            <div>
              <h2 className="font-heading text-2xl font-semibold sm:text-3xl" id="about-nityog-heading">
                Toys, a conversation away.
              </h2>
              <p className="mt-3 max-w-md leading-7 text-ink/75">
                Explore our online toy catalogue and contact us directly for product details and availability.
              </p>
            </div>
          </div>

          <Link
            data-button="true"
            className="mt-6 inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-brand-orange px-5 py-3 font-semibold text-ink no-underline hover:bg-brand-brown hover:text-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-orange"
            to="/"
          >
            Browse Products
            <FaArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </section>

        <section
          className="min-w-0 overflow-hidden rounded-3xl border border-brand-brown/15 bg-[#fffaf0] shadow-[0_0.4rem_1.25rem_rgb(77_44_2_/_0.08)]"
          aria-labelledby="business-details-heading"
        >
          <div className="p-6 sm:p-8">
            <h2 className="font-heading text-2xl font-semibold sm:text-3xl" id="business-details-heading">
              Business details
            </h2>

            <dl className="mt-6 divide-y divide-brand-brown/15">
              <div className="grid gap-1 pb-4 sm:grid-cols-[8rem_1fr] sm:gap-5">
                <dt className="text-sm text-ink/65">Business</dt>
                <dd className="m-0 font-semibold">NitYog</dd>
              </div>

              {businessAddress && (
                <div className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-5">
                  <dt className="text-sm text-ink/65">Address</dt>
                  <dd className="m-0">
                    <address className="whitespace-pre-line leading-7 wrap-anywhere not-italic">
                      {businessAddress}
                    </address>
                  </dd>
                </div>
              )}

              {businessGstin && (
                <div className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr] sm:gap-5">
                  <dt className="text-sm text-ink/65">GST number</dt>
                  <dd className="m-0 font-medium tracking-wide wrap-anywhere">
                    {businessGstin}
                  </dd>
                </div>
              )}

              <div className="grid gap-1 pt-4 sm:grid-cols-[8rem_1fr] sm:gap-5">
                <dt className="text-sm text-ink/65">WhatsApp</dt>
                <dd className="m-0 font-medium wrap-anywhere">{formattedNumber}</dd>
              </div>
            </dl>
          </div>

          <div className="border-t border-brand-brown/15 bg-cream/35 p-6 sm:px-8">
            <a
              data-button="true"
              className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#25d366] px-5 py-3 font-semibold text-[#102a18] no-underline hover:bg-[#20bd5a] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-brown sm:w-auto"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="size-5" aria-hidden="true" />
              Contact on WhatsApp
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}

export default AboutPage
