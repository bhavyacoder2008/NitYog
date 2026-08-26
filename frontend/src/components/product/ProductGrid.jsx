import ProductCard from './ProductCard.jsx'

function ProductGrid({ products, limit = 8 }) {
  // slice returns a new array, so the products prop is never mutated.
  const visibleProducts = products.slice(0, limit)

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
      {visibleProducts.map((product) => (
        // A stable product ID lets React track the correct card between renders.
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid
