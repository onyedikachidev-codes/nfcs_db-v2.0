import Image from "next/image";
import logo from "@/public/images/logo.png";

function Logo() {
  return (
    <div className="flex gap-2 items-center ">
      <Image
        src={logo}
        alt="nfcs_logo"
        quality={90}
        height={60}
        width={60}
        className="ml-[0.83rem] rounded-full"
      />

      <div className="font-serif text-blue-500 font-semibold">
        <p>Lagos State University</p>
        <span>Chapter</span>
      </div>
    </div>
  );
}

export default Logo;
