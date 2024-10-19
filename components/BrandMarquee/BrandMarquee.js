import React from "react";
import Marquee from "@/components/ui/marquee";
import Iphone14 from "../../public/Images/samsung_logo.png";
import Iphone13 from "../../public/Images/AppleLogo.png";
import Oppo from "../../public/Images/Oppo-Logo.png";
import realme from "../../public/Images/realme-logo.png";
import Blackberry from "../../public/Images/Blackberry.png";
import VivoLogo from "../../public/Images/VivoLogo.png";
import Image from "next/image";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    img: Iphone14,
  },
  {
    name: "Jill",
    username: "@jill",
    img: Iphone13,
  },
  {
    name: "John",
    username: "@john",
    img: Oppo,
  },
  {
    name: "John",
    username: "@john",
    img: VivoLogo,
  },

  {
    name: "Jenny",
    username: "@jenny",
    img: realme,
  },
  {
    name: "James",
    username: "@james",
    img: Blackberry,
  },
];

const BrandMarquee = () => {
  const ReviewCard = ({ img }) => {
    return (
      <div className="flex items-center justify-center w-20 mx-2 h-20 lg:w-14 lg:h-14 lg:px-2 ">
        <Image
          className="object-contain"
          height={100}
          width={100}
          alt="Brand logo"
          src={img}
        />
      </div>
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Marquee pauseOnHover className="[--duration:10s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/50 dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/50 dark:from-background "></div>
    </div>
  );
};

export default BrandMarquee;
