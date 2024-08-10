/* eslint-disable react/no-unescaped-entities */
import  { useEffect } from "react";
import "./services.css";
import gif1 from "../../assets/our_services/mobileImgs/mobile-app (1).gif";
import banner from "../../assets/our_services/software_dev/st-dev-banner.jpg"

import gif2 from "../../assets/our_services/mobileImgs/android_app_dev_lt-removebg-preview.png";
import gif3 from "../../assets/our_services/mobileImgs/iphone-application-development.webp";

function Mobile() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div>
        {/* banner */}
        <div className="h-full w-full relative ">
          <div className="h-screen w-screen flex items-center ">
          <img src={banner} alt="banners" className="-z-10 absolute bottom-3 w-full h-full" />
            <div className="pl-12 md:pl-24 ">
              <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-semibold">
              Custom Mobile App Development Services
              </h1>
            </div>
          </div>
        </div>

        <div className=" ">
          {/* first */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-14 ">
            <div>
              <img
                src={gif1}
                alt="iOS and Android App Development"
                className="mx-auto w-full md:w-2/4 lg:w-full"
              />
            </div>
            <div className="lg:col-span-2 grid gap-5">
              <h2 className="text-2xl md:text-3xl font-medium  ">
              iOS and Android App Development
              </h2>
              <h3 className="text-xl md:text-2xl font-normal  ">Native and Cross-Platform Apps</h3>
              <p className="text-base md:text-xl">
                Mobile apps have become an integral part of our daily lives,
                providing convenience, entertainment, and efficiency. Whether
                you're a startup, a small business, or a large enterprise,
                having a mobile app can help you reach a wider audience and
                enhance customer engagement. In today's fast-paced digital
                world, mobile apps have transformed the way we live and do
                business.
              </p>
              <p className="text-base md:text-xl ">
                Android apps development has become very popular and most widely
                used of its kind at the moment. With such a large force of
                change, it's obvious that there will be a lot of mixed
                perspectives within it. We understand the transformative power
                of mobile apps.
              </p>
            </div>
          </div>
          {/* second */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-14 min620:grid-cols-1">
            <div className="col-span-2 grid gap-5">
              <h2 className="text-2xl md:text-3xl font-medium  ">
              User-Centric Design
              </h2>
              <h3 className="text-xl md:text-2xl font-normal  ">UI/UX Design</h3>
              <p className="text-base md:text-xl">
                Android app development is the process of creating software
                applications for Android-powered devices, such as smartphones,
                tablets, smartwatches, and other Android-based gadgets. To
                develop Android apps, you need to understand the Android
                platform, use the appropriate tools, and follow best practices.
              </p>
              <p className="text-base md:text-xl ">
                Android apps development have become very popular and most
                widely used of its kind at the moment. With such a large force
                of change, it's obvious that there will be a lot of mixed
                perspectives within it. We understand the transformative power
                of mobile apps.
              </p>
            </div>
            <div>
              <img
                src={gif2}
                alt="User-Centric Mobile App Design"
                className="mx-auto w-full md:w-2/4 lg:w-full"
              />
            </div>
          </div>
          {/* third */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-14 min620:block">
            <div>
              <img
                src={gif3}
                alt="Mobile App Development Process at UltraFly Solutions"
                className="mx-auto w-full md:w-2/4 lg:w-full"
              />
            </div>
            <div className="col-span-2 grid gap-5">
              <h2 className="text-2xl md:text-3xl font-medium  ">
              App Maintenance and Support
              </h2>
              <h3 className="text-xl md:text-2xl font-normal  ">Post-Launch Support</h3>
              <p className="text-base md:text-xl">
                We are leading IOS App Development Company providing on-time and
                quality iPhone app development services through its qualified
                development team. Our team of expert developer s and designers
                analyze client-requirements whereas our R&D team provide useful
                marketing insights and technology suggestions to help client
                launch a user-friendly iPhone / iPad app successfully in the
                market.
              </p>
              <p className="text-base md:text-xl ">
                Android apps development has become very popular and most widely
                used of its kind at the moment. With such a large force of
                change, it's obvious that there will be a lot of mixed
                perspectives within it. We understand the transformative power
                of mobile apps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mobile;
