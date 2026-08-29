import { useState } from 'react'
import { FaComments, FaLaptop, FaPhoneAlt, FaTags, FaWhatsapp } from 'react-icons/fa'
import mascot from '../../docs/brandkit/images/logo/mascot.png'
import CallbackModal from '../components/ui/CallbackModal.jsx'
import { buildWhatsAppUrl } from '../utils/whatsapp.js'

const aboutWhatsAppMessage =
  'Hi, I have a question about NitYog toys. Please help me with more information.'

const highlights = [
  {
    icon: FaComments,
    title: 'A wide range of toys',
    description: 'Explore different kinds of toys and find an option that fits your child’s interests.',
  },
  {
    icon: FaLaptop,
    title: 'Easy online discovery',
    description: 'Browse our online catalogue from anywhere and ask us directly when you need help.',
  },
  {
    icon: FaTags,
    title: 'More value for families',
    description: 'We aim to offer toys at prices lower than typical market prices.',
  },
]

function AboutPage() {
  const [isCallbackModalOpen, setIsCallbackModalOpen] = useState(false)
  const whatsappUrl = buildWhatsAppUrl(aboutWhatsAppMessage)

  return (
    <main className="overflow-hidden">
      <section className="relative mx-auto grid min-h-[70vh] w-[min(calc(100%-2rem),75rem)] items-center gap-10 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
        <div className="relative z-10 text-center lg:text-left">
          <p className="inline-flex rounded-full bg-brand-orange/15 px-4 py-2 text-sm font-bold tracking-wide text-brand-brown uppercase">
            Bringing smiles since August 2024
          </p>
          <h1 className="mt-5 font-heading text-5xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">
            Little toys. Big imagination. Even bigger smiles.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-ink/70 lg:mx-0">
            NitYog is an online toy catalogue helping parents discover and buy from a wide range of children’s toys with friendly, personal assistance whenever they need it.
          </p>
          <a
            className="mt-8 inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-[#25d366] px-6 py-3 font-semibold text-[#102a18] no-underline shadow-[0_0.75rem_1.5rem_rgb(16_42_24_/_0.18)] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-[#20bd5a] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-brown motion-reduce:transition-none"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="size-6" aria-hidden="true" />
            Talk to NitYog
          </a>
        </div>

        <div className="relative mx-auto flex min-h-90 w-full max-w-lg items-center justify-center lg:min-h-130">
          <div className="absolute top-8 left-4 size-24 animate-soft-pulse rounded-full bg-brand-orange/20 motion-reduce:animate-none sm:size-32" />
          <div className="absolute right-2 bottom-12 size-20 animate-soft-pulse rounded-[2rem] bg-brand-brown/15 [animation-delay:1.2s] motion-reduce:animate-none sm:size-28" />
          <div className="absolute top-1/2 right-5 size-8 rotate-12 rounded-lg bg-brand-orange/35" />
          <img
            className="relative z-10 max-h-115 w-full animate-gentle-float object-contain transition-transform duration-300 hover:scale-105 hover:-rotate-2 motion-reduce:animate-none motion-reduce:transition-none"
            src={mascot}
            alt="NitYog teddy bear mascot waving"
          />
        </div>
      </section>

      <section className="bg-[#fffaf0] px-4 py-16 md:px-6 md:py-24" aria-labelledby="our-story-heading">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[0.7fr_1.3fr]">
          <p className="font-heading text-7xl font-semibold text-brand-orange/35 md:text-9xl" aria-hidden="true">
            2024
          </p>
          <div>
            <p className="text-sm font-bold tracking-wide text-brand-orange uppercase">Our story</p>
            <h2 className="mt-2 font-heading text-4xl font-semibold" id="our-story-heading">
              Making toy discovery simpler for parents
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/70">
              NitYog started in August 2024 with a simple purpose: to help parents explore children’s toys through an easy online catalogue and connect directly with a helpful team before buying.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-[min(calc(100%-2rem),75rem)] py-16 md:py-24" aria-labelledby="offer-heading">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-wide text-brand-orange uppercase">What we offer</p>
          <h2 className="mt-2 font-heading text-4xl font-semibold md:text-5xl" id="offer-heading">
            A friendly way to find the next favourite toy
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {highlights.map((highlight) => {
            const HighlightIcon = highlight.icon
            return (
              <article
                className="group rounded-3xl border border-brand-brown/15 bg-[#fffaf0] p-7 shadow-[0_0.6rem_1.5rem_rgb(77_44_2_/_0.08)] transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_1rem_2rem_rgb(77_44_2_/_0.14)] motion-reduce:transition-none"
                key={highlight.title}
              >
                <span className="inline-flex size-13 items-center justify-center rounded-2xl bg-brand-orange/15 text-brand-brown transition-transform group-hover:scale-110 group-hover:rotate-3 motion-reduce:transition-none">
                  <HighlightIcon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-heading text-2xl font-semibold">{highlight.title}</h3>
                <p className="mt-3 leading-7 text-ink/65">{highlight.description}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section className="px-4 pb-16 md:px-6 md:pb-24" aria-labelledby="questions-heading">
        <div className="mx-auto max-w-6xl rounded-3xl bg-brand-orange p-7 text-center shadow-[0_1rem_2.5rem_rgb(230_142_2_/_0.22)] sm:p-10 md:p-14">
          <h2 className="font-heading text-4xl font-semibold" id="questions-heading">
            Have a question about a toy?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-ink/75">
            Ask about product details, availability, or choosing the right toy. We’re here to help you make a confident choice.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[#25d366] px-5 py-3 font-semibold text-[#102a18] no-underline hover:bg-[#20bd5a] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-brown"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="size-6" aria-hidden="true" />
              Ask on WhatsApp
            </a>
            <button
              className="inline-flex min-h-13 cursor-pointer items-center justify-center gap-2 rounded-xl border-2 border-brand-brown bg-transparent px-5 py-3 font-body font-semibold text-brand-brown hover:bg-brand-brown hover:text-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-brown"
              type="button"
              onClick={() => setIsCallbackModalOpen(true)}
            >
              <FaPhoneAlt aria-hidden="true" />
              Request a Callback
            </button>
          </div>
        </div>
      </section>

      <section className="bg-brand-brown px-4 py-14 text-cream md:px-6 md:py-18" aria-labelledby="final-cta-heading">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-7 text-center sm:flex-row sm:text-left">
          <img
            className="h-40 shrink-0 object-contain transition-transform duration-300 hover:scale-105 hover:rotate-2 motion-reduce:transition-none"
            src={mascot}
            alt="NitYog teddy bear mascot"
          />
          <div className="flex-1">
            <h2 className="font-heading text-3xl font-semibold md:text-4xl" id="final-cta-heading">
              Looking for the right toy? Let’s find it together.
            </h2>
            <a
              className="mt-5 inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[#25d366] px-5 py-3 font-semibold text-[#102a18] no-underline hover:bg-[#20bd5a] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-orange"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="size-6" aria-hidden="true" />
              Chat With Us
            </a>
          </div>
        </div>
      </section>

      {isCallbackModalOpen && (
        <CallbackModal onClose={() => setIsCallbackModalOpen(false)} />
      )}
    </main>
  )
}

export default AboutPage
