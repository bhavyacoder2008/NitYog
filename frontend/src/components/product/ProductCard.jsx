import { Link } from 'react-router-dom'

const priceFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
})

function ProductCard({ product }) {

  function handleProductClick(productId) {
    localStorage.setItem('lastClickedProductId', productId)
  }
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-brand-brown/15 bg-[#fffaf0] shadow-[0_0.4rem_1.25rem_rgb(77_44_2_/_0.08)] transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_0.8rem_1.75rem_rgb(77_44_2_/_0.16)] motion-reduce:transition-none">
      <Link
        className="flex h-full flex-col text-ink no-underline focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-brand-orange"
        to={`/product/${product.id}`}
        aria-label={`View ${product.name}`}
        onClick={() => handleProductClick(product.id)}
      >
        <div className="aspect-square overflow-hidden bg-cream/55 p-3 md:p-5">
          <img
            className="size-full object-contain transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none"
            src={product.image}
            alt={product.name}
            loading="lazy"
          />
        </div>

        <div className="flex flex-1 flex-col p-3 md:p-4">
          <p className="mb-1 text-xs font-medium text-brand-brown md:text-sm">
            {product.category}
          </p>
          <h3 className="mb-3 font-heading text-base leading-tight font-semibold md:text-xl">
            {product.name}
          </h3>
          <p className="mt-auto text-base font-bold text-brand-brown md:text-lg">
            {priceFormatter.format(product.price)}
          </p>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard
