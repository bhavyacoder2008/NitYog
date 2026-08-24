const whatsappNumber =
  import.meta.env.VITE_WHATSAPP_NUMBER || '917701939134'

export function buildWhatsAppUrl(message) {
  const normalizedNumber = whatsappNumber.replace(/\D/g, '')
  const encodedMessage = encodeURIComponent(message.trim())

  return `https://wa.me/${normalizedNumber}?text=${encodedMessage}`
}
