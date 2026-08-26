import { useState } from 'react'
import { FaShoppingBag, FaWhatsapp } from 'react-icons/fa'
import { Link, useLocation, useParams } from 'react-router-dom'
import BuyNowModal from '../components/product/BuyNowModal.jsx'
import { formatPrice } from '../utils/currency.js'
import { buildWhatsAppUrl } from '../utils/whatsapp.js'

function ProductDetailPage() {
  // The page owns modal visibility; the modal receives only data and an onClose callback.
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false)
  // The URL identifies the product, while location.state is optional navigation data.
  const { productId } = useParams()
  const location = useLocation()
  const passedProduct = location.state?.product

  // Never display state for the wrong URL. Direct visits currently fall back because
  // database fetching has intentionally not been implemented yet.
  const product = passedProduct?.id === productId ? passedProduct : null

  if (!product) {
    return (
      <main className="mx-auto min-h-[70vh] w-[min(calc(100%-2rem),75rem)] py-12 md:py-24">
        <section className="rounded-3xl border border-brand-brown/15 bg-[#fffaf0] p-8 text-center shadow-[0_0.75rem_2rem_rgb(77_44_2_/_0.1)]">
          <h1 className="font-heading text-3xl font-semibold">Product details unavailable</h1>
          <p className="mx-auto mt-3 max-w-xl text-ink/70">
            Please open this product from the NitYog catalogue to view its details.
          </p>
          <Link
            className="mt-6 inline-flex rounded-xl bg-brand-orange px-5 py-3 font-semibold text-ink no-underline hover:bg-brand-brown hover:text-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-orange"
            to="/"
          >
            Browse Products
          </Link>
        </section>
      </main>
    )
  }

  const enquiryMessage = `Hi, I'm interested in ${product.name} on NitYog.`

  return (
    <main className="mx-auto w-[min(calc(100%-2rem),75rem)] py-10 md:py-16">
      <Link
        className="mb-5 inline-flex font-medium text-brand-brown no-underline hover:text-ink focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-orange"
        to="/"
      >
        ← Back to products
      </Link>

      <h1 className="mb-7 font-heading text-4xl font-semibold md:text-5xl">
        {product.name}
      </h1>

      <article className="overflow-hidden rounded-3xl border border-brand-brown/15 bg-[#fffaf0] shadow-[0_0.75rem_2rem_rgb(77_44_2_/_0.12)]">
        <div className="grid lg:grid-cols-2">
          <div className="flex min-h-80 items-center justify-center bg-cream/55 p-6 sm:p-10 lg:min-h-130">
            <img
              className="max-h-110 w-full object-contain"
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="flex flex-col p-6 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold tracking-wide text-brand-brown uppercase">
              {product.category}
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold md:text-4xl">
              {product.name}
            </h2>

            <dl className="mt-8 grid gap-5 border-y border-brand-brown/15 py-6">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-ink/65">Category</dt>
                <dd className="m-0 font-semibold">{product.category}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-ink/65">Price</dt>
                <dd className="m-0 text-xl font-bold text-brand-brown">
                  {formatPrice(product.price)}
                </dd>
              </div>
            </dl>

            <button
              className="mt-8 inline-flex min-h-15 cursor-pointer items-center justify-center gap-2 rounded-2xl border-0 bg-brand-orange px-5 py-3 font-body text-lg font-bold text-ink shadow-[0_0.75rem_1.5rem_rgb(230_142_2_/_0.3)] transition-[transform,background-color] hover:-translate-y-0.5 hover:bg-brand-brown hover:text-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-orange motion-reduce:transition-none"
              type="button"
              onClick={() => setIsBuyModalOpen(true)}
            >
              <FaShoppingBag className="size-5" aria-hidden="true" />
              BUY NOW
            </button>

            <a
              className="mt-3 inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-[#25d366] px-5 py-3 font-semibold text-[#102a18] no-underline transition-colors hover:bg-[#20bd5a] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-brown"
              href={buildWhatsAppUrl(enquiryMessage)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="size-6" aria-hidden="true" />
              Ask About This Product
            </a>
          </div>
        </div>

        <section className="border-t border-brand-brown/15 p-6 sm:p-10 lg:p-12" aria-labelledby="product-description">
          <h2 className="font-heading text-3xl font-semibold" id="product-description">
            Product Description
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-ink/75">
            {product.description || 'Product description will be added when complete product information is available.'}
          </p>
        </section>
      </article>

      {/* Unmounting the modal when closed also discards its temporary form state. */}
      {isBuyModalOpen && (
        <BuyNowModal
          product={product}
          onClose={() => setIsBuyModalOpen(false)}
        />
      )}
    </main>
  )
}

export default ProductDetailPage
