import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/nityog-logo-transparent.png'

const categories = [
  { name: 'Cars', slug: 'cars' },
  { name: 'Dolls', slug: 'dolls' },
  { name: 'Educational Toys', slug: 'educational-toys' },
  { name: 'Soft Toys', slug: 'soft-toys' },
]

const navLinkClasses = ({ isActive }) =>
  `rounded-xl px-3 py-2.5 font-semibold text-ink no-underline transition-colors hover:bg-brand-orange/15 hover:text-brand-brown focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-orange ${
    isActive ? 'bg-brand-orange/15 text-brand-brown' : ''
  }`

function ChevronIcon() {
  return (
    <svg className="w-4 fill-none stroke-current stroke-2" viewBox="0 0 20 20" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 7.5 5 5 5-5" />
    </svg>
  )
}

function MenuIcon({ open }) {
  return (
    <svg className="w-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
      {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  )
}

function Navbar() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navbarRef = useRef(null)

  useEffect(() => {
    function closeOnOutsideClick(event) {
      if (!navbarRef.current?.contains(event.target)) {
        setIsCategoriesOpen(false)
        setIsMobileMenuOpen(false)
      }
    }

    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setIsCategoriesOpen(false)
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  function closeMenus() {
    setIsCategoriesOpen(false)
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full md:px-6 md:pt-4" ref={navbarRef}>
      <nav
        className="relative mx-auto flex min-h-18 w-full items-center gap-1 border-b border-brand-brown/20 bg-cream px-2.5 shadow-[0_0.35rem_1rem_rgb(77_44_2_/_0.08)] md:min-h-21 md:max-w-7xl md:gap-5 md:rounded-3xl md:border md:px-6 md:shadow-[0_0.75rem_2rem_rgb(77_44_2_/_0.14)]"
        aria-label="Main navigation"
      >
        <Link
          className="inline-flex shrink-0 items-center rounded-xl focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-orange"
          to="/"
          onClick={closeMenus}
        >
          <img className="h-13 w-26 object-contain md:h-16 md:w-38" src={logo} alt="NitYog — Little Joys, Big Smiles" />
        </Link>

        <div className="relative ml-auto">
          <button
            className="flex min-h-11 cursor-pointer items-center gap-1 rounded-xl border-0 bg-transparent px-2 font-body text-sm font-semibold text-ink hover:bg-brand-orange/15 hover:text-brand-brown focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-orange md:px-3 md:text-base"
            type="button"
            aria-expanded={isCategoriesOpen}
            aria-controls="category-menu"
            onClick={() => {
              setIsCategoriesOpen((isOpen) => !isOpen)
              setIsMobileMenuOpen(false)
            }}
          >
            Categories
            <span className={`transition-transform motion-reduce:transition-none ${isCategoriesOpen ? 'rotate-180' : ''}`}>
              <ChevronIcon />
            </span>
          </button>

          {isCategoriesOpen && (
            <ul
              className="absolute top-[calc(100%+0.75rem)] right-0 m-0 w-max min-w-52 list-none rounded-2xl border border-brand-brown/15 bg-[#fffaf0] p-2 shadow-[0_1rem_2rem_rgb(77_44_2_/_0.16)]"
              id="category-menu"
            >
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    className="block rounded-xl px-3.5 py-3 font-medium text-ink no-underline hover:bg-brand-orange/15 hover:text-brand-brown focus-visible:outline-3 focus-visible:outline-brand-orange"
                    to={`/categories/${category.slug}`}
                    onClick={closeMenus}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="hidden items-center gap-1 md:flex">
          <NavLink className={navLinkClasses} to="/contact">Contact Us</NavLink>
          <NavLink className={navLinkClasses} to="/about">About Us</NavLink>
        </div>

        <button
          className="ml-1 inline-flex size-11 items-center justify-center rounded-xl border border-brand-brown/25 bg-transparent p-0 text-ink focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-orange md:hidden"
          type="button"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => {
            setIsMobileMenuOpen((isOpen) => !isOpen)
            setIsCategoriesOpen(false)
          }}
        >
          <MenuIcon open={isMobileMenuOpen} />
        </button>

        {isMobileMenuOpen && (
          <div
            className="absolute top-[calc(100%+0.5rem)] right-0 grid min-w-44 rounded-2xl border border-brand-brown/15 bg-[#fffaf0] p-2 shadow-[0_1rem_2rem_rgb(77_44_2_/_0.16)] md:hidden"
            id="mobile-menu"
          >
            <NavLink className={navLinkClasses} to="/contact" onClick={closeMenus}>Contact Us</NavLink>
            <NavLink className={navLinkClasses} to="/about" onClick={closeMenus}>About Us</NavLink>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
