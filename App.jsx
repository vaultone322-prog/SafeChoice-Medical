import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import AbortionCare from './pages/AbortionCare'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import ConsultationForm from './pages/ConsultationForm'

function App() {
  return (
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
  )
}

export default App

