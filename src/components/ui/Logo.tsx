import React from "react";
import logo from "../../../public/images/DB Logo.png";
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        src={logo}
        alt="logo_image"
        quality={90}
        height={60}
        width={60}
        className="ml-[0.83rem] rounded-full"
      />
    </div>
  );
}
