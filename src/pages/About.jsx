import GirlRunning from "../assets/who-we-are/girl-run.png";
import GirlRedBg from "../assets/who-we-are/girl-redbg.svg";
import GirlWind from "../assets/who-we-are/wind.png";

import MainButton from "../Components/MainButton";
import Img3 from "../assets/AboutPage/3.jpg";
import Img4 from "../assets/AboutPage/4.jpg";
import Target from "../assets/AboutPage/target.png";
import Mountain from "../assets/AboutPage/mountain.png";
import { useEffect } from "react";
function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
     {/* <HelmetProvider>

<Helmet>
  <title>About Us | Ultrafly Solutions Meta 
  </title>
  <meta name="description" content="Learn more about Ultrafly Solutions, our mission, values, and the expert team driving innovative IT solutions for businesses worldwide " />
  <meta name="keywords" content="Iabout Ultrafly Solutions, IT company, tech solutions, company mission, expert team" />
</Helmet>

</HelmetProvider> */}
      <section className="login-section">
        <div className="container page-padding">
          <h1 className="text-blue-500 text-center text-3xl md:text-4xl font-bold pt-2 pb-12 ">
          ABOUT ULTRAFLY SOLUTIONS
          </h1>
          <div className="grid md:grid-cols-3">
            {/* {/ title div -- /} */}
            <div className="flex flex-col !text-left relative items-right justify-center col-span-2">
              <h2 className="text-black text-2xl md:text-3xl uppercase font-bold py-4">
              Our Mission and Vision
              </h2>

              <h2 className=" text-1xl md:text-2xl max-w-[53rem] font-bold mb-4">
              Our Story
              </h2>
              <p className="text-[#646464] font-medium text-[17px] text-justify max-w-[50rem] ">
                Ultrafly Solutions Private Limited was founded in 2019 at
                Coimbatore based company working towards excellence in the
                Computers, and believe in pursuing business through innovation
                and technology.
              </p>
              <MainButton
                color={`!text-white`}
                bg={`bg-sky-400`}
                goTo="/contact-us"
                text="Meet the Team"
                arrowColor={`!text-white`}
                cN="pricing-cta blog-cta"
                data-aos="fade-up"
              />
            </div>
            {/* {/  /} */}
            <div className="relative">
              <img
                src={GirlRunning}
                alt="Timeline of UltraFly Solutions' Journey"
                className="girl-running absolute"
              />
              <img src={GirlRedBg} alt="Timeline of UltraFly Solutions' Journey" className="girl-bg " />
              <img src={GirlWind} alt="Timeline of UltraFly Solutions' Journey" className="girl-wind" />
            </div>
          </div>
          {/* {/  /} */}
          <div className="mt-[10rem]">
            <div className="grid grid-cols-2 grid-rows-2 w-full min620:grid-cols-1">
              <div className="w-full bg-white h-80 md:h-[43rem] flex flex-col justify-center items-center text-center px-4"  data-aos="fade-right">
                <img
                  src={Target}
                  alt="UltraFly Solutions Team"
                  className="w-1/3 md:w-[9rem]"
                />
                <h3 className="text-2xl md:text-[36px] font-bold mt-3">
                Our Values
                </h3>
                <p className="text-[8px] text-justify md:text-[16px] font-medium text-[#646464] mt-5">
                  Harnessing agile, innovative technologies, we devise adaptable
                  solutions, enabling your business to thrive amidst evolving
                  demands and dynamic environments seamlessly.
                </p>
              </div>
              {/* {/  /} */}
              <div className="w-full bg-white h-80 md:h-[43rem]"  data-aos="fade-left">
                <img
                  src={Img3}
                  alt="UltraFly Solutions Office"
                  className="w-full h-full object-cover bg-center"
                />
              </div>
              {/* {/  /} */}
              <div className="w-full bg-white h-80 md:h-[43rem]" data-aos="fade-right">
                <img
                  src={Img4}
                  alt="about_img"
                  className="w-full h-full object-cover bg-center"
                />
              </div>
              {/* {/  /} */}
              <div className="w-full bg-white h-80 md:h-[43rem] flex flex-col justify-center items-center text-center px-4" data-aos="fade-left">
                <img
                  src={Mountain}
                  alt="target_img"
                  className="w-1/3 md:w-[9rem]"
                />
                <h2 className="text-2xl md:text-[36px] font-bold mt-3">
               Our Journey
                </h2>
                <p className="text-[8px] text-justify md:text-[16px] font-medium text-[#646464] mt-5">
                  Efficiently planning and delivering top-notch products swiftly
                  and cost-effectively, we minimize risks, enhance savings, and
                  innovate solutions, optimizing organizational efficiency
                  seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* {/ <Footer /> /} */}
      </section>
    </>
  );
}

export default About;
