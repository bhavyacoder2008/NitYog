import { useState } from 'react'
import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import Footer from './components/layout/Footer.jsx'
import Navbar from './components/layout/Navbar.jsx'
import WhatsAppFloatingButton from './components/layout/WhatsAppFloatingButton.jsx'
import ProductGrid from './components/product/ProductGrid.jsx'
import SearchBar from './components/ui/SearchBar.jsx'
import { products as dummyProducts } from './data/products.js'
import ProductDetailPage from './pages/ProductDetailPage.jsx'

function matchesSearch(product, query) {
  const normalizedQuery = query.toLowerCase()

  return (
    product.name.toLowerCase().includes(normalizedQuery) ||
    product.category.toLowerCase().includes(normalizedQuery)
  )
}

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [submittedQuery, setSubmittedQuery] = useState('')
  const displayedProducts = submittedQuery
    ? dummyProducts.filter((product) => matchesSearch(product, submittedQuery))
    : dummyProducts

  function handleSearch(query) {
    // Replace this local filtering trigger with the global product API call.
    setSubmittedQuery(query)
  }

  function handleQueryChange(query) {
    setSearchQuery(query)
    if (!query.trim()) setSubmittedQuery('')
  }

  return (
    <main className="mx-auto min-h-[120vh] w-[min(calc(100%-2rem),75rem)] py-12 md:py-24">
      <h1 className="mb-3 font-heading text-4xl font-semibold">Find a little joy</h1>
      <SearchBar
        value={searchQuery}
        onChange={handleQueryChange}
        onSubmit={handleSearch}
      />
      <section className="mt-12" aria-labelledby="products-heading">
        <h2 className="mb-6 font-heading text-3xl font-semibold" id="products-heading">
          {submittedQuery ? 'Search Results' : 'Top Products'}
        </h2>
        <ProductGrid products={displayedProducts} limit={8} />
      </section>
    </main>
  )
}

function CategoryPage() {
  const { categorySlug } = useParams()
  const [searchQuery, setSearchQuery] = useState('')
  const [submittedQuery, setSubmittedQuery] = useState('')
  const categoryName = categorySlug.replaceAll('-', ' ')
  const categoryProducts = dummyProducts.filter(
    (product) => product.categorySlug === categorySlug,
  )
  const displayedProducts = submittedQuery
    ? categoryProducts.filter((product) => matchesSearch(product, submittedQuery))
    : categoryProducts

  function handleSearch(query) {
    // Replace this local filtering trigger with the category product API call.
    setSubmittedQuery(query)
  }

  function handleQueryChange(query) {
    setSearchQuery(query)
    if (!query.trim()) setSubmittedQuery('')
  }

  return (
    <main className="mx-auto min-h-[120vh] w-[min(calc(100%-2rem),75rem)] py-12 md:py-24">
      <h1 className="mb-3 font-heading text-4xl font-semibold capitalize">{categoryName}</h1>
      <p className="mb-8">Products for this category will appear here.</p>
      <SearchBar
        value={searchQuery}
        onChange={handleQueryChange}
        onSubmit={handleSearch}
        placeholder={`Search in ${categoryName}...`}
        label={`Search toys in ${categoryName}`}
      />
      <section className="mt-12" aria-labelledby="category-products-heading">
        <h2
          className="mb-6 font-heading text-3xl font-semibold"
          id="category-products-heading"
        >
          {submittedQuery ? 'Search Results' : `Top ${categoryName}`}
        </h2>
        <ProductGrid products={displayedProducts} limit={8} />
      </section>
    </main>
  )
}

function InfoPage({ title }) {
  return <main className="mx-auto min-h-[120vh] w-[min(calc(100%-2rem),75rem)] py-12 md:py-24"><h1 className="mb-3 font-heading text-4xl font-semibold">{title}</h1><p>Page content will be added later.</p></main>
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories/:categorySlug" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/contact" element={<InfoPage title="Contact Us" />} />
        <Route path="/about" element={<InfoPage title="About Us" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  )
}

export default App
