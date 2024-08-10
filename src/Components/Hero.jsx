import TitleBg from "../assets/pricing/titlebg.svg";
import MainButton from "./MainButton";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import bgimg from "../assets/hero/hero-img.webp";


function Hero() {
  useGSAP(() => {
    gsap.to('#cta', { opacity: 1, y: 0, delay: 1 });
  }, []);

  return (
    <>
      <div
        className="bg-cover bg-center h-screen relative z-90 bg-gray-600 overflow-hidden"
      >
        <img src={bgimg} alt="hero" className="absolute bg-contain w-full h-full" />
        <section id="home" className="Home-section flex justify-center items-center h-full">
          <div className="flex flex-col text-white gap-10 p-4" id="cta">
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
              goTo="/contact"
              width="w-40"
            />
          </div>
        </section>
      </div>
      </>

  );
}

export default Hero;
