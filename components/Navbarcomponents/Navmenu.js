"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,

} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Logo from "../../public/Images/ShivrajMobileLogo.png";
import { FaInstagram } from "react-icons/fa";
import { SlSocialFacebook } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";



export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className=" text-white bg-orange-500 rounded-full hover:bg-white hover:text-black hover:bg-transparent">
            About us
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-[#f2fdff]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex bg-slate-100 h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image className="w-44" src={Logo} alt="logo" />
                    <div className="mb-2 mt-4 text-sm font-medium ">
                      Vakratund - Tours and Adventure
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                     {`Founded in 2024, Vakratund Tours and Adventure offers heartfelt journeys that go beyond travel.`}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/aboutus" title="Introduction">
              {`Founded in 2024, Vakratund Tours and Adventure offers heartfelt journeys that go beyond travel.`}

              </ListItem>
              <ListItem href="/Contactus" title=" Get in Touch">
                <span> Email : vakratundtour@gmail.com</span>
                <span> Phone :9284205536</span>
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Connect with us"
              >
                <div className="flex justify-center items-center w-full rounded-lg mt-2 -ml-8">
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
                    <Link href={"https://www.facebook.com/people/Vakratund-Tours-Adventures/61564626934045/?mibextid=ZbWKwL"}>
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
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger className="text-[#0b8d7c]">
          Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-[#f2fdff]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}

<NavigationMenuItem>
          <Link href="/Blogs" legacyBehavior passHref>
            <NavigationMenuLink className={"text-sm font-medium text-white "}>
            Offers   
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/Blogs" legacyBehavior passHref>
            <NavigationMenuLink className={"text-sm font-medium text-white ml-5"}>
              Mobiles
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/Blogs" legacyBehavior passHref>
            <NavigationMenuLink className={"text-sm font-medium text-white ml-5"}>
            Furniture
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/Blogs" legacyBehavior passHref>
            <NavigationMenuLink className={"text-sm font-medium text-white ml-5"}>
              Blogs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

   
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, subLinks, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
            {subLinks && (
              <ul className="ml-4 mt-2 space-y-2">
                {subLinks.map((subLink) => (
                  <li key={subLink.href}>
                    <Link href={subLink.href} legacyBehavior passHref>
                      <a className="font-medium text-sm text-[#0b8d7c] hover:underline">
                        {subLink.title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
