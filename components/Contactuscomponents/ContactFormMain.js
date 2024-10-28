import React from "react";
import Contactform from "./Contactform";


import toast, { Toaster } from "react-hot-toast";
import { IoMdMail } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";
import { Card, CardBody, Input } from "@nextui-org/react";
import { FcAddressBook } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcCallback } from "react-icons/fc";
import { FcComments } from "react-icons/fc";
import Getintouch from "./Getintouch";
import MobileFooter from "../MobileFooter/MobileFooter";
import Nav from "../Navbarcomponents/Nav";
import Image from "next/image";
import Logo from "../../public/Images/ShivrajMobileLogo.png";

const ContactFormMain = () => {
  return (
    <>
    <Nav/>
    <div className="flex flex-col justify-center items-center w-full md:p-8 lg:p-8 p-2 gap-8 mx-auto back ">
      <div className=" flex flex-col justify-center items-center gap-2">


        <h2 className="font-bold md:text-4xl lg:text-4xl text-xl leading-8 capitalize">
          contact <span className="text-redtheme"> us!</span>
        </h2>

        <Image
            className="md:w-44 md:h-44 lg:w-32 lg:h-32 h-36 w-36 md:flex lg:flex   object-contain"
            src={Logo}
            alt="logo"
          />
<div className="flex flex-col justify-center items-center">
<h1 className= "text-orange-500  yatra-one-regular  text-2xl  font-extrabold sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-snug md:leading-snug lg:leading-snug  md:w-11/12 lg:w-11/12 " >
{`शिवराज मोबाईल & इलेक्ट्रॉनिक्स`}
</h1>
<h1 className= "text-gray-600  yatra-one-regular  text-sm  font-extrabold sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-snug md:leading-snug lg:leading-snug  md:w-11/12 lg:w-11/12 " >
{`पत्ता :- कामशेत ता.मावळ जि. पुणे ४१०४०५`}
</h1>
</div>
        

        {/* <p className="text-sm text-center font-medium leading-4 text-foreground-700 capitalize">
          let’s get started! reach out to us, we will get the work done.
        </p> */}


      </div>
      
      {/* <div className="flex lg:flex-row flex-col md:w-11/12 w-full justify-center items-center gap-4 mx-auto">
       
        <Card className="md:w-[30rem] w-11/12">
          <CardBody className="flex justify-start items-center w-full flex-row gap-4 p-3">
            <div className="flex justify-center items-center h-16 w-16 bg-greentheme rounded-full">
              <FcAddressBook size={24}/>
             </div>
            <div className="w-2/4 flex flex-col justify-start items-start gap-1">
              <h6 className="font-bold text-sm text-[#0b8d7c] capitalize">e-mail</h6>
              <p className="text-xs">
              vakratundtour@gmail.com <br />
              </p>
            </div>
          </CardBody>
        </Card>
        <Card className="md:w-[30rem] w-11/12">
          <CardBody className="flex justify-start items-center w-full flex-row gap-4 p-3">
            <div className="flex justify-center items-center h-16 w-16 bg-greentheme rounded-full">
            <FcHome size={24}/>
            </div>
            <div className="w-2/4 flex flex-col justify-start items-start gap-1">
              <h6 className="font-bold text-sm text-[#0b8d7c] capitalize">address</h6>
              <p className="text-xs">{`At-Kanhe Jambhul, Tal-Maval Dist-Pune, Maharashtra 412106`}</p>
            </div>
          </CardBody>
        </Card>
      </div> */}

      <div className="flex lg:flex-row-reverse md:flex-row-reverse flex-col-reverse px-6 bg-white  w-full justify-between items-start gap-4 mx-auto md:py-12 lg:py-12 py-4 shadow-xl rounded-lg  ring-1 ring-gray-200">
        <Contactform />
        <Getintouch/>
       
      </div>
    </div>
    <MobileFooter/>
    </>
  
  );
};

export default ContactFormMain;
