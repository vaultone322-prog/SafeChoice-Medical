function ContactUs() {
  const whatsappNumber = "97474419065" // WhatsApp number (without +)
  const email = "safechoicemedical@gmail.com"
  const businessHours = "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed"
  const serviceRegion = "We provide services across multiple regions. Contact us to confirm availability in your area."

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello, I would like to inquire about SafeChoice Medical services.")
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  return (
    <div>
      {/* Banner Section */}
      <div 
        className="page-banner"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1920&h=600&fit=crop)'
        }}
      >
        <div className="page-banner-content">
          <h1>Contact Us</h1>
          <p>Get in touch with our team for confidential consultations and support</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem',
              marginBottom: '3rem' 
            }}>
              {/* WhatsApp Contact */}
              <div className="card text-center">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💬</div>
                <h3 style={{ marginBottom: '1rem' }}>WhatsApp</h3>
                <p style={{ marginBottom: '1.5rem', color: 'var(--text-gray)' }}>
                  Contact us directly via WhatsApp for quick and confidential communication.
                </p>
                <button 
                  onClick={handleWhatsAppClick}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Chat on WhatsApp
                </button>
              </div>

              {/* Email Contact */}
              <div className="card text-center">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✉️</div>
                <h3 style={{ marginBottom: '1rem' }}>Email</h3>
                <p style={{ marginBottom: '1.5rem', color: 'var(--text-gray)' }}>
                  Send us an email and we'll respond as soon as possible.
                </p>
                <a 
                  href={`mailto:${email}`}
                  className="btn btn-secondary"
                  style={{ width: '100%', display: 'block' }}
                >
                  Send Email
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="card" style={{ marginBottom: '2rem', backgroundColor: 'var(--soft-blue)' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary-blue)' }}>Business Hours</h3>
              <pre style={{ 
                whiteSpace: 'pre-line', 
                fontFamily: 'inherit', 
                color: 'var(--text-gray)',
                margin: 0 
              }}>
                {businessHours}
              </pre>
            </div>

            {/* Service Region */}
            <div className="card" style={{ marginBottom: '2rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Service Region</h3>
              <p style={{ color: 'var(--text-gray)', margin: 0 }}>
                {serviceRegion}
              </p>
            </div>

            {/* Additional Information */}
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: 'var(--light-green)', 
              borderRadius: '8px',
              borderLeft: '4px solid var(--accent-green)' 
            }}>
              <p style={{ 
                margin: 0, 
                fontSize: '0.875rem', 
                color: 'var(--text-gray)',
                fontStyle: 'italic' 
              }}>
                <strong>Note:</strong> For urgent matters, please use WhatsApp for faster response times. 
                All communications are handled with complete confidentiality.
              </p>
            </div>

            <p style={{ 
              marginTop: '3rem', 
              fontSize: '0.875rem', 
              color: 'var(--text-gray)', 
              fontStyle: 'italic',
              textAlign: 'center' 
            }}>
              This website does not provide medical advice. All services require professional consultation.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs

