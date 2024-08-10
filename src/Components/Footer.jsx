import { Link } from "react-router-dom";
import logo from "../assets/ultrafly/ultraflysolutionslog.png";

function Footer() {
  return (
    <>
      <footer className="bg-white">
        <div className=" page-padding py-[5rem] md:py-[10rem]">
          {/* {/ footer div all /} */}
          <div className="grid  md:grid-cols-4 gap-2 justify-center items-center md:justify-start md:items-start ">
            {/* {/ logo side /} */}
            <div className="flex flex-col gap-6 md:col-span-2 order-last md:order-none">
              <img
                src={logo}
                alt="UltraFly Solutions - Your Partner in Digital Transformation"
                className="w-[18rem]"
              />
              <p className="text-base md:text-xl font-medium text-[#646464] w-2/3">
                No.1510-H, Sri Complex, 2nd Floor, Trichy Road, (Girias
                Upstairs), Coimbatore-641018
              </p>
              {/* {/ socials /} */}
              <div className="flex gap-5 flex-wrap text-[18px] text-[#646464] min540:justify-center">
                <a
                  href="https://www.facebook.com/ultraflysolutions"
                  target="_blank"
                >
                  {" "}
                  <i
                    style={{ transition: "all 0.3s" }}
                    className="fa-brands fa-facebook-f bg-[#efefef] p-4 rounded-full hover:bg-[#03a4ed] hover:text-white"
                  ></i>
                </a>
                <a href="https://twitter.com/UltraflyS" target="_blank">
                  <i
                    style={{ transition: "all 0.3s" }}
                    className="fa-brands fa-twitter bg-[#efefef] p-4 rounded-full hover:bg-[#03a4ed] hover:text-white"
                  ></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/ultraflysolutions/posts/?feedView=all"
                  target="_blank"
                >
                  <i
                    style={{ transition: "all 0.3s" }}
                    className="fa-brands fa-linkedin bg-[#efefef] p-4 rounded-full px-[14px] hover:bg-[#03a4ed] hover:text-white"
                  ></i>
                </a>

                <a
                  href="https://www.instagram.com/ultraflysolutions/"
                  target="_blank"
                >
                  <i
                    style={{ transition: "all 0.3s" }}
                    className="fa-brands fa-instagram bg-[#efefef] p-4 rounded-full hover:bg-[#03a4ed] hover:text-white"
                  ></i>
                </a>
                <a
                  href="https://maps.app.goo.gl/71s6HBEkSHk7FwZz8"
                  target="_blank"
                >
                  <i
                    style={{ transition: "all 0.3s" }}
                    className="fa-solid fa-location-dot bg-[#efefef] p-4 rounded-full hover:bg-[#03a4ed] hover:text-white"
                  ></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC2mcL17ybjrgSQ6hJnboeTw"
                  target="_blank"
                >
                  <i
                    style={{ transition: "all 0.3s" }}
                    className="fa-brands fa-youtube bg-[#efefef] p-4 rounded-full hover:bg-[#03a4ed] hover:text-white"
                  ></i>
                </a>
              </div>
              <p className="text-base md:text-xl font-medium text-[#646464] ">
                <a href="https://ultraflysolutions.com/">
                  {" "}
                  © {new Date().getFullYear()} Ultraflysolutions All Rights
                  Reserved.
                </a>
              </p>
            </div>

            {/* {/ middle div /} */}
            <div className=" flex justify-center items-center">
              <div className="flex flex-col gap-8 relative">
                <p className="text-[22px] font-bold footer-main">
                  Our Services
                </p>

                <span className="top-[33px] absolute w-[12rem] h-[4px] bg-[#466ce9]"></span>

                <Link to="/software-development">
                  <p className="text-[16px] hover:text-[#E97451] cursor-pointer text-[#646464] font-medium hover:font-bold">
                    Software Development
                  </p>
                </Link>
                <Link to="mobile-app-development">
                  <p className="text-[16px] hover:text-[#E97451] cursor-pointer text-[#646464] font-medium hover:font-bold">
                    Mobile App Development
                  </p>
                </Link>
                <Link to="/website-development-company">
                  <p className="text-[16px] hover:text-[#E97451] cursor-pointer text-[#646464] font-medium hover:font-bold">
                    Website Development
                  </p>
                </Link>
                <Link to="/digital-marketing-company">
                  <p className="text-[16px] hover:text-[#E97451] cursor-pointer text-[#646464] font-medium hover:font-bold">
                    SEO & Digital Marketing
                  </p>
                </Link>
                <Link to="/it-staffing">
                  <p className="text-[16px] hover:text-[#ddc642] cursor-pointer text-[#646464] font-medium hover:font-bold">
                    IT Staffing
                  </p>
                </Link>
              </div>
            </div>

            {/* {/ right div /} */}
            <div className=" flex justify-center items-center ">
              <div className="flex flex-col gap-8 relative">
                <p className="text-[22px] font-bold footer-main">
                  Working Hours
                </p>
                <span className="top-[33px] absolute w-[12rem] h-[4px] bg-[#466ce9]"></span>
                <p className="text-[16px]  text-[#646464] font-bold">
                  Monday - Friday:
                </p>
                <p className="text-[16px] text-[#646464] font-medium">
                  9:30am - 6:30pm
                </p>
                <p className="text-[16px] text-[#646464] font-bold">
                  Saturday:
                </p>
                <p className="text-[16px] text-[#646464] font-medium">
                  9.30am - 5:30pm
                </p>
                <p className="text-[16px] text-[#646464] font-bold ">
                  Sunday - Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
