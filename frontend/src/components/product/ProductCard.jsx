import { Link } from 'react-router-dom'
import { formatPrice } from '../../utils/currency.js'

function ProductCard({ product }) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-brand-brown/15 bg-[#fffaf0] shadow-[0_0.4rem_1.25rem_rgb(77_44_2_/_0.08)] transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_0.8rem_1.75rem_rgb(77_44_2_/_0.16)] motion-reduce:transition-none">
      {/* Router state carries the loaded product forward for an immediate detail view.
          The URL ID remains necessary because state can be missing on direct visits. */}
      <Link
        className="flex h-full flex-col text-ink no-underline focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-brand-orange"
        to={`/product/${product.id}`}
        state={{ product }}
        aria-label={`View ${product.name}`}
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
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard
