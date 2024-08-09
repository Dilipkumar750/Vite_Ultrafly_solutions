import { useState } from 'react'; 
import TitleBg from "../assets/pricing/titlebg.svg";
import MainButton from "./MainButton";
// import { Helmet, HelmetProvider } from "react-helmet-async";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import bgimg from "../assets/hero/hero-img.webp";
import logo from "../assets/ultrafly/ultraflysolutionslog.png"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
      <a className="text-3xl font-bold leading-none" href="#">
        <img src={logo} alt="" className="h-20" />
      </a>
      <ul className="hidden lg:flex space-x-8 text-black justify-center flex-1 text-lg">
        <li><NavLink to='/about' className="text-gray-700 hover:text-blue-500" >Home</NavLink></li>
        <li><a className="text-gray-700 hover:text-blue-500" href="#About">About Us</a></li>
        <li className="relative">
          <button
            onClick={toggleDropdown}
            aria-expanded={dropdownOpen}
            className="text-gray-700 hover:text-blue-500"
          >
            Our Services  
          </button>
          {dropdownOpen && (
            <ul className="absolute bg-white shadow-lg mt-2 rounded-md z-10">
              <li><a className="block px-2 py-2 text-gray-700 hover:bg-gray-200" href="#service1">Software Development</a></li>
              <li><a className="block px-2 py-2 text-gray-700 hover:bg-gray-200" href="#service2">Mobile App Development</a></li>
              <li><a className="block px-2 py-2 text-gray-700 hover:bg-gray-200" href="#service3">Website Development</a></li>
              <li><a className="block px-2 py-2 text-gray-700 hover:bg-gray-200" href="#service4">SEO & Digital Marketing</a></li>
              <li><a className="block px-2 py-2 text-gray-700 hover:bg-gray-200" href="#service5">IT Staffing</a></li>
              <li><a className="block px-28 py-2 text-gray-700 hover:bg-gray-200" href="#service5"></a></li>
            </ul>
          )}
        </li>
        <li><a className="text-gray-700 hover:text-blue-500" href="#carrier">Carrier</a></li>
        <li><a className="text-gray-700 hover:text-blue-500" href="#portfolio">Portfolio</a></li>
        <li><a className="text-gray-700 hover:text-blue-500" href="#contact">Contact Us</a></li>
      </ul>
      <div className="flex flex-col items-start space-y-2">
        <a href="tel:9150001089" className="text-blue-700 hover:text-blue-1000">91500 01089</a>
        <a href="mailto:info@ultrasolutions.com" className="text-blue-700 hover:text-blue-1000">info@ultrasolutions.com</a>
      </div>
    </nav>
  );
};

function Home() {
  useGSAP(() => {
    gsap.to('#cta', { opacity: 1, y: 0, delay: 1 });
  }, []);

  return (
    <>
        {/* <HelmetProvider>
      <Helmet>
        <title>Ultrafly Solutions | Software Development Company</title>
        <meta
          name="description"
          content="Discover cutting-edge IT solutions with Ultrafly Solutions. From mobile app development to digital marketing, we help your business soar to new heights."
        />
        <meta
          name="keywords"
          content="IT solutions, mobile app development, digital marketing, website development, Ultrafly Solutions"
        />
      </Helmet>
      </HelmetProvider> */}
      <Navbar />
      <div
        className="bg-cover bg-center h-screen relative z-90 bg-gray-600"
        style={{ backgroundImage: `url(${bgimg})` }}
      >
        <section id="home" className="Home-section flex justify-center items-center h-full">
          <div className="flex flex-col text-white gap-10" id="cta">
            <div className="relative mb-3">
              <p className="w-2/5 md:w-80 text-black text-[10px] md:text-[14px] lg:text-[16px] uppercase font-medium z-10 mb-8 text-center absolute mt-2">
                find your energy
              </p>
              <img
                src={TitleBg}
                alt="Ultrafly Solutions Title Background"
                className="w-2/5 md:w-80 absolute title-white"
              />
            </div>
            <h1 className="font-bold text-[16px] md:text-[20px] lg:text-[30px] uppercase">
              Welcome to UltraFly Solutions <br />
              <span className="font-thin">
                Your Partner in Digital Transformation
              </span>
            </h1>
            <MainButton
              color="text-black"
              bg="bg-white"
              text="Contact Us"
              goTo="/contact-us"
              width="w-40"
            />
          </div>
        </section>
      </div>
      </>

  );
}

export default Home;
