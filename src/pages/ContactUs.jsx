
function ContactUs() {
  return (
    <div>
      <section>
        <div className="login-banner relative justify-center flex pt-10 max-[480px]:mt-[150px]">
          <h1 className="text-blue-500 absolute bottom-[25px] text-3xl md:text-4xl  font-bold px-4 text-center pt-20   ">
            GET IN TOUCH WITH US
          </h1>
        </div>
        {/* {/ contact /} */}
        <div className="bg-white py-3 page-padding grid md:grid-cols-2 container gap-10 items-center">
          {/* {/ first col /} */}
          <div className="">
            <div>
              <h2 className="text-black text-2xl md:text-3xl font-bold leading-[1.2]">
                We are here for help you! To uplift your business.
              </h2>
              <p className="text-base md:text-xl w-[95%] text-[#646464] my-[40px]">
                Our field of expertise include Software Development, Web
                Development, Mobile App Development, Search Engine Optimization,
                Digital Marketing & Recruitment Service, Our global clients come
                from a wide spectrum of industries with varying requirements.
              </p>
            </div>
            <div className="grid gap-10">
              <div className="flex flex-col relative">
                <h2 className="text-2xl md:text-3xl font-bold">Visit Our Office</h2>
                <h3 className="text-xl md:text-2xl font-semibold ">
                  Office Location
                </h3>
                <span className="bg-[#404bdf] w-[50px] h-[4px] absolute top-[32px] md:top-[36px]"></span>
                <p className="text-[15px] font-medium text-[#646464]">
                  No.1510-H, Sri Complex, 2nd Floor,
                  <br /> Trichy Road, (Girias Upstairs),
                  <br />
                  Coimbatore-641018, TN , India
                </p>
              </div>
              {/* {/  /} */}
              <div className="flex flex-col relative">
                <h3 className="text-2xl md:text-3xl font-bold">Opening Hours</h3>
                <span className="bg-[#404bdf] w-[50px] h-[4px] absolute top-[32px] md:top-[36px]"></span>
                <div className="text-[15px] font-medium text-[#646464]">
                  <p>Mon to Fri: 9:30 am — 6:30 pm</p>
                  <p>Saturday : 9:30 am — 5:30 pm</p>
                </div>
              </div>
              {/* {/  /} */}
              <div className="flex flex-col relative">
                <h2 className="text-2xl md:text-3xl font-bold">Send Us a Message</h2>
                <h3 className="text-xl md:text-2xl font-semibold ">
                  Phone and Email
                </h3>
                <span className="bg-[#404bdf] w-[50px] h-[4px] absolute top-[32px] md:top-[36px]"></span>
                <div className="text-[15px] font-medium text-[#646464]">
                  <p>Landline - +0422-267 0033</p>
                  <p>Phone - +91 91500 01089</p>
                  <p>Email - mailto:hr@ultraflysolutions.com</p>
                </div>
              </div>
              {/* {/  /} */}
              <div className="flex flex-col relative">
                <h3 className="text-[2rem] font-bold mb-10"></h3>
                <span className=" w-[50px] h-[4px] absolute top-[33px]"></span>
                <div className="text-[18px] font-medium text-black flex gap-5">
                  <i className="fa-brands fa-facebook-f] bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff695f] ease-in duration-200 hover:text-white"></i>
                  <i className="  bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff695f] ease-in duration-200 hover:text-white"></i>
                  <i className="  bg-[#f4f4f4] rounded-full cursor-pointer hover:bg-[#ff695f] ease-in duration-200 hover:text-white"></i>
                  <i className="  bg-[#f4f4f4]  cursor-pointer hover:bg-[#ff695f] ease-in duration-200 hover:text-white"></i>
                </div>
              </div>
            </div>
          </div>

          {/* second col ---*/}
          <form
            className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#f8f8f8] relative"
          >
            <h2 className="text-[22px] md:text-[28px] font-bold  mb:mb-14">
              Contact Information
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold my-4 ">Contact Form</h3>
            <span className="bg-[#404bdf] w-[50px] h-[4px] absolute top-[60px] md:top-[77px]"></span>
            <input
              name="user_name"
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Full Name *"
              type="text"
              required
            />
            <input
              name="user_email"
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Email Address *"
              type="email"
              required
            />
            <input
              name="user_phone"
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
              placeholder="Your phone number"
              type="number"
              required
            />
            <select
              name="user_domain"
              className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
            >
              <option>Select Domain</option>
              <option>Software Development</option>
              <option>Website Development</option>
              <option>Mobile App Development</option>
              <option>SEO Optimization</option>
              <option>Digital Marketing</option>
              <option>IT Staffing</option>
            </select>
            <textarea
              name="message"
              placeholder="Comment"
              className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
            />
            <button
              type="submit"
              className="text-white bg-[#4663e6] w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6"
            >
              Submit Now
            </button>
          </form>
        </div>

        {/* {/ map /} */}
        <div className=" px-10 h-1/2 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7833.164218421207!2d76.97284489999997!3d10.99488190000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719896679786!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            title="Map Showing UltraFly Solutions Office Location"
            style={{ width: "100%", height: "45rem", border: "0px" }}
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
