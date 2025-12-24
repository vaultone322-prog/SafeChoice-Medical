import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Layout.css'

function WhatsAppSticky() {
  const whatsappNumber = "97474419065"
  
  const handleClick = () => {
    const message = encodeURIComponent("Hello, I would like to inquire about SafeChoice Medical services.")
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <a 
      href={`https://wa.me/${whatsappNumber}`}
      className="whatsapp-sticky"
      onClick={handleClick}
      aria-label="Contact us on WhatsApp"
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </a>
  )
}

function Layout({ children }) {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <nav className="navbar">
            <Link to="/" className="logo" onClick={closeMenu}>
              <img 
                src="/images/logo.png" 
                alt="SafeChoice Medical" 
                className="logo-image"
              />
            </Link>
            <button 
              className="hamburger-menu"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={isMenuOpen ? 'hamburger-line open' : 'hamburger-line'}></span>
              <span className={isMenuOpen ? 'hamburger-line open' : 'hamburger-line'}></span>
              <span className={isMenuOpen ? 'hamburger-line open' : 'hamburger-line'}></span>
            </button>
            <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
              <li>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className={location.pathname === '/products' ? 'active' : ''} onClick={closeMenu}>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/abortion-care" className={location.pathname === '/abortion-care' ? 'active' : ''} onClick={closeMenu}>
                  Abortion Care
                </Link>
              </li>
              <li>
                <Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''} onClick={closeMenu}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className={location.pathname === '/contact-us' ? 'active' : ''} onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>SafeChoice Medical</h3>
              <p>Confidential support for your health and wellness needs.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact-us">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Important</h4>
              <p className="disclaimer">
                This website does not provide medical advice. All services require professional consultation.
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} SafeChoice Medical. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button - Mobile Only */}
      <WhatsAppSticky />
    </div>
  )
}

export default Layout

