function AboutUs() {
  return (
    <div>
      {/* Banner Section */}
      <div 
        className="page-banner"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=1920&h=600&fit=crop)'
        }}
      >
        <div className="page-banner-content">
          <h1>About SafeChoice Medical</h1>
          <p>Providing ethical, confidential healthcare support with respect and discretion</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ marginBottom: '3rem' }}>
              <h2>Our Mission</h2>
              <p>
                SafeChoice Medical is committed to providing confidential, professional healthcare 
                support with the highest standards of ethics and respect. We believe that every 
                individual deserves access to compassionate, non-judgmental care in a safe and 
                understanding environment.
              </p>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <h2>Privacy-First Approach</h2>
              <p>
                Your privacy is fundamental to everything we do. We operate with complete discretion, 
                ensuring that your personal information and health decisions remain confidential. Our 
                privacy-first approach means you can seek support with confidence, knowing that your 
                information is protected and never shared without your explicit consent.
              </p>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <h2>Ethical Care</h2>
              <p>
                We are dedicated to providing ethical healthcare services that respect your autonomy 
                and dignity. Our team follows strict ethical guidelines and prioritizes your well-being 
                in every interaction. We believe in informed decision-making and provide the support 
                and information you need to make choices that are right for you.
              </p>
            </div>

            <div style={{ marginBottom: '3rem' }}>
              <h2>Respect & Discretion</h2>
              <p>
                Every interaction with SafeChoice Medical is conducted with respect and discretion. 
                We understand that health decisions are deeply personal, and we provide a supportive, 
                non-judgmental environment where you can discuss your needs openly. Our team is trained 
                to listen, understand, and provide compassionate support throughout your journey.
              </p>
            </div>

            <div className="card" style={{ backgroundColor: 'var(--soft-blue)' }}>
              <h3 style={{ marginBottom: '1rem', color: 'var(--primary-blue)' }}>
                Trust & Transparency
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                We believe in building trust through transparency. While we maintain strict confidentiality 
                regarding your personal information, we are transparent about our processes, our commitment 
                to ethical care, and our dedication to your privacy and well-being.
              </p>
              <p style={{ margin: 0 }}>
                If you have questions about our services or approach, we encourage you to reach out 
                through our contact page or request a consultation to learn more.
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

export default AboutUs

