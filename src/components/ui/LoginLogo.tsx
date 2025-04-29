import Image from "next/image";
import logo from "@/public/logo.png";

function LoginLogo() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Image
        src={logo}
        alt="nfcs_logo"
        quality={90}
        height={80}
        width={80}
        className="ml-[0.83rem] rounded-full"
      />

      <div className=" text-blue-500 font-semibold flex flex-col items-center text-3xl">
        <p>Lagos State University</p>
        <span className="">Chapter</span>
      </div>
    </div>
  );
}

export default LoginLogo;
