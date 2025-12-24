import { useState, useEffect } from 'react'

function ConsultationForm() {
  const [formData, setFormData] = useState({
    productInterest: '',
    reason: '',
    timeframe: '',
    cycleInfo: '',
    responseTime: ''
  })

  // Pre-fill product if coming from Products page
  useEffect(() => {
    const selectedProduct = sessionStorage.getItem('selectedProduct')
    if (selectedProduct) {
      setFormData(prev => ({
        ...prev,
        productInterest: selectedProduct
      }))
      // Clear the stored product after using it
      sessionStorage.removeItem('selectedProduct')
    }
  }, [])

  const whatsappNumber = "97474419065" // WhatsApp number (without +)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Build WhatsApp message
    let message = "Hello, I would like to request a consultation.\n\n"
    
    if (formData.productInterest) {
      message += `Product of Interest: ${formData.productInterest}\n`
    }
    
    if (formData.reason) {
      message += `Reason: ${formData.reason}\n`
    }
    
    if (formData.timeframe) {
      message += `Timeframe: ${formData.timeframe}\n`
    }
    
    if (formData.cycleInfo) {
      message += `Cycle Information: ${formData.cycleInfo}\n`
    }
    
    if (formData.responseTime) {
      message += `Preferred Response Time: ${formData.responseTime}\n`
    }

    message += "\nI look forward to hearing from you."

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message)

    // Redirect to WhatsApp
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
  }

  return (
    <div>
      {/* Banner Section */}
      <div 
        className="page-banner"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=600&fit=crop)'
        }}
      >
        <div className="page-banner-content">
          <h1>Request Consultation</h1>
          <p>Complete this form to request a confidential consultation. Your privacy is protected.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: 'var(--soft-blue)', 
              borderRadius: '8px',
              marginBottom: '2rem',
              borderLeft: '4px solid var(--primary-blue)' 
            }}>
              <p style={{ 
                margin: 0, 
                fontSize: '0.875rem', 
                color: 'var(--text-gray)' 
              }}>
                <strong>Privacy Notice:</strong> This form does not collect personal identifying 
                information. All information is sent directly to our consultation team via WhatsApp 
                for your privacy and security.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="card">
              <div className="form-group">
                <label htmlFor="productInterest" className="form-label">
                  Product of Interest
                </label>
                <select
                  id="productInterest"
                  name="productInterest"
                  className="form-select"
                  value={formData.productInterest}
                  onChange={handleChange}
                  required
                >
                  <option value="">Please select...</option>
                  <optgroup label="Family Planning">
                    <option value="Sayana Press - Family Planning (3 Months)">Sayana Press - Family Planning (3 Months)</option>
                    <option value="Lydia - Emergency Contraceptive">Lydia - Emergency Contraceptive</option>
                    <option value="P2 - Contraceptive Pill">P2 - Contraceptive Pill</option>
                    <option value="Backup - Emergency Contraceptive">Backup - Emergency Contraceptive</option>
                    <option value="Family Planning - One Month Supply">Family Planning - One Month Supply</option>
                  </optgroup>
                  <optgroup label="Women's Health">
                    <option value="Cytotec - Women's Health Medication">Cytotec - Women's Health Medication</option>
                    <option value="Ma Care - Women's Wellness Support">Ma Care - Women's Wellness Support</option>
                  </optgroup>
                  <optgroup label="Antibiotics">
                    <option value="Ampiclox - Broad-Spectrum Antibiotic">Ampiclox - Broad-Spectrum Antibiotic</option>
                    <option value="Amoxicillin - Penicillin Antibiotic">Amoxicillin - Penicillin Antibiotic</option>
                    <option value="Ciprofloxacin (Cipro) - Fluoroquinolone Antibiotic">Ciprofloxacin (Cipro) - Fluoroquinolone Antibiotic</option>
                    <option value="Doxycycline - Tetracycline Antibiotic">Doxycycline - Tetracycline Antibiotic</option>
                    <option value="Metronidazole (Metro) - Antibiotic & Antiprotozoal">Metronidazole (Metro) - Antibiotic & Antiprotozoal</option>
                    <option value="Cefixime - Cephalosporin Antibiotic">Cefixime - Cephalosporin Antibiotic</option>
                  </optgroup>
                  <optgroup label="Pain Relief">
                    <option value="Diclofenac - NSAID Pain Reliever">Diclofenac - NSAID Pain Reliever</option>
                  </optgroup>
                  <optgroup label="Men's Health">
                    <option value="Viagra - Erectile Dysfunction Treatment">Viagra - Erectile Dysfunction Treatment</option>
                  </optgroup>
                  <optgroup label="Abortion Care Kits">
                    <option value="Complete Care Kit - Standard">Complete Care Kit - Standard</option>
                    <option value="Complete Care Kit - Premium">Complete Care Kit - Premium</option>
                    <option value="Essential Care Kit">Essential Care Kit</option>
                  </optgroup>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="reason" className="form-label">
                  Reason for Request
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  className="form-textarea"
                  value={formData.reason}
                  onChange={handleChange}
                  placeholder="Please provide a brief reason for your consultation request..."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="timeframe" className="form-label">
                  Timeframe
                </label>
                <select
                  id="timeframe"
                  name="timeframe"
                  className="form-select"
                  value={formData.timeframe}
                  onChange={handleChange}
                  required
                >
                  <option value="">Please select...</option>
                  <option value="Urgent - Within 24 hours">Urgent - Within 24 hours</option>
                  <option value="Soon - Within 3-5 days">Soon - Within 3-5 days</option>
                  <option value="Flexible - Within 1-2 weeks">Flexible - Within 1-2 weeks</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="cycleInfo" className="form-label">
                  Period/Cycle Information (Optional)
                </label>
                <input
                  type="text"
                  id="cycleInfo"
                  name="cycleInfo"
                  className="form-input"
                  value={formData.cycleInfo}
                  onChange={handleChange}
                  placeholder="Optional: Last period date or cycle information"
                />
              </div>

              <div className="form-group">
                <label htmlFor="responseTime" className="form-label">
                  Preferred Response Time
                </label>
                <select
                  id="responseTime"
                  name="responseTime"
                  className="form-select"
                  value={formData.responseTime}
                  onChange={handleChange}
                  required
                >
                  <option value="">Please select...</option>
                  <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 5 PM)">Afternoon (12 PM - 5 PM)</option>
                  <option value="Evening (5 PM - 8 PM)">Evening (5 PM - 8 PM)</option>
                  <option value="Any time">Any time</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Submit & Continue to WhatsApp
              </button>
            </form>

            <div style={{ 
              marginTop: '2rem',
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
                <strong>What happens next?</strong> After submitting this form, you will be redirected 
                to WhatsApp with a pre-filled message. Our team will respond to your consultation 
                request as soon as possible during business hours.
              </p>
            </div>

            <p style={{ 
              marginTop: '2rem', 
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

export default ConsultationForm

