import ProductCard from './ProductCard.jsx'

function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
      {products.map((product) => (
        // A stable product ID lets React track the correct card between renders.
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductGrid
