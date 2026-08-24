import { useState } from 'react'
import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import WhatsAppFloatingButton from './components/layout/WhatsAppFloatingButton.jsx'
import SearchBar from './components/ui/SearchBar.jsx'

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')

  function handleSearch(query) {
    // The global product API call will be connected here.
    setSearchQuery(query)
  }

  return (
    <main className="mx-auto min-h-[120vh] w-[min(calc(100%-2rem),75rem)] py-12 md:py-24">
      <h1 className="mb-3 font-heading text-4xl font-semibold">Find a little joy</h1>
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        onSubmit={handleSearch}
      />
    </main>
  )
}

function CategoryPage() {
  const { categorySlug } = useParams()
  const [searchQuery, setSearchQuery] = useState('')
  const categoryName = categorySlug.replaceAll('-', ' ')

  function handleSearch(query) {
    // The category-scoped product API call will be connected here.
    setSearchQuery(query)
  }

  return (
    <main className="mx-auto min-h-[120vh] w-[min(calc(100%-2rem),75rem)] py-12 md:py-24">
      <h1 className="mb-3 font-heading text-4xl font-semibold capitalize">{categoryName}</h1>
      <p className="mb-8">Products for this category will appear here.</p>
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        onSubmit={handleSearch}
        placeholder={`Search in ${categoryName}...`}
        label={`Search toys in ${categoryName}`}
      />
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
        <Route path="/contact" element={<InfoPage title="Contact Us" />} />
        <Route path="/about" element={<InfoPage title="About Us" />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <WhatsAppFloatingButton />
    </>
  )
}

export default App
