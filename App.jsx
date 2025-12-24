import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import SEO from './components/SEO'
import Home from './pages/Home'
import Products from './pages/Products'
import AbortionCare from './pages/AbortionCare'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import ConsultationForm from './pages/ConsultationForm'

function App() {
  const location = useLocation()
  const baseUrl = 'https://safe-choice-medical.netlify.app'

  // SEO configuration for each route
  const seoConfig = {
    '/': {
      title: 'SafeChoice Medical - Confidential Medical Support | Abortion Pills UAE & Qatar',
      description: 'Confidential medical abortion services in UAE and Qatar. Professional abortion pills consultation, Mifepristone, Misoprostol, and complete care packages. Discreet, safe, and professional support.',
      keywords: 'abortion pills UAE, abortion pills Qatar, medical abortion UAE, abortion pills Dubai, abortion pills Abu Dhabi, Mifepristone UAE, Misoprostol Qatar, abortion consultation UAE, safe abortion Qatar, abortion care UAE, abortion pills by post UAE, early medical abortion UAE, abortion services Dubai, confidential abortion Qatar, abortion pills online UAE'
    },
    '/products': {
      title: 'Medical Products & Abortion Pills - SafeChoice Medical UAE & Qatar',
      description: 'Professional medical products including abortion pills, Mifepristone, Misoprostol, family planning, antibiotics, and complete care kits. Available in UAE and Qatar with confidential consultation.',
      keywords: 'abortion pills UAE, Mifepristone Qatar, Misoprostol UAE, Cytotec UAE, abortion pills Dubai, family planning UAE, Sayana Press Qatar, abortion care kit UAE, medical abortion pills Qatar, prescription medication UAE'
    },
    '/abortion-care': {
      title: 'Abortion Pill Services UAE & Qatar | Medical Abortion Consultation',
      description: 'Safe and confidential abortion pill services in UAE and Qatar. Early medical abortion up to 10 weeks. Professional consultation, Mifepristone and Misoprostol treatment. Complete support and aftercare.',
      keywords: 'abortion pill UAE, medical abortion Qatar, abortion pills Dubai, Mifepristone UAE, Misoprostol Qatar, early medical abortion UAE, abortion pill by post Qatar, safe abortion UAE, abortion consultation Dubai, abortion care Qatar, medical termination UAE'
    },
    '/about-us': {
      title: 'About SafeChoice Medical - Confidential Healthcare UAE & Qatar',
      description: 'Learn about SafeChoice Medical - providing confidential, professional healthcare support in UAE and Qatar. Privacy-first approach, ethical care, and respectful service.',
      keywords: 'SafeChoice Medical UAE, medical services Qatar, confidential healthcare UAE, professional medical consultation Qatar, privacy-first medical UAE'
    },
    '/contact-us': {
      title: 'Contact SafeChoice Medical - UAE & Qatar | WhatsApp Consultation',
      description: 'Contact SafeChoice Medical for confidential medical consultations in UAE and Qatar. WhatsApp: +97474419065. Professional, discreet, and supportive healthcare services.',
      keywords: 'contact SafeChoice Medical UAE, medical consultation Qatar, WhatsApp medical UAE, abortion consultation Dubai, medical support Qatar'
    },
    '/consultation': {
      title: 'Request Medical Consultation - SafeChoice Medical UAE & Qatar',
      description: 'Request a confidential medical consultation with SafeChoice Medical. Available in UAE and Qatar. Professional assessment for abortion pills, family planning, and medical services.',
      keywords: 'medical consultation UAE, abortion consultation Qatar, request consultation Dubai, medical assessment UAE, confidential consultation Qatar'
    }
  }

  const currentSEO = seoConfig[location.pathname] || seoConfig['/']

  return (
    <>
      <SEO
        title={currentSEO.title}
        description={currentSEO.description}
        keywords={currentSEO.keywords}
        canonicalUrl={`${baseUrl}${location.pathname}`}
      />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/abortion-care" element={<AbortionCare />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/consultation" element={<ConsultationForm />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App

