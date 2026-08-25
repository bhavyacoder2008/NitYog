import { FaWhatsapp } from 'react-icons/fa'
import {
  buildWhatsAppUrl,
  defaultWhatsAppMessage,
} from '../../utils/whatsapp.js'

function WhatsAppFloatingButton() {
  return (
    <a
      className="fixed right-4 bottom-4 z-40 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#25d366] px-4 py-3 font-body text-sm font-semibold text-[#102a18] no-underline shadow-[0_0.75rem_2rem_rgb(16_42_24_/_0.25)] transition-[transform,background-color,box-shadow] hover:-translate-y-0.5 hover:bg-[#20bd5a] hover:shadow-[0_1rem_2.25rem_rgb(16_42_24_/_0.3)] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-brown motion-reduce:transition-none md:right-6 md:bottom-6 md:min-h-14 md:px-5 md:text-base"
      href={buildWhatsAppUrl(defaultWhatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ask NitYog on WhatsApp"
    >
      <FaWhatsapp className="size-6 shrink-0 md:size-7" aria-hidden="true" />
      <span>Ask Us on WhatsApp</span>
    </a>
  )
}

export default WhatsAppFloatingButton
