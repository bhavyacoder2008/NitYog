import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaBoxOpen, FaCheckCircle, FaPhoneAlt, FaQuestionCircle, FaTimes } from 'react-icons/fa'

const modalContent = {
  purchase: {
    eyebrow: 'You’re one step away',
    getTitle: (product) => `Let’s make ${product.name} yours`,
    description: 'Online checkout isn’t available yet, but buying is still easy. Share your mobile number and our team will personally help you complete your purchase.',
    benefits: [
      { icon: FaBoxOpen, text: 'Confirm product availability' },
      { icon: FaPhoneAlt, text: 'Get personal purchase help' },
    ],
  },
  enquiry: {
    eyebrow: 'We’re happy to help',
    getTitle: () => 'Let’s find the right toy together',
    description: 'Have a question about a toy? Share your mobile number and the NitYog team will contact you to help with product details, availability, and choosing the right option.',
    benefits: [
      { icon: FaQuestionCircle, text: 'Get answers about our toys' },
      { icon: FaPhoneAlt, text: 'Receive personal assistance' },
    ],
  },
}

// The parent owns visibility. This modal only asks it to close through onClose.
function CallbackModal({ onClose, product, mode = 'enquiry' }) {
  const dialogRef = useRef(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const content = modalContent[mode]
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { phoneNumber: '' },
  })

  useEffect(() => {
    // Effects run after the DOM commit, so the native dialog ref is ready here.
    const dialog = dialogRef.current
    dialog?.showModal()

    return () => {
      if (dialog?.open) dialog.close()
    }
  }, [])

  function handleBackdropClick(event) {
    // Child clicks bubble, but only a backdrop click targets the dialog itself.
    if (event.target === dialogRef.current) onClose()
  }

  function handleFormSubmit() {
    // UI-only demo: connect the callback-request API here before production.
    setIsSubmitted(true)
  }

  return (
    <dialog
      className="fixed inset-0 m-auto max-h-[calc(100vh-2rem)] w-[min(calc(100%-2rem),34rem)] overflow-y-auto rounded-3xl border-0 bg-[#fffaf0] p-0 text-ink shadow-[0_2rem_5rem_rgb(33_33_33_/_0.35)] backdrop:bg-ink/55 backdrop:backdrop-blur-sm"
      ref={dialogRef}
      aria-labelledby="callback-title"
      aria-describedby="callback-description"
      onCancel={onClose}
      onClick={handleBackdropClick}
    >
      <div className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-x-0 top-0 h-2 bg-brand-orange" />
        <button
          className="absolute top-5 right-5 inline-flex size-10 cursor-pointer items-center justify-center rounded-full border-0 bg-cream text-brand-brown hover:bg-brand-orange/20 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
          type="button"
          aria-label="Close callback form"
          onClick={onClose}
        >
          <FaTimes aria-hidden="true" />
        </button>

        {isSubmitted ? (
          <section className="flex min-h-100 flex-col items-center justify-center px-6 py-14 text-center sm:px-10">
            <FaCheckCircle className="size-16 text-[#25a956]" aria-hidden="true" />
            <h2 className="mt-6 font-heading text-3xl font-semibold" id="callback-title">Thank you!</h2>
            <p className="mt-3 text-lg text-ink/75" id="callback-description">We will contact you shortly.</p>
            <button className="mt-8 min-h-12 cursor-pointer rounded-xl border-0 bg-brand-brown px-7 font-semibold text-white hover:bg-ink focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-orange" type="button" onClick={onClose}>
              Done
            </button>
          </section>
        ) : (
          <div className="px-6 py-10 sm:px-10 sm:py-12">
            <p className="pr-12 text-sm font-bold tracking-wide text-brand-orange uppercase">{content.eyebrow}</p>
            <h2 className="mt-2 pr-12 font-heading text-3xl leading-tight font-semibold sm:text-4xl" id="callback-title">
              {content.getTitle(product)}
            </h2>
            <p className="mt-4 leading-7 text-ink/70" id="callback-description">{content.description}</p>

            <ul className="my-7 grid list-none gap-3 p-0 text-sm sm:grid-cols-2">
              {content.benefits.map((benefit) => {
                const BenefitIcon = benefit.icon
                return (
                  <li className="flex items-center gap-3 rounded-xl bg-cream/70 p-3" key={benefit.text}>
                    <BenefitIcon className="shrink-0 text-brand-orange" aria-hidden="true" />
                    {benefit.text}
                  </li>
                )
              })}
            </ul>

            {/* react-hook-form owns validation, so native validation popups are disabled. */}
            <form noValidate onSubmit={handleSubmit(handleFormSubmit)}>
              <label className="font-semibold" htmlFor="customer-phone">Your mobile number</label>
              <div className={`mt-2 flex min-h-14 items-center overflow-hidden rounded-xl border bg-white focus-within:ring-3 ${errors.phoneNumber ? 'border-red-600 focus-within:ring-red-600/20' : 'border-brand-brown/25 focus-within:border-brand-orange focus-within:ring-brand-orange/20'}`}>
                <span className="border-r border-brand-brown/15 px-4 font-semibold text-brand-brown">+91</span>
                <input
                  className="min-w-0 flex-1 bg-transparent px-4 py-3 font-body text-lg outline-none placeholder:text-ink/40"
                  id="customer-phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="tel-national"
                  maxLength={10}
                  placeholder="Enter 10-digit number"
                  aria-invalid={errors.phoneNumber ? 'true' : 'false'}
                  aria-describedby={errors.phoneNumber ? 'phone-error' : undefined}
                  autoFocus
                  {...register('phoneNumber', {
                    required: 'Please enter your mobile number.',
                    pattern: {
                      value: /^[6-9]\d{9}$/,
                      message: 'Enter a valid 10-digit Indian mobile number.',
                    },
                  })}
                />
              </div>

              {errors.phoneNumber && (
                <p className="mt-2 text-sm font-medium text-red-700" id="phone-error" role="alert">{errors.phoneNumber.message}</p>
              )}

              <button className="mt-6 min-h-14 w-full cursor-pointer rounded-xl border-0 bg-brand-orange px-6 font-body text-lg font-bold text-ink shadow-[0_0.6rem_1.25rem_rgb(230_142_2_/_0.25)] transition-colors hover:bg-brand-brown hover:text-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-orange" type="submit">
                Request a Callback
              </button>
              <button className="mt-3 min-h-11 w-full cursor-pointer border-0 bg-transparent font-body font-semibold text-ink/60 hover:text-brand-brown focus-visible:outline-3 focus-visible:outline-brand-orange" type="button" onClick={onClose}>
                Not Now
              </button>
            </form>
          </div>
        )}
      </div>
    </dialog>
  )
}

export default CallbackModal
