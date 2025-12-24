import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './Layout.css'

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
    </div>
  )
}

export default Layout

