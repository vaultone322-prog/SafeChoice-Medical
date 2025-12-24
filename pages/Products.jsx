import { Link } from 'react-router-dom'
import { useState } from 'react'

function Products() {
  const [hoveredProduct, setHoveredProduct] = useState(null)

  // Helper function to generate image URL from local images folder
  // Place your product images in /public/images/ folder with these exact filenames:
  // sayana-press.jpg, lydia.jpg, p2.jpg, backup.jpg, family-planning.jpg, cytotec.jpg,
  // ma-care.jpg, ampiclox.jpg, amoxicillin.jpg, cipro.jpg, doxycycline.jpg, metro.jpg,
  // cefixime.jpg, diclofenac.jpg, viagra.jpg, complete-care-kit-standard.jpg,
  // complete-care-kit-premium.jpg, essential-care-kit.jpg
  const getProductImage = (productName, category) => {
    const imageMap = {
      'Sayana Press': '/images/sayana-press.jpg',
      'Lydia': '/images/lydia.jpg',
      'P2': '/images/p2.jpg',
      'Backup': '/images/backup.jpg',
      'Family Planning': '/images/family-planning.jpg',
      'Cytotec': '/images/cytotec.jpg',
      'Ma Care': '/images/ma-care.jpg',
      'Ampiclox': '/images/ampiclox.jpg',
      'Amoxicillin': '/images/amoxicillin.jpg',
      'Ciprofloxacin (Cipro)': '/images/cipro.jpg',
      'Doxycycline': '/images/doxycycline.jpg',
      'Metronidazole (Metro)': '/images/metro.jpg',
      'Cefixime': '/images/cefixime.jpg',
      'Diclofenac': '/images/diclofenac.jpg',
      'Viagra': '/images/viagra.jpg',
      'Complete Care Kit - Standard': '/images/complete-care-kit-standard.jpg',
      'Complete Care Kit - Premium': '/images/complete-care-kit-premium.jpg',
      'Essential Care Kit': '/images/essential-care-kit.jpg'
    }
    
    // Return mapped image or fallback placeholder
    return imageMap[productName] || '/images/placeholder.jpg'
  }

  const products = [
    {
      category: "Family Planning",
      icon: "💊",
      description: "Reliable contraceptive options for your family planning needs",
      items: [
        {
          name: "Sayana Press",
          subtitle: "Family Planning (3 Months)",
          description: "Long-acting injectable contraceptive providing 3 months of protection. Professional consultation required.",
          image: getProductImage("Sayana Press", "Family Planning"),
          badge: "3 Months"
        },
        {
          name: "Lydia",
          subtitle: "Emergency Contraceptive",
          description: "Emergency contraceptive pill for unplanned situations. Available with professional guidance.",
          image: getProductImage("Lydia", "Family Planning"),
          badge: "Emergency"
        },
        {
          name: "P2",
          subtitle: "Contraceptive Pill",
          description: "Oral contraceptive option. Consultation required to determine suitability.",
          image: getProductImage("P2", "Family Planning"),
          badge: "Oral"
        },
        {
          name: "Backup",
          subtitle: "Emergency Contraceptive",
          description: "Emergency backup contraceptive option. Professional consultation recommended.",
          image: getProductImage("Backup", "Family Planning"),
          badge: "Backup"
        },
        {
          name: "Family Planning",
          subtitle: "One Month Supply",
          description: "Monthly contraceptive supply. Consultation required for appropriate selection.",
          image: getProductImage("Family Planning", "Family Planning"),
          badge: "1 Month"
        }
      ]
    },
    {
      category: "Women's Health",
      icon: "🌸",
      description: "Specialized care for women's health and wellness",
      items: [
        {
          name: "Cytotec",
          subtitle: "Women's Health Medication",
          description: "Prescription medication for women's health conditions. Requires professional consultation and prescription.",
          image: getProductImage("Cytotec", "Women's Health"),
          badge: "Prescription"
        },
        {
          name: "Ma Care",
          subtitle: "Women's Wellness Support",
          description: "Comprehensive women's health and wellness support. Available through consultation.",
          image: getProductImage("Ma Care", "Women's Health"),
          badge: "Wellness"
        }
      ]
    },
    {
      category: "Antibiotics",
      icon: "💉",
      description: "Professional-grade antibiotics for various infections",
      items: [
        {
          name: "Ampiclox",
          subtitle: "Broad-Spectrum Antibiotic",
          description: "Antibiotic for bacterial infections. Prescription and professional consultation required.",
          image: getProductImage("Ampiclox", "Antibiotics"),
          badge: "Prescription"
        },
        {
          name: "Amoxicillin",
          subtitle: "Penicillin Antibiotic",
          description: "Commonly prescribed antibiotic for various infections. Requires medical consultation.",
          image: getProductImage("Amoxicillin", "Antibiotics"),
          badge: "Prescription"
        },
        {
          name: "Ciprofloxacin (Cipro)",
          subtitle: "Fluoroquinolone Antibiotic",
          description: "Powerful antibiotic for serious bacterial infections. Medical consultation essential.",
          image: getProductImage("Ciprofloxacin (Cipro)", "Antibiotics"),
          badge: "Prescription"
        },
        {
          name: "Doxycycline",
          subtitle: "Tetracycline Antibiotic",
          description: "Antibiotic for various bacterial infections. Professional assessment required.",
          image: getProductImage("Doxycycline", "Antibiotics"),
          badge: "Prescription"
        },
        {
          name: "Metronidazole (Metro)",
          subtitle: "Antibiotic & Antiprotozoal",
          description: "Medication for bacterial and parasitic infections. Consultation required.",
          image: getProductImage("Metronidazole (Metro)", "Antibiotics"),
          badge: "Prescription"
        },
        {
          name: "Cefixime",
          subtitle: "Cephalosporin Antibiotic",
          description: "Third-generation antibiotic for various infections. Medical consultation necessary.",
          image: getProductImage("Cefixime", "Antibiotics"),
          badge: "Prescription"
        }
      ]
    },
    {
      category: "Pain Relief",
      icon: "🩹",
      description: "Effective pain management solutions",
      items: [
        {
          name: "Diclofenac",
          subtitle: "NSAID Pain Reliever",
          description: "Non-steroidal anti-inflammatory drug for pain and inflammation. Professional consultation recommended.",
          image: getProductImage("Diclofenac", "Pain Relief"),
          badge: "Pain Relief"
        }
      ]
    },
    {
      category: "Men's Health",
      icon: "💙",
      description: "Discrete solutions for men's health needs",
      items: [
        {
          name: "Viagra",
          subtitle: "Erectile Dysfunction Treatment",
          description: "Prescription medication for erectile dysfunction. Requires professional consultation and prescription.",
          image: getProductImage("Viagra", "Men's Health"),
          badge: "Prescription"
        }
      ]
    },
    {
      category: "Abortion Care Kits",
      icon: "🩺",
      description: "Complete, comprehensive care packages with professional support",
      items: [
        {
          name: "Complete Care Kit - Standard",
          subtitle: "Comprehensive Support Package",
          description: "Complete care package including medication, pain relief, antibiotics, and follow-up support. Includes professional consultation.",
          image: getProductImage("Complete Care Kit - Standard", "Abortion Care Kits"),
          badge: "Complete Kit",
          featured: true
        },
        {
          name: "Complete Care Kit - Premium",
          subtitle: "Enhanced Support Package",
          description: "Premium care package with all essentials plus additional support medications and extended consultation support.",
          image: getProductImage("Complete Care Kit - Premium", "Abortion Care Kits"),
          badge: "Premium",
          featured: true
        },
        {
          name: "Essential Care Kit",
          subtitle: "Basic Support Package",
          description: "Essential care package with core medications and professional guidance. Consultation included.",
          image: getProductImage("Essential Care Kit", "Abortion Care Kits"),
          badge: "Essential"
        }
      ]
    }
  ]

  const handleGetQuote = (productName) => {
    // Store product name for consultation form
    sessionStorage.setItem('selectedProduct', productName)
  }

  return (
    <div>
      {/* Banner Section */}
      <div 
        className="page-banner"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&h=600&fit=crop)'
        }}
      >
        <div className="page-banner-content">
          <h1>Our Medical Products</h1>
          <p>Professional-grade medications and care packages for your health needs</p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="section section-alt" style={{ 
        background: 'linear-gradient(135deg, var(--soft-blue) 0%, var(--light-green) 100%)',
        position: 'relative',
        overflow: 'hidden',
        padding: '3rem 0'
      }}>
        <div className="container">
          <div className="text-center mb-3 animate-fade-in-up">
            <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem', color: 'var(--text-gray)' }}>
              Professional-grade medications and care packages. All products require consultation 
              to ensure safe and appropriate use for your individual needs.
            </p>
            
            {/* Trust Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
              <div className="trust-badge animate-delay-1 animate-fade-in-up">
                <span>🔒</span> Confidential
              </div>
              <div className="trust-badge animate-delay-2 animate-fade-in-up">
                <span>✅</span> Professional Consultation
              </div>
              <div className="trust-badge animate-delay-3 animate-fade-in-up">
                <span>🩺</span> Medical Guidance
              </div>
              <div className="trust-badge animate-delay-1 animate-fade-in-up">
                <span>📦</span> Discreet Packaging
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products by Category */}
      <section className="section">
        <div className="container">
          {products.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              style={{ 
                marginBottom: '4rem',
                animationDelay: `${categoryIndex * 0.1}s`
              }}
              className="animate-fade-in-up"
            >
              <div className="category-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '2.5rem' }}>{category.icon}</span>
                  <h2 style={{ 
                    margin: 0, 
                    color: 'var(--primary-blue)',
                    fontSize: '2.25rem'
                  }}>
                    {category.category}
                  </h2>
                </div>
                <p style={{ 
                  color: 'var(--text-gray)', 
                  fontSize: '1.125rem',
                  margin: 0,
                  paddingLeft: '3.5rem'
                }}>
                  {category.description}
                </p>
              </div>

              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
                gap: '2rem' 
              }}>
                {category.items.map((product, productIndex) => (
                  <div
                    key={productIndex}
                    className="product-card"
                    style={{
                      animationDelay: `${(categoryIndex * 0.1) + (productIndex * 0.05)}s`,
                      border: product.featured ? '2px solid var(--accent-green)' : 'none'
                    }}
                    onMouseEnter={() => setHoveredProduct(`${categoryIndex}-${productIndex}`)}
                    onMouseLeave={() => setHoveredProduct(null)}
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
                        to="/consultation" 
                        className="btn btn-primary" 
                        style={{ 
                          width: '100%',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                        onClick={() => handleGetQuote(product.name)}
                      >
                        <span style={{ position: 'relative', zIndex: 1 }}>
                          Get Quote
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Trust Section */}
          <div className="trust-section animate-fade-in-up" style={{ marginTop: '5rem' }}>
            <div className="text-center" style={{ marginBottom: '3rem' }}>
              <h2 style={{ 
                marginBottom: '0.75rem', 
                color: 'var(--primary-blue)', 
                fontSize: '2.5rem',
                fontWeight: '700',
                background: 'linear-gradient(135deg, var(--primary-blue), var(--accent-green))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Why Choose SafeChoice Medical?
              </h2>
              <p style={{ 
                fontSize: '1.125rem', 
                color: 'var(--text-gray)',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Your trusted partner for confidential, professional healthcare support
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '2rem',
              marginBottom: '3rem'
            }}>
              <div className="trust-feature-card animate-delay-1 animate-fade-in-up">
                <div className="trust-icon-wrapper">
                  <div className="trust-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 7C13.4 7 14.8 7.56 15.7 8.3L16.7 7.3C15.5 6.5 13.8 6 12 6C10.2 6 8.5 6.5 7.3 7.3L8.3 8.3C9.2 7.56 10.6 7 12 7ZM12 9C11.5 9 11 9.19 10.61 9.5C10.22 9.81 10 10.19 10 10.5C10 10.81 10.22 11.19 10.61 11.5C11 11.81 11.5 12 12 12C12.5 12 13 11.81 13.39 11.5C13.78 11.19 14 10.81 14 10.5C14 10.19 13.78 9.81 13.39 9.5C13 9.19 12.5 9 12 9ZM6 9.94L7 10.94C7.5 10.5 8.2 10.2 9 10.2C9.8 10.2 10.5 10.5 11 10.94L12 9.94C11.2 9.14 10.1 8.7 9 8.7C7.9 8.7 6.8 9.14 6 9.94ZM18 9.94C17.2 9.14 16.1 8.7 15 8.7C13.9 8.7 12.8 9.14 12 9.94L13 10.94C13.5 10.5 14.2 10.2 15 10.2C15.8 10.2 16.5 10.5 17 10.94L18 9.94Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>
                <h3 className="trust-feature-title">Complete Privacy</h3>
                <p className="trust-feature-description">
                  Your information is handled with absolute confidentiality. We never share your details with third parties.
                </p>
              </div>

              <div className="trust-feature-card animate-delay-2 animate-fade-in-up">
                <div className="trust-icon-wrapper">
                  <div className="trust-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 2V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="trust-feature-title">Professional Guidance</h3>
                <p className="trust-feature-description">
                  All products require professional consultation for safety. Our qualified team ensures appropriate care.
                </p>
              </div>

              <div className="trust-feature-card animate-delay-3 animate-fade-in-up">
                <div className="trust-icon-wrapper">
                  <div className="trust-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3.27 6.96L12 12.01L20.73 6.96" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="trust-feature-title">Discreet Service</h3>
                <p className="trust-feature-description">
                  Professional packaging and delivery designed for your privacy. Your order arrives securely and discreetly.
                </p>
              </div>

              <div className="trust-feature-card animate-delay-1 animate-fade-in-up">
                <div className="trust-icon-wrapper">
                  <div className="trust-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <h3 className="trust-feature-title">Quality Assured</h3>
                <p className="trust-feature-description">
                  Professional-grade medications from trusted sources. We ensure quality and authenticity in every product.
                </p>
              </div>
            </div>

            <div className="text-center" style={{ marginTop: '2rem' }}>
              <Link 
                to="/consultation" 
                className="btn btn-secondary" 
                style={{ 
                  fontSize: '1.125rem', 
                  padding: '1rem 3rem',
                  boxShadow: '0 4px 12px rgba(74, 155, 142, 0.3)',
                  fontWeight: '600'
                }}
              >
                Request Consultation
              </Link>
            </div>
          </div>

          <p style={{ 
            marginTop: '3rem', 
            fontSize: '0.875rem', 
            color: 'var(--text-gray)', 
            fontStyle: 'italic',
            textAlign: 'center',
            padding: '1.5rem',
            backgroundColor: 'var(--light-green)',
            borderRadius: '8px',
            borderLeft: '4px solid var(--accent-green)'
          }}>
            <strong>Important:</strong> This website does not provide medical advice. All products require professional 
            consultation and prescription where applicable. We prioritize your safety and well-being above all else.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Products
