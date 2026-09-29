import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer.jsx'
import Navbar from './components/layout/Navbar.jsx'
import WhatsAppFloatingButton from './components/layout/WhatsAppFloatingButton.jsx'
import ProductGrid from './components/product/ProductGrid.jsx'
import SearchBar from './components/ui/SearchBar.jsx'
import { products as dummyProducts } from './data/products.js'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import AboutPage from './pages/AboutPage.jsx'

// Split on any non-alphanumeric run so "pull-back", "pull back" and "PULL_BACK"
// are treated as the same two words, and so punctuation in a query is harmless.
function toWords(value) {
  return value.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean)
}

// A pure helper: same product + query always gives the same result.
// Keeping search matching outside the component avoids duplicating it across pages.
function matchesSearch(product, query) {
  const searchWords = toWords(query)

  // An empty query would make every() pass vacuously, returning the whole catalogue.
  if (searchWords.length === 0) return false

  // The name and category are searchable on their own; each keyword is one more
  // way a parent might describe the same product.
  const productWords = new Set(
    toWords(
      [product.name, product.category, ...(product.keywords ?? [])]
        .filter(Boolean)
        .join(' '),
    ),
  )

  // Words are compared whole rather than as substrings, so "car" finds the car
  // toys without also matching "cards". Every typed word must be present, which
  // means extra words narrow the results instead of widening them.
  return searchWords.every((word) => productWords.has(word))
}

// The first view shows the eight most popular products; each View More click
// reveals eight more until the whole result set is on screen.
const INITIAL_VISIBLE_COUNT = 8
const VISIBLE_COUNT_STEP = 8

function HomePage() {
  // searchQuery follows every keystroke; submittedQuery changes only on form submit.
  // This means typing a new query does not replace the old results immediately.
  const [searchQuery, setSearchQuery] = useState('')
  const [submittedQuery, setSubmittedQuery] = useState('')
  // This tracks how much of the result set is currently revealed, not what the data is.
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT)
  // Derived data does not need its own state. It is recalculated on each render.
  const displayedProducts = submittedQuery
    ? dummyProducts.filter((product) => matchesSearch(product, submittedQuery))
    : dummyProducts
  const visibleProducts = displayedProducts.slice(0, visibleCount)
  // The button only exists while something is still hidden behind it.
  const hiddenProductCount = displayedProducts.length - visibleProducts.length

  function handleSearch(query) {
    // Replace this local filtering trigger with the global product API call.
    setSubmittedQuery(query)
    // A new result set always starts collapsed so the top matches lead.
    setVisibleCount(INITIAL_VISIBLE_COUNT)
  }

  function handleQueryChange(query) {
    setSearchQuery(query)
    // Clearing the controlled input also restores the initial product list.
    if (!query.trim()) {
      setSubmittedQuery('')
      setVisibleCount(INITIAL_VISIBLE_COUNT)
    }
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
        <ProductGrid products={visibleProducts} />

        {hiddenProductCount > 0 && (
          <div className="mt-10 flex justify-center">
            <button
              className="inline-flex min-h-13 cursor-pointer items-center justify-center rounded-2xl border-2 border-brand-brown bg-transparent px-7 py-3 font-body font-semibold text-brand-brown hover:bg-brand-brown hover:text-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-orange"
              type="button"
              onClick={() => setVisibleCount((count) => count + VISIBLE_COUNT_STEP)}
            >
              View More
            </button>
          </div>
        )}
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
      {/* Shared layout stays outside Routes so it remains mounted on every page. */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/contact" element={<InfoPage title="Contact Us" />} />
        <Route path="/about" element={<AboutPage />} />
        {/* The wildcard catches every URL that did not match a route above it. */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  )
}

export default App
