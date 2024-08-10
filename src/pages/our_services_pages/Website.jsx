/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import "./services.css";
import gif1 from "../../assets/our_services/websiteImg/soft-dev-new-gif.gif";
import webImg from "../../assets/who-we-are/web.png";
import softimg from "../../assets/our_services/websiteImg/software-img.jpg";
import banner from "../../assets/our_services/software_dev/st-dev-banner.jpg"


function Website() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div >
        {/* banner */}
        <div className="h-full w-full relative ">
          <div className="h-screen w-screen flex items-center ">
          <img src={banner} alt="banners" className="-z-10 absolute bottom-3 w-full h-full" />
            <div className="pl-12 md:pl-24 ">
              <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-semibold">
                Professional Website Development Services
              </h1>
            </div>
          </div>
        </div>

        <div className=" ">
          {/* first */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-14">
            <div>
              <img
                src={gif1}
                alt="Tools Used for Website Development at UltraFly Solutions"
                className="mx-auto w-full md:w-2/4 lg:w-full"
              />
            </div>
            <div className="lg:col-span-2 grid gap-5">
              <h2 className="text-2xl md:text-3xl font-medium   ">
                Custom Web Design
              </h2>
              <h3 className="text-xl md:text-2xl font-normal ">
                Front-End Development
              </h3>
              <p className="text-base md:text-xl">
                Website development is the intricate process of transforming
                ideas into functional applications. It's a harmonious blend of
                creativity and technical prowess, where programmers act as
                architects, constructing digital structures that serve a myriad
                of purposes. From the sleekest mobile app to the most complex
                enterprise system, Website underpins much of modern life.
              </p>
              <p className="text-base md:text-xl ">
                At its core, Website development involves a systematic approach.
                It begins with a clear understanding of the problem or need the
                Website aims to address. This is followed by meticulous
                planning, where architects design the Website's structure and
                functionality. The subsequent coding phase is where programmers
                translate designs into executable code, using a variety of
                languages and tools. Rigorous testing ensures the Website
                operates as intended, free from errors and vulnerabilities. Once
                perfected, the Website is deployed, making it accessible to
                users. However, the journey doesn't end there; ongoing
                maintenance and updates are essential to adapt to evolving needs
                and technologies
              </p>
            </div>
          </div>
          {/* second */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-14">
            <div className="lg:col-span-2 grid gap-5">
              <h2 className="text-2xl md:text-3xl font-medium   ">
                Responsive Websites
              </h2>
              <h3 className="text-xl md:text-2xl font-normal ">
                Back-End Development
              </h3>
              <p className="text-base md:text-xl">
                The realm of Website development is vast and diverse. Web
                development focuses on creating applications for the internet,
                while mobile app development targets smartphones and tablets.
                Desktop applications cater to traditional computers, while game
                development brings interactive experiences to life. Embedded
                systems development involves Website for specialized devices.
              </p>
              <p className="text-base md:text-xl ">
                Challenges abound in this dynamic field. Building complex
                systems, safeguarding against cyber threats, and keeping pace
                with rapid technological advancements require constant
                innovation and adaptation. Yet, the rewards are immense. Website
                developers have the power to create solutions that improve
                lives, drive businesses, and shape the future
              </p>
            </div>
            <div>
              <img
                src={softimg}
                alt="Responsive Website Design on Different Devices"
                className="mx-auto w-1/2 md:w-2/4 lg:w-full"
              />
            </div>
          </div>
          {/* third */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-14">
            <div>
              <img
                src={webImg}
                alt="E-commerce Website Developed by UltraFly Solutions"
                className="mx-auto w-1/2"
              />
            </div>
            <div className="lg:col-span-2 grid gap-2">
              <h2 className="text-2xl md:text-3xl font-medium">
                E-commerce Solutions
              </h2>
              <h3 className="text-xl md:text-2xl font-normal ">
                Website Maintenance
              </h3>
              <p className="text-base md:text-xl">
                As technology continues to evolve at an unprecedented pace, the
                role of Website development will only grow in significance. It
                is a field that demands intellectual curiosity, problem-solving
                abilities, and a passion for creating something new.
              </p>
              {/* <p className="text-base md:text-xl ">
              Android apps development has become very popular and most widely
              used of its kind at the moment. With such a large force of change,
              it's obvious that there will be a lot of mixed perspectives within
              it. We understand the transformative power of mobile apps.
            </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Website;
