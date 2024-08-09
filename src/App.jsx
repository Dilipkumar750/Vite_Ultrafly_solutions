import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/ContactUs';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';

// Lazy loading components
const Schedule = lazy(() => import('./pages/Schedule/Carrers'));
const Monday = lazy(() => import('./Pages/Schedule/Web'));
const Tuesday = lazy(() => import('./Pages/Schedule/App'));
const Wednesday = lazy(() => import('./Pages/Schedule/Seo'));
const Thursday = lazy(() => import('./Pages/Schedule/Digital'));
const Friday = lazy(() => import('./Pages/Schedule/Hr'));
const Saturday = lazy(() => import('./Pages/Schedule/Bd'));
const Sunday = lazy(() => import('./Pages/Schedule/More'));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Schedule />}>
            <Route path="web" element={<Monday />} />
            <Route path="app" element={<Tuesday />} />
            <Route path="seo" element={<Wednesday />} />
            <Route path="digital" element={<Thursday />} />
            <Route path="hr" element={<Friday />} />
            <Route path="business" element={<Saturday />} />
            <Route path="more" element={<Sunday />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
