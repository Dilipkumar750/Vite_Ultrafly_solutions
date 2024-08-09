import React from 'react';
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Ensure this path is correct
import MainButton from './pages/MainButton'; // Ensure this path is correct
import About from "./pages/About";
import Contact from './pages/ContactUs';
import Footer from './Components/Footer'

const App = () => {
  return (
      <>
      ,
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      {/* Uncomment this route if you have a separate button page */}
      {/* <Route path='/button' element={<MainButton />} /> */}
    </Routes>
  <Footer />
    </>
  );
}

export default App;
