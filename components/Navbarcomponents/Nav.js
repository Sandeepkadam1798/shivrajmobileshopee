"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Link,
 
  Divider,
 
  NavbarMenuItem,
} from "@nextui-org/react";
import Image from "next/image";
import Logo from "../../public/Images/ShivrajMobileLogo.png";
// import Logo2 from "../../public/Navabar/Logo2.png";
import { NavigationMenuDemo } from "./Navmenu";
// import { FaPhone } from "react-icons/fa6";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
// import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

export default function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const [activeitem, setactiveitem] = useState();
  
  
  const linkitem = ["HOME","Offers","Mobiles","Furniture","blog", "CONTACT US"];

  const handleredirect = (link) => {
    switch (link) {
      case "HOME":
        router.push("/");
        break;
      case "Offers -":
        router.push("/");
        break;
      case "Mobiles -":
        router.push("/");
        break;
      case "Furniture -":
        router.push("/");
        break;
      case "Furniture -":
        router.push("/");
        break;
     
      case "blog":
        router.push("/Blogs");
        break;
 
      case "CONTACT US":
        router.push("/Contactus");
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    switch (pathname) {
      case "/":
        setactiveitem("HOME");
        break;
      case "/Blogs":
        setactiveitem("blog");
        break;
      case "/mobiles":
        setactiveitem("Mobiles");
        break;
      case "/furniture":
        setactiveitem("Furniture");
        break;
   
      // case "/destination":
      //   setactiveitem("packages");
        break;
      case "/Contactus":
        setactiveitem("CONTACT US");
        break;

 
      default:
        setactiveitem("");
    }
  }, [pathname]);

  return (
    <Navbar maxWidth="full" className="w-full shadow-md  bg-white lg:bg-orange-500"
     isMenuOpen={isMenuOpen}
     onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <Link href="/" className="lg:w-20 p-3">
          <Image
            className="md:w-32 md:h-32 lg:w-32 lg:h-32 h-24 w-24 md:flex lg:flex -ml-8  object-contain"
            src={Logo}
            alt="logo"
          />
        </Link>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavigationMenuDemo />
      </NavbarContent>
      <NavbarContent justify="end" className="gap-8 flex items-center w-full">
        <NavbarItem>
          {/* <Button
            as={Link}
            className=" rounded-full bg-[#36a39e] text-white -mr-4 group"
            href="#"
            variant="solid"
          >
            <FaPhone className="text-white " /> +91-9284205536
          </Button> */}
        </NavbarItem>

        <NavbarItem>
          <Sheet>
            <SheetTrigger>
              <IoMdMenu
                size={24}
                className="md:hidden lg:hidden flex text-orange-500"
              />
            </SheetTrigger>
            <SheetContent side="right" className=" bg-orange-50">
              <SheetHeader>
                <SheetTitle>
                  <div className="flex justify-between items-center w-full ">
                    <div className="w-24 h-24 rounded-full">
                      <Image className="w-24 h-24 -ml-4  object-contain rounded-full" src={Logo} alt="logo"  />
                    </div>
                    {/* <div className="w-8 h-8 bg-[#36a39e] rounded-full flex justify-center items-center">
                    <SheetClose>
                      <span className="text-lg font-bold text-white p-2  text-center">
                        X
                      </span>
                    </SheetClose>
                  </div> */}
                  </div>
                </SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col justify-between sm:gap-24 gap-16  items-start mt-8 overflow-scroll">
                    <div className="flex justify-center items-start gap-4 flex-col w-full">
                      {linkitem.map((value, index) => (
                        <div
                          key={index}
                          className="w-full flex justify-start items-start flex-col gap-4"
                        >
                          <SheetClose>
                            <span
                              onClick={() => handleredirect(value)}
                              className={
                                activeitem === value
                                  ? "text-sm font-semibold uppercase text-orange-600"
                                  : "text-sm font-semibold uppercase text-orange-500"
                              }
                            >
                              {value}
                            </span>
                          </SheetClose>
                          <Divider />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-cente items-center text-center w-full">
                      <SheetClose>
                        <button
                          onClick={() => router.push("/Contactus")}
                          className=" h-8 bg-orange-500 text-white rounded-full  w-52 font-bold"
                        >
                          +91-9284205536
                        </button>
                      </SheetClose>
                    </div>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </NavbarItem>
           <div onClick={()=>setIsMenuOpen(!isMenuOpen)} className="hidden lg:flex md:flex uppercase items-center gap-2 group hover:text-orange-600 hover:bg-white py-2 px-3 h-10  rounded-full bg-white text-xs text-orange-500 ">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="hidden lg:flex md:flex text-orange-500 text-xs group-hover:text-orange-600"
        ></NavbarMenuToggle>
          Menu
           </div>
      </NavbarContent>

      <NavbarMenu className="bg-orange-500 flex flex-col gap-4 pt-4">
        {linkitem.map((item, index) => (
          <NavbarMenuItem  key={`${item}-${index}`} className="bg-orange-500  ">
            <span
              onClick={() =>{ handleredirect(item),setIsMenuOpen(!isMenuOpen)}}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className={
                activeitem === item
                  ? "text-lg font-semibold uppercase text-white cursor-pointer "
                  : "text-lg font-semibold uppercase text-white cursor-pointer "
              }
            >
              {item}
            </span>
        
          </NavbarMenuItem>
        ))}
        <div className="flex justify-center flex-col gap-4 items-center w-full rounded-lg mt-2 -ml-8">
          <div>
            <p className="text-xl text-bold text-white">Connect With us</p>
          </div>
                  <div className="flex justify-around gap-2 items-center">
                    <Link
                      href={
                        "https://www.instagram.com/vakratund_tours/?utm_source=ig_embed&ig_rid=22824f35-53c7-4967-8fe8-83f163b00532"
                      }
                    >
                    <Link href={"/Blogs"}>

                      <div className="group transition-all duration-700 flex justify-center items-center rounded-md bg-[#4aaca8] w-12 h-12 hover:bg-white hover:text-[#36a39e]">
                        <FaInstagram
                          size={24}
                          className="text-white transition-all duration-700 group-hover:text-[#36a39e]"
                        />
                      </div>
                    </Link>
                    </Link>
                    <Link href="https://www.facebook.com/people/Vakratund-Tours-Adventures/61564626934045/?mibextid=ZbWKwL">

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
      </NavbarMenu>
    </Navbar>
  );
}
