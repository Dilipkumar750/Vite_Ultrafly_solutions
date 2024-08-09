import { NavLink } from 'react-router-dom';
import { useState } from 'react'; 
import logo from "../assets/ultrafly/ultraflysolutionslog.png"

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
export default Navbar