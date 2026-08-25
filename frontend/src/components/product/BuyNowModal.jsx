import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  FaBoxOpen,
  FaCheckCircle,
  FaPhoneAlt,
  FaTimes,
} from 'react-icons/fa'

//the onClose is a prop which contains the function to se the isModalOpen state as false in the parent component which is the ProductDetails.jsx component, so that the modal can be closed when the user clicks on the close button or outside the modal or presses the escape key.

function BuyNowModal({ product, onClose }) {
  const dialogRef = useRef(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { phoneNumber: '' } })

  useEffect(() => {
    const dialog = dialogRef.current
    dialog?.showModal() // Show the dialog when the component mounts, it works because the dialog element is a native HTML element and has a showModal method that opens the dialog in modal mode, preventing interaction with the rest of the page until the dialog is closed.

    return () => {
      if (dialog?.open) dialog.close() // Close the dialog when the component unmounts, it works because the dialog element is a native HTML element and has an open property that indicates whether the dialog is currently open or not, and a close method that closes the dialog.
    }
  }, [])

  function handleBackdropClick(event) {
    if (event.target === dialogRef.current) onClose() //if we click inside the dialog nothing happens as event.target then means that particular clicked element , and if we click outside the dialog then event.target will be the dialog itself and then we close the dialog
  }

  function handleFormSubmit() {
    // This is a UI-only demo. Connect the purchase enquiry API here later.
    setIsSubmitted(true)
  }

  return (
    <dialog
      className="fixed inset-0 m-auto max-h-[calc(100vh-2rem)] w-[min(calc(100%-2rem),34rem)] overflow-y-auto rounded-3xl border-0 bg-[#fffaf0] p-0 text-ink shadow-[0_2rem_5rem_rgb(33_33_33_/_0.35)] backdrop:bg-ink/55 backdrop:backdrop-blur-sm"
      ref={dialogRef}
      aria-labelledby="buy-now-title"
      aria-describedby="buy-now-description"
      onCancel={onClose}
      onClick={handleBackdropClick}
    >
      <div className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-x-0 top-0 h-2 bg-brand-orange" />
        <button
          className="absolute top-5 right-5 inline-flex size-10 cursor-pointer items-center justify-center rounded-full border-0 bg-cream text-brand-brown hover:bg-brand-orange/20 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
          type="button"
          aria-label="Close purchase form"
          onClick={onClose}
        >
          <FaTimes aria-hidden="true" />
        </button>

        {isSubmitted ? (
          <section className="flex min-h-100 flex-col items-center justify-center px-6 py-14 text-center sm:px-10">
            <FaCheckCircle className="size-16 text-[#25a956]" aria-hidden="true" />
            <h2 className="mt-6 font-heading text-3xl font-semibold" id="buy-now-title">
              Thank you!
            </h2>
            <p className="mt-3 text-lg text-ink/75" id="buy-now-description">
              We will contact you shortly.
            </p>
            <button
              className="mt-8 min-h-12 cursor-pointer rounded-xl border-0 bg-brand-brown px-7 font-semibold text-white hover:bg-ink focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-orange"
              type="button"
              onClick={onClose}
            >
              Done
            </button>
          </section>
        ) : (
          <div className="px-6 py-10 sm:px-10 sm:py-12">
            <p className="pr-12 text-sm font-bold tracking-wide text-brand-orange uppercase">
              You’re one step away
            </p>
            <h2 className="mt-2 pr-12 font-heading text-3xl leading-tight font-semibold sm:text-4xl" id="buy-now-title">
              Let’s make {product.name} yours
            </h2>
            <p className="mt-4 leading-7 text-ink/70" id="buy-now-description">
              Online checkout isn’t available yet, but buying is still easy. Share your mobile number and our team will personally help you complete your purchase.
            </p>

            <ul className="my-7 grid list-none gap-3 p-0 text-sm sm:grid-cols-2">
              <li className="flex items-center gap-3 rounded-xl bg-cream/70 p-3">
                <FaBoxOpen className="shrink-0 text-brand-orange" aria-hidden="true" />
                Confirm product availability
              </li>
              <li className="flex items-center gap-3 rounded-xl bg-cream/70 p-3">
                <FaPhoneAlt className="shrink-0 text-brand-orange" aria-hidden="true" />
                Get personal purchase help
              </li>
            </ul>

            <form noValidate onSubmit={handleSubmit(handleFormSubmit)}>
              <label className="font-semibold" htmlFor="customer-phone">
                Your mobile number
              </label>
              <div
                className={`mt-2 flex min-h-14 items-center overflow-hidden rounded-xl border bg-white focus-within:ring-3 ${
                  errors.phoneNumber
                    ? 'border-red-600 focus-within:ring-red-600/20'
                    : 'border-brand-brown/25 focus-within:border-brand-orange focus-within:ring-brand-orange/20'
                }`}
              >
                <span className="border-r border-brand-brown/15 px-4 font-semibold text-brand-brown">
                  +91
                </span>
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
                <p className="mt-2 text-sm font-medium text-red-700" id="phone-error" role="alert">
                  {errors.phoneNumber.message}
                </p>
              )}

              <button
                className="mt-6 min-h-14 w-full cursor-pointer rounded-xl border-0 bg-brand-orange px-6 font-body text-lg font-bold text-ink shadow-[0_0.6rem_1.25rem_rgb(230_142_2_/_0.25)] transition-colors hover:bg-brand-brown hover:text-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-orange"
                type="submit"
              >
                Request a Callback
              </button>
              <button
                className="mt-3 min-h-11 w-full cursor-pointer border-0 bg-transparent font-body font-semibold text-ink/60 hover:text-brand-brown focus-visible:outline-3 focus-visible:outline-brand-orange"
                type="button"
                onClick={onClose}
              >
                Not Now
              </button>
            </form>
          </div>
        )}
      </div>
    </dialog>
  )
}

export default BuyNowModal
