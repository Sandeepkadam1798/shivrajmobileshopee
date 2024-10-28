import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Getintouch = () => {
  return (
    <div className="flex justify-start items-start w-full mx-auto lg:gap-8 md:gap-8 gap-4 flex-col">
      <div>
        <p className="text-xl lg:text-3xl md:text-3xl font-semibold leading-7 -tracking-tight">
          Get in Touch
          <span className='lucide absolute -mt-3 lucide-sparkles h-4 w-4 text-[#36a39e] shrink-0'><i className="pi pi-sparkles" style={{ fontSize: '1rem' }}></i></span>
        </p>
      </div>
      <div className="lg:text-lg md:text-sm text-sm leading-7 text-justify break-all tracking-tight  text-gray-500 lg:w-96 md:w-96">
        <p>{`Need assistance or have any queries? We're here to help! Simply fill out the form below, and our dedicated team will get back to you shortly.`}</p>
      </div>
      <div className="flex flex-col justify-start items-start gap-4">
        <div className="flex justify-between items-center gap-4">
          <MdOutlineEmail size={24} className="text-orange-500" />
          <p>shivrajmobiles@gmail.com</p>
        </div>
        <div className="flex justify-between items-center gap-4">
          <FiPhone size={24} className="text-orange-500"/>
          <p>+91-9923928928</p>
        </div>
      </div>
      <div className="md:flex hidden lg:flex justify-center items-center w-full rounded-lg lg:h-24 md:h-24 h-14 bg-[#36a39e] lg:mt-20 md:mt-20 mt-4">
        <div className="flex justify-around gap-2 items-center">
        <Link
                      href={
                        "https://www.instagram.com/vakratund_tours/?utm_source=ig_embed&ig_rid=22824f35-53c7-4967-8fe8-83f163b00532"
                      }
                    >
                      <div className="group transition-all duration-700 flex justify-center items-center rounded-md bg-[#4aaca8] w-12 h-12 hover:bg-white hover:text-[#36a39e]">
                        <FaInstagram
                          size={24}
                          className="text-white transition-all duration-700 group-hover:text-[#36a39e]"
                        />
                      </div>
                    </Link>
                    <Link  href={"https://www.facebook.com/people/Vakratund-Tours-Adventures/61564626934045/?mibextid=ZbWKwL"}>
                    <div className="group transition-all duration-700 flex justify-center items-center rounded-md bg-[#4aaca8] w-12 h-12 hover:bg-white hover:text-[#36a39e]">
                      <SlSocialFacebook
                        size={24}
                        className="text-white transition-all duration-700 group-hover:text-[#36a39e]"
                      />
                    </div>
                    </Link>
                    
                    <Link href={"https://wa.link/f5qsnc"}>
                      <div className="group transition-all duration-700 flex justify-center items-center rounded-md bg-[#4aaca8] w-12 h-12 hover:bg-white hover:text-[#36a39e]">
                        <FaWhatsapp
                          size={24}
                          className="text-white transition-all duration-700 group-hover:text-[#36a39e]"
                        />
                      </div>
                    </Link>

        </div>
      </div>
    </div>
  );
};

export default Getintouch;
