import Footer from "./component/Layout/Footer"
import Navbar from "./component/Layout/Navbar"
import Dashboard from "./pages/admin/Dashboard"
import Contact from "./pages/Contact/contact"
import Hero from "./pages/Hero/hero"
import Testimonial from "./pages/Testimonial/testimonial"

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Testimonial/>
    <Contact/>
    <Dashboard/>
    <Footer/>
    </>
  )
}

export default App
