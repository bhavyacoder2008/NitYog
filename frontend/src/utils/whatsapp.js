const whatsappNumber =
  import.meta.env.VITE_WHATSAPP_NUMBER || '917701939134'

export const defaultWhatsAppMessage =
  'Hi, I would like to know more about NitYog toys.'

export function buildWhatsAppUrl(message) {
  // wa.me expects digits only; encodeURIComponent makes message punctuation URL-safe.
  const normalizedNumber = whatsappNumber.replace(/\D/g, '')
  const encodedMessage = encodeURIComponent(message.trim())

  return `https://wa.me/${normalizedNumber}?text=${encodedMessage}`
}
