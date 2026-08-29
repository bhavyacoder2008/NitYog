import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/nityog-logo-transparent.png'

// NavLink calls this function with router information for the current URL.
// We derive active styling from the router instead of maintaining duplicate state.
const navLinkClasses = ({ isActive }) =>
  `rounded-xl px-3 py-2.5 font-semibold text-ink no-underline transition-colors hover:bg-brand-orange/15 hover:text-brand-brown focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-orange ${
    isActive ? 'bg-brand-orange/15 text-brand-brown' : ''
  }`

function MenuIcon({ open }) {
  return (
    <svg className="w-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
      {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
    </svg>
  )
}

function Navbar() {
  // This state belongs here because only the navbar needs to know if its menu is open.
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // The ref gives us the actual header DOM node for the outside-click boundary check.
  const navbarRef = useRef(null)

  useEffect(() => {
    // This effect is justified because it synchronizes React with document-level events.
    function closeOnOutsideClick(event) {
      // contains is false only when the clicked DOM node is outside the header.
      if (!navbarRef.current?.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }

    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)

    // Cleanup prevents duplicate document listeners if this component unmounts/remounts.
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [])

  function closeMenus() {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full md:px-6 md:pt-4" ref={navbarRef}>
      <nav
        className="relative mx-auto flex min-h-18 w-full items-center gap-1 border-b border-brand-brown/20 bg-[#e9e9d9] px-2.5 shadow-[0_0.35rem_1rem_rgb(77_44_2_/_0.08)] md:min-h-21 md:max-w-7xl md:gap-5 md:rounded-3xl md:border md:px-6 md:shadow-[0_0.75rem_2rem_rgb(77_44_2_/_0.14)]"
        aria-label="Main navigation"
      >
        <Link
          className="inline-flex shrink-0 items-center rounded-xl focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-orange"
          to="/"
          onClick={closeMenus}
        >
          <img className="h-13 w-26 object-contain md:h-16 md:w-38" src={logo} alt="NitYog — Little Joys, Big Smiles" />
        </Link>

        <div className="ml-auto hidden items-center gap-1 md:flex">
          <NavLink className={navLinkClasses} to="/contact">Contact Us</NavLink>
          <NavLink className={navLinkClasses} to="/about">About Us</NavLink>
        </div>

        <button
          className="ml-auto inline-flex size-11 items-center justify-center rounded-xl border border-brand-brown/25 bg-transparent p-0 text-ink focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-orange md:hidden"
          type="button"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => {
            // Functional updates are safest when the next state depends on the old state.
            setIsMobileMenuOpen((isOpen) => !isOpen)
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
