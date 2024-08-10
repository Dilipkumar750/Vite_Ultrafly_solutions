import { useState } from "react";
import NavList from "./NavList";
import { Link } from "react-router-dom";
import logo from "../assets/ultrafly/ultraflysolutionslog.png";
import { motion, useScroll } from "framer-motion";
import icon from "../assets/our_services/mobileImgs/mobile-service.png";
import icon1 from "../assets/our_services/websiteImg/coding.png";
import icon2 from "../assets/our_services/seo&digital/digital-marketing.png";
import icon3 from "../assets/our_services/websiteImg/expert.png";
import icon0 from "../assets/our_services/websiteImg/software.png";
import "rc-dropdown/assets/index.css";
import Dropdown from "rc-dropdown";
import down_arrow from "../assets/hero/down-arrow.png";
import up_arrow from "../assets/hero/navigate-up-arrow.png";
import '../index.css'


function Navbar() {
  const { scrollYProgress } = useScroll();
  // const [spin, setSpin] = useState(false);
  const [sticky, setSticky] = useState(false);
  // const [sidebar, setSideBar] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  // drop down
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (visible) => {
    setVisible(visible);
  };

  // const joinSpin = () => {
  //   setSpin(true);
  // };

  // const stopSpin = () => {
  //   setSpin(false);
  // };

  // sticky navbar - bg black
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);


  // sidebar
  // const sideBar = () => {
  //   setSideBar(!sidebar);
  // };

  // hamburger menu
  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  // service drop down
  const menu = (
    <ul className=" mt-8 grid grid-flow-row gap-8 md:gap-12 right-0 md:right-10 bg-white ">
      <li onClick={hamburgerMenu} className=" text-[1rem] lg:text-2xl" key="1">
        <Link to="/software-development" className="flex gap-3">
          <img
            src={icon0}
            className="w-5 h-5 md:w-8 md:h-8"
            alt="software developer"
          />
          Software Development
        </Link>
      </li>
      <li onClick={hamburgerMenu} className=" text-[1rem] lg:text-2xl" key="2">
        <Link to="/mobile-app-development" className="flex gap-3">
          <img
            src={icon}
            className="w-5 h-5 md:w-8 md:h-8"
            alt="Mobile App Development Services"
          />
          Mobile App Development
        </Link>
      </li>
      <li onClick={hamburgerMenu} className=" text-[1rem] lg:text-2xl" key="3">
        <Link to="/website-development-company" className="flex gap-3">
          <img
            src={icon1}
            className="w-5 h-5 md:w-8 md:h-8"
            alt="Professional Website Development"
          />
          Website Development
        </Link>
      </li>
      <li onClick={hamburgerMenu} className=" text-[1rem] lg:text-2xl" key="4">
        <Link to="/digital-marketing-company" className="flex gap-3">
          <img
            src={icon2}
            className="w-5 h-5 md:w-8 md:h-8"
            alt="SEO and Digital Marketing Services"
          />
          Seo & Digital Marketing
        </Link>
      </li>
      {/* <li onClick={hamburgerMenu} className=" text-[1rem] lg:text-2xl" key="5">
        <Link to="digital">Digital Marketing</Link>
      </li> */}
      <li onClick={hamburgerMenu} className=" text-[1rem] lg:text-2xl" key="6">
        <Link to="/it-staffing" className="flex gap-3">
          <img
            src={icon3}
            className="w-5 h-5 md:w-8 md:h-8"
            alt="Expert IT Staffing Solutions"
          />{" "}
          IT Staffing
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      <nav
        className={`flex flex-row  items-center justify-between px-4 py-3  md:px-12 fixed bg-white top-0 left-0 right-0 w-full z-50 ${
          sticky ? "shadow-xl !bg-white" : ""
        }`}
      >
        {/* logo */}
        <a href="https://ultraflysolutions.com/">
          <img
            src={logo}
            alt="ultraflysolutions pvt ltd"
            className=" w-20 md:w-[150px]"
          />
        </a>
        <div className="navlist-nav">
          <NavList />
        </div>
        <div className="flex items-center gap-10">
          <div className="flex gap-10">
            {/* mobile menu -------------- */}

            {/* hamburger menu */}
            <div
              className={`flex top-0 flex-col fixed w-full left-0 h-screen bg-white z-[9999999999] py-[60px] px-[40px] ease-in-out duration-500  ${
                hamburger ? 'block' : "hidden text-red"
              }`}
            >
              <i
                onClick={hamburgerMenu}
                className="fa-solid fa-xmark text-[#03a4ed] text-4xl cursor-pointer self-end"
              ></i>

              {/* links */}
              <ul className="text-center flex flex-col gap-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <li onClick={hamburgerMenu}>
                  <Link
                    className=" text-[1rem] lg:text-[2rem] font-medium hover:text-[#03a4ed] ease-in duration-200"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    className=" text-[1rem] lg:text-[2rem] font-medium hover:text-[#03a4ed] ease-in duration-200"
                    to="/about-us"
                  >
                    About
                  </Link>
                </li>
                <li
                  // onClick={hamburgerMenu}
                  className=" text-[1rem] lg:text-[2rem] font-medium hover:text-[#03a4ed] ease-in duration-200 "
                >
                  <Dropdown
                    trigger={["click"]}
                    overlay={menu}
                    animation="slide-up"
                    onVisibleChange={handleVisibleChange}
                  >
                    <button
                      type="button"
                      className=" text-[1rem] lg:text-[2rem] font-medium hover:text-[#03a4ed] ease-in duration-200 flex gap-3"
                    >
                      Our Services
                      {visible ? (
                        <img src={up_arrow} className="pt-[5px]" />
                      ) : (
                        <img src={down_arrow} className="pt-[5px]" />
                      )}
                    </button>
                  </Dropdown>
                </li>
                <li onClick={hamburgerMenu}>
                  <Link
                    className=" text-[1rem] lg:text-[2rem] font-medium hover:text-[#03a4ed] ease-in duration-200"
                    to="/careers"
                  >
                    Careers
                  </Link>
                </li>
                {/* <li onClick={hamburgerMenu}>
                  <Link
                    className=" text-[1rem] lg:text-[2rem] font-medium hover:text-[#03a4ed] ease-in duration-200"
                    to="/gallery/page-1"
                  >
                    Gallery
                  </Link>
                </li>  */}

                <li onClick={hamburgerMenu}>
                  <Link
                    className=" text-[1rem] lg:text-[2rem] font-medium hover:text-[#03a4ed] ease-in duration-200"
                    to="/contact-us"
                  >
                    Contact
                  </Link>
                </li>
                {/* <li
                  onClick={hamburgerMenu}
                  className=" text-[1rem] lg:text-[2rem] font-medium hover:text-[#03a4ed] ease-in duration-200"
                >
                  <Link to="/blog">Blog</Link>
                </li> */}

                <li onClick={hamburgerMenu}>
                  <Link
                    className=" text-[1rem] lg:text-[2rem] font-medium hover:text-[#03a4ed] ease-in duration-200"
                    to="/portfolio"
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>

         

            {/* hamburger */}
          </div>
          {/* spin box */}
          <div className=" text-[9px] md:text-[14px] font-bold text-blue-500 p-2 text-end ">
            <ul className="list-none">
              <li>
                <a href="">
                  <i className="fa-solid fa-phone"></i> +91 91500 01089


                </a>
              </li>
              <li>
                <a href="mailto:hr@ultraflysolutions.com">
                  <i className="fa-solid fa-envelope"></i> info@ultraflysolutions.com
                </a>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
          <i
            onClick={hamburgerMenu}
            className={` fa-bars navbtn fa-solid  text-[#03a4ed] text-2xl cursor-pointer hover:text-[#FF0336] ease-in duration-200 ${hamburger?'left-0':'-left-full'}`}
          ></i>

          </div>
        </div>
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 "
          style={{ scaleX: scrollYProgress , background: 'linear-gradient(90deg, rgb(3, 168, 255) 0%, rgb(3, 140, 255) 49%, rgb(3, 110, 255) 100%)',
            transformOrigin: '0%'}}
          
        />
      </nav>
    </>
  );
}

export default Navbar;
