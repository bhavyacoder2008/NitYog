import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {
  buildWhatsAppUrl,
  defaultWhatsAppMessage,
} from '../../utils/whatsapp.js'

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: FaInstagram,
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: FaFacebookF,
  },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-brown px-4 py-8 text-cream md:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-heading text-xl font-semibold">
            NitYog™ — Little Joys, Big Smiles.
          </p>
          <p className="mt-1 text-sm text-cream/75">
            © {currentYear} NitYog. All rights reserved.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="mb-3 font-heading text-lg font-semibold">Quick Links</h2>
          <ul className="m-0 grid list-none gap-2 p-0">
            <li>
              <Link className="text-cream/80 no-underline hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-orange" to="/">
                Products
              </Link>
            </li>
            <li>
              <Link className="text-cream/80 no-underline hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-orange" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className="text-cream/80 no-underline hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-orange" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <div className="sm:col-span-2 lg:col-span-1">
          <h2 className="mb-3 font-heading text-lg font-semibold">Connect With Us</h2>
          <a
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-4 py-2.5 font-semibold text-[#102a18] no-underline hover:bg-[#20bd5a] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-orange"
            href={buildWhatsAppUrl(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="size-5" aria-hidden="true" />
            Contact Us on WhatsApp
          </a>

          <nav aria-label="NitYog social media">
            <ul className="flex list-none items-center justify-center gap-3 p-0 sm:justify-start">
            {socialLinks.map((social) => {
              const SocialIcon = social.icon

              return (
                <li key={social.name}>
                  <a
                    className="inline-flex size-11 items-center justify-center rounded-full border border-cream/30 text-cream transition-colors hover:border-brand-orange hover:bg-brand-orange hover:text-ink focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-orange"
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow NitYog on ${social.name}`}
                  >
                    <SocialIcon className="size-5" aria-hidden="true" />
                  </a>
                </li>
              )
            })}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
