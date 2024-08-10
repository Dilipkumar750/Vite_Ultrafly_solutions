import { Link } from "react-router-dom";
import Dropdown from "rc-dropdown";
import "rc-dropdown/assets/index.css";
import icon from "../assets/our_services/mobileImgs/mobile-service.png";
import icon1 from "../assets/our_services/websiteImg/coding.png";
import icon2 from "../assets/our_services/seo&digital/digital-marketing.png";
import icon3 from "../assets/our_services/websiteImg/expert.png";
import icon0 from "../assets/our_services/websiteImg/software.png";
import { useState } from "react";
import down_arrow from '../assets/hero/down-arrow.png'
import up_arrow from '../assets/hero/navigate-up-arrow.png'


function NavList() {

  // drop down
  const [visible, setVisible] = useState(false);

  const handleVisibleChange = (visible) => {
    setVisible(visible);
  };
  // dropdown

  const menu = (
    <ul className=" mt-8 text-center grid grid-flow-row gap-4 p-4 bg-white ">
      <li className=" text-xl text-center " key="1">
        <Link to="/software-development" className="flex gap-3">
          <img
            src={icon0}
            className="w-5 h-5 md:w-8 md:h-8"
            alt="software developer"
          />
          Software Development
        </Link>
      </li>
      <hr />
      <li className=" text-xl text-center " key="2">
        <Link to="/mobile" className="flex gap-3">
          <img
            src={icon}
            className="w-5 h-5 md:w-8 md:h-8"
            alt="Mobile App Development Services"
          />
          Mobile App Development
        </Link>
      </li>
      <hr />
      <li className=" text-xl text-center " key="3">
        <Link to="/website" className="flex gap-3">
          <img
            src={icon1}
            className="w-5 h-5 md:w-8 md:h-8"
            alt="Professional Website Development"
          />
          Website Development
        </Link>
      </li>
      <hr />
      <li className=" text-xl text-center " key="4">
        <Link to="/seo" className="flex gap-3">
          <img
            src={icon2}
            className="w-5 h-5 md:w-8 md:h-8"
            alt="icSEO and Digital Marketing Serviceson"
          />
          Seo & Digital Marketing
        </Link>
      </li>
      <hr />
      <li className=" text-xl text-center " key="6">
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
      <ul className="flex gap-9 text- text-[16px] font-medium xl:none">
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link to="/">Home</Link>
        </li>
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link to="/about-us">About Us</Link>
        </li>
        {/* <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link to="/gallery/page-1"></Link>
        </li> */}

        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Dropdown trigger={["click"]} overlay={menu} onVisibleChange={handleVisibleChange} animation="slide-up">
            <button className="flex gap-2" >Our Services{visible ? <img src={up_arrow} className="pt-[5px]" /> : <img src={down_arrow} className="pt-[5px]" />} </button>
          </Dropdown>
          {/* <Link to="services">Our Services</Link> */}
        </li>

        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link to="/careers">Careers</Link>
        </li>

        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link to="/portfolio">Portfolio</Link>
        </li>
        {/* <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link to="/blog">Blog</Link>
        </li> */}
        <li
          style={{ transition: "all 0.3s" }}
          className=" cursor-pointer hover:text-[#ff0336]"
        >
          <Link to={"/contact-us"}>Contact Us</Link>
        </li>
      </ul>
    </>
  );
}

export default NavList;
