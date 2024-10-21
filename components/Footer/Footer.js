import { Divider, Input } from "@nextui-org/react";
import { MdOutlineMail } from "react-icons/md";
import { TbNetwork } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate pt-4">
      <div
        className="w-full flex-col  text-white"
        style={{ background: "linear-gradient(to right, #FF8C00, #FF4500)" }} // Tangerine to Burnt Orange


      >
        <div className="md:m-10 m-4 flex items-center justify-center relative">
          <div className="text-center p-4">
            <h3 className="font-bold text-2xl md:text-4xl text-white">
              Shivraj Mobile & Electronics
            </h3>
            <p className="text-xs md:text-base text-white mt-1">
              At-Kamshet, Tal-Maval Dist-Pune, Maharashtra 410105
            </p>
            <div className="flex flex-col md:flex-row justify-between items-center text-white gap-2 md:gap-10 mt-2">
              <p className="flex items-center">
                <MdOutlineMail size={24} />
                Info@gmail.com
              </p>
              <p className="flex items-center">
                <FaPhone size={24} />
                +91 7038758993
              </p>
              <p className="flex items-center">
                <TbNetwork size={24} />
                <Link href="https://www.vakratundtours.com/" className="text-white hover:underline">
                  www.shivrajmobile.com
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="w-11/12 mx-auto z-10 bg-white md:mb-0 lg:mb-0 mb-8">
          <Divider orientation="horizontal" />
        </div>

        <p className="text-center mt-2 text-white hidden lg:flex lg:justify-center font-sans md:text-xs lg:text-xs text-tiny px-1 uppercase w-full">
          {` 2024 Shivraj Mobile & Electronics - All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}
