import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion'

function Home() {
  return (
    <div>
      {/* Banner Section */}
      <div 
        className="page-banner"
        style={{
          backgroundImage: 'url(/images/complete-care-kit-standard.jpg)'
        }}
      >
        <div className="page-banner-content">
          <h1>Confidential Medical Support You Can Trust</h1>
          <p>Your privacy and well-being are our top priorities</p>
        </div>
      </div>

      {/* Product Preview Section */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              color: 'var(--primary-blue)',
              marginBottom: '1rem'
            }}>
              Featured Products
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              color: 'var(--text-gray)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Explore our range of professional healthcare products
            </p>
          </div>

          <div className="featured-products-grid">
            {[
              {
                name: "Sayana Press",
                subtitle: "Family Planning (3 Months)",
                description: "Long-acting injectable contraceptive providing 3 months of protection.",
                image: "/images/sayana-press.jpg",
                badge: "3 Months"
              },
              {
                name: "Complete Care Kit - Standard",
                subtitle: "Comprehensive Support Package",
                description: "Complete care package including medication, pain relief, and professional support.",
                image: "/images/complete-care-kit-standard.jpg",
                badge: "Complete Kit"
              },
              {
                name: "Amoxicillin",
                subtitle: "Penicillin Antibiotic",
                description: "Commonly prescribed antibiotic for various infections. Requires medical consultation.",
                image: "/images/amoxicillin.jpg",
                badge: "Prescription"
              },
              {
                name: "Lydia",
                subtitle: "Emergency Contraceptive",
                description: "Emergency contraceptive pill for unplanned situations. Available with professional guidance.",
                image: "/images/lydia.jpg",
                badge: "Emergency"
              }
            ].map((product, index) => (
              <div 
                key={index}
                className="product-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {product.badge && (
                  <div className="product-badge">
                    {product.badge}
                  </div>
                )}
                <div className="product-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="product-image"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.parentElement.innerHTML = `
                        <div class="product-image-placeholder">
                          <span>💊</span>
                        </div>
                      `
                    }}
                  />
                </div>
                <div className="product-content">
                  <h3 style={{ 
                    marginBottom: '0.5rem', 
                    color: 'var(--text-dark)',
                    fontSize: '1.25rem'
                  }}>
                    {product.name}
                  </h3>
                  <p style={{ 
                    marginBottom: '0.75rem', 
                    color: 'var(--primary-blue)',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    {product.subtitle}
                  </p>
                  <p style={{ 
                    marginBottom: '1.5rem', 
                    color: 'var(--text-gray)',
                    fontSize: '0.9375rem',
                    lineHeight: '1.6'
                  }}>
                    {product.description}
                  </p>
                  <Link 
                    to="/products" 
                    className="btn btn-primary" 
                    style={{ width: '100%' }}
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '2rem' }}>
            <Link 
              to="/products" 
              className="btn btn-secondary"
              style={{ fontSize: '1.125rem', padding: '1rem 2.5rem' }}
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="section section-alt" style={{ 
        background: 'linear-gradient(135deg, var(--soft-blue) 0%, var(--light-green) 100%)',
        padding: '3rem 0',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '1.5rem',
              color: 'var(--primary-blue)',
              fontWeight: '700',
              lineHeight: '1.2'
            }}>
              Professional Healthcare Support
            </h2>
            <p style={{ 
              fontSize: '1.5rem', 
              marginBottom: '2rem', 
              color: 'var(--text-gray)',
              lineHeight: '1.6'
            }}>
              Your privacy and well-being are our top priorities. We provide professional, 
              confidential consultations for your health and wellness needs.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}>
              <Link to="/products" className="btn btn-primary" style={{ 
                fontSize: '1.125rem', 
                padding: '1rem 2.5rem',
                boxShadow: '0 4px 12px rgba(44, 95, 141, 0.3)'
              }}>
                View Products
              </Link>
              <Link to="/consultation" className="btn btn-secondary" style={{ 
                fontSize: '1.125rem', 
                padding: '1rem 2.5rem',
                boxShadow: '0 4px 12px rgba(74, 155, 142, 0.3)'
              }}>
                Request Consultation
              </Link>
            </div>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-gray)', fontStyle: 'italic' }}>
              Professional • Confidential • Supportive
            </p>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section">
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            <div className="trust-feature-card animate-fade-in-up animate-delay-1">
              <div className="trust-icon-wrapper">
                <div className="trust-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.4 7 14.8 7.56 15.7 8.3L16.7 7.3C15.5 6.5 13.8 6 12 6C10.2 6 8.5 6.5 7.3 7.3L8.3 8.3C9.2 7.56 10.6 7 12 7ZM12 9C11.5 9 11 9.19 10.61 9.5C10.22 9.81 10 10.19 10 10.5C10 10.81 10.22 11.19 10.61 11.5C11 11.81 11.5 12 12 12C12.5 12 13 11.81 13.39 11.5C13.78 11.19 14 10.81 14 10.5C14 10.19 13.78 9.81 13.39 9.5C13 9.19 12.5 9 12 9Z" fill="currentColor"/>
                  </svg>
                </div>
              </div>
              <h3 className="trust-feature-title">Complete Privacy</h3>
              <p className="trust-feature-description">
                Your information is handled with the utmost confidentiality. We never share your details with third parties.
              </p>
            </div>
            <div className="trust-feature-card animate-fade-in-up animate-delay-2">
              <div className="trust-icon-wrapper">
                <div className="trust-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 2V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="trust-feature-title">Professional Support</h3>
              <p className="trust-feature-description">
                All consultations are conducted by qualified professionals who prioritize your health and well-being.
              </p>
            </div>
            <div className="trust-feature-card animate-fade-in-up animate-delay-3">
              <div className="trust-icon-wrapper">
                <div className="trust-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="trust-feature-title">Respectful Care</h3>
              <p className="trust-feature-description">
                We provide non-judgmental, compassionate support in a safe and understanding environment.
              </p>
            </div>
            <div className="trust-feature-card animate-fade-in-up animate-delay-1">
              <div className="trust-icon-wrapper">
                <div className="trust-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="trust-feature-title">Quality Assured</h3>
              <p className="trust-feature-description">
                Professional-grade medications from trusted sources, ensuring safety and effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <h2 style={{ 
                fontSize: '2.5rem',
                color: 'var(--primary-blue)',
                marginBottom: '1rem'
              }}>
                How It Works
              </h2>
              <p style={{ 
                fontSize: '1.125rem', 
                color: 'var(--text-gray)',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                Our simple, confidential process ensures you receive the care and support you need
              </p>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '2rem' 
            }}>
              <div className="card text-center animate-fade-in-up animate-delay-1" style={{ padding: '2rem 1.5rem' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, var(--primary-blue), var(--accent-green))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'var(--white)',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 12px rgba(44, 95, 141, 0.3)'
                }}>
                  1
                </div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--text-dark)' }}>Request Consultation</h3>
                <p style={{ color: 'var(--text-gray)', lineHeight: '1.6' }}>
                  Complete our confidential consultation form or contact us directly. Your privacy is protected.
                </p>
              </div>

              <div className="card text-center animate-fade-in-up animate-delay-2" style={{ padding: '2rem 1.5rem' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, var(--primary-blue), var(--accent-green))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'var(--white)',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 12px rgba(44, 95, 141, 0.3)'
                }}>
                  2
                </div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--text-dark)' }}>Professional Assessment</h3>
                <p style={{ color: 'var(--text-gray)', lineHeight: '1.6' }}>
                  Our qualified professionals review your needs and provide guidance tailored to your situation.
                </p>
              </div>

              <div className="card text-center animate-fade-in-up animate-delay-3" style={{ padding: '2rem 1.5rem' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, var(--primary-blue), var(--accent-green))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'var(--white)',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 12px rgba(44, 95, 141, 0.3)'
                }}>
                  3
                </div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--text-dark)' }}>Discreet Delivery</h3>
                <p style={{ color: 'var(--text-gray)', lineHeight: '1.6' }}>
                  Receive your medication or care package in professional, discreet packaging to your chosen address.
                </p>
              </div>

              <div className="card text-center animate-fade-in-up animate-delay-1" style={{ padding: '2rem 1.5rem' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, var(--primary-blue), var(--accent-green))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  color: 'var(--white)',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  boxShadow: '0 4px 12px rgba(44, 95, 141, 0.3)'
                }}>
                  4
                </div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--text-dark)' }}>Ongoing Support</h3>
                <p style={{ color: 'var(--text-gray)', lineHeight: '1.6' }}>
                  Access our aftercare support and professional guidance whenever you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '3rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              color: 'var(--primary-blue)',
              marginBottom: '1rem'
            }}>
              Our Services
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              color: 'var(--text-gray)',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              Comprehensive healthcare support tailored to your needs
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            <div className="card animate-fade-in-up animate-delay-1" style={{ 
              border: '2px solid var(--primary-blue)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>💊</div>
              <h3 style={{ 
                marginBottom: '1rem', 
                color: 'var(--primary-blue)',
                textAlign: 'center'
              }}>
                Family Planning
              </h3>
              <p style={{ 
                marginBottom: '1.5rem', 
                color: 'var(--text-gray)',
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                Reliable contraceptive options including Sayana Press, Lydia, P2, and monthly supplies. 
                Professional consultation ensures the right choice for you.
              </p>
              <Link 
                to="/products" 
                className="btn btn-outline" 
                style={{ width: '100%', textAlign: 'center' }}
              >
                View Products
              </Link>
            </div>

            <div className="card animate-fade-in-up animate-delay-2" style={{ 
              border: '2px solid var(--accent-green)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>🩺</div>
              <h3 style={{ 
                marginBottom: '1rem', 
                color: 'var(--primary-blue)',
                textAlign: 'center'
              }}>
                Abortion Care
              </h3>
              <p style={{ 
                marginBottom: '1.5rem', 
                color: 'var(--text-gray)',
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                Safe, confidential abortion care services with complete care kits. Professional support 
                throughout your journey with privacy and discretion.
              </p>
              <Link 
                to="/abortion-care" 
                className="btn btn-secondary" 
                style={{ width: '100%', textAlign: 'center' }}
              >
                Learn More
              </Link>
            </div>

            <div className="card animate-fade-in-up animate-delay-3" style={{ 
              border: '2px solid var(--primary-blue)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                fontSize: '3rem', 
                marginBottom: '1rem',
                textAlign: 'center'
              }}>💉</div>
              <h3 style={{ 
                marginBottom: '1rem', 
                color: 'var(--primary-blue)',
                textAlign: 'center'
              }}>
                Medications & Antibiotics
              </h3>
              <p style={{ 
                marginBottom: '1.5rem', 
                color: 'var(--text-gray)',
                lineHeight: '1.6',
                textAlign: 'center'
              }}>
                Professional-grade antibiotics and medications including Amoxicillin, Cipro, Doxycycline, 
                and more. All require professional consultation.
              </p>
              <Link 
                to="/products" 
                className="btn btn-outline" 
                style={{ width: '100%', textAlign: 'center' }}
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Confidentiality Section */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div className="card" style={{ 
              backgroundColor: 'var(--white)',
              padding: '3rem',
              textAlign: 'center'
            }}>
              <h2 style={{ 
                fontSize: '2.25rem',
                color: 'var(--primary-blue)',
                marginBottom: '1.5rem'
              }}>
                Your Privacy Matters
              </h2>
              <p style={{ 
                fontSize: '1.125rem', 
                color: 'var(--text-gray)',
                lineHeight: '1.8',
                marginBottom: '2rem'
              }}>
                At SafeChoice Medical, we understand that your health decisions are deeply personal. 
                That's why we've built our entire service around your privacy and confidentiality. 
                Every consultation, every interaction, and every delivery is handled with the utmost 
                discretion and respect for your privacy.
              </p>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '1.5rem',
                marginTop: '2rem'
              }}>
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔒</div>
                  <p style={{ fontWeight: '600', color: 'var(--text-dark)' }}>Secure Data</p>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📦</div>
                  <p style={{ fontWeight: '600', color: 'var(--text-dark)' }}>Discreet Packaging</p>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤐</div>
                  <p style={{ fontWeight: '600', color: 'var(--text-dark)' }}>Confidential Service</p>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
                  <p style={{ fontWeight: '600', color: 'var(--text-dark)' }}>No Third Parties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, var(--primary-blue), var(--accent-green))',
            padding: '4rem 2rem',
            textAlign: 'center',
            color: 'var(--white)'
          }}>
            <h2 style={{ 
              fontSize: '2.5rem',
              marginBottom: '1rem',
              color: 'var(--white)'
            }}>
              Ready to Get Started?
            </h2>
            <p style={{ 
              fontSize: '1.25rem', 
              marginBottom: '2rem',
              color: 'var(--white)',
              opacity: 0.95
            }}>
              Request a confidential consultation today. Our professional team is here to support you 
              every step of the way.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center', 
              flexWrap: 'wrap' 
            }}>
              <Link 
                to="/consultation" 
                className="btn" 
                style={{ 
                  backgroundColor: 'var(--white)',
                  color: 'var(--primary-blue)',
                  fontSize: '1.125rem',
                  padding: '1rem 2.5rem',
                  fontWeight: '600'
                }}
              >
                Request Consultation
              </Link>
              <Link 
                to="/products" 
                className="btn" 
                style={{ 
                  backgroundColor: 'transparent',
                  color: 'var(--white)',
                  border: '2px solid var(--white)',
                  fontSize: '1.125rem',
                  padding: '1rem 2.5rem',
                  fontWeight: '600'
                }}
              >
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Assurance Section */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ 
              fontSize: '2rem',
              color: 'var(--primary-blue)',
              marginBottom: '1.5rem'
            }}>
              Professional Healthcare Support
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              color: 'var(--text-gray)',
              lineHeight: '1.8',
              marginBottom: '2rem'
            }}>
              SafeChoice Medical offers confidential consultations and access to healthcare products 
              through a secure, privacy-first platform. We understand that your health decisions are 
              personal, and we're here to support you with discretion and professionalism.
            </p>
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: 'var(--light-green)', 
              borderRadius: '8px',
              borderLeft: '4px solid var(--accent-green)'
            }}>
              <p style={{ 
                margin: 0, 
                fontSize: '0.9375rem', 
                color: 'var(--text-gray)',
                fontStyle: 'italic',
                lineHeight: '1.8'
              }}>
                <strong>Important:</strong> This website does not provide medical advice. All services require 
                professional consultation. Our team will guide you through the consultation process and ensure 
                you receive appropriate care and support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
