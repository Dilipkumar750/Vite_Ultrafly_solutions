import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Ensure this path is correct
import About from "./pages/About";
import Contact from './pages/ContactUs';
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Software from './pages/our_services_pages/Software';
import Mobile from './pages/our_services_pages/Mobile';
import Website from './pages/our_services_pages/Website';
import Seo from './pages/our_services_pages/Seo';
import ITStaffing from './pages/our_services_pages/ITStaffing';

const App = () => {
  return (
      <>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/software-development" element={<Software />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/website" element={<Website />} />
        <Route path="/seo" element={<Seo />} />
        <Route path="/it-staffing" element={<ITStaffing />} />

      {/* Uncomment this route if you have a separate button page */}
      {/* <Route path='/button' element={<MainButton />} /> */}
    </Routes>
  <Footer />
    </>
  );
}

export default App;
