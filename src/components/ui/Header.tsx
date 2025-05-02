import Link from "next/link";

// import Avatar from "@/app/_components/Avatar";
import Logo from "@/components/ui/Logo";
import DarkTheme from "@/components/layout/DarkTheme";

export default function Header() {
  return (
    <header className="bg-white py-[0.5rem] px-6 border-b border-gray-700 flex justify-between gap-1 items-center dark:bg-primary-700 dark:text-primary-200">
      <div className="flex items-center justify-center">
        <Link href="/" className="cursor-pointer">
          <Logo />
        </Link>
      </div>

      <div className="flex gap-1 mr-2 items-center ">
        {/* <Avatar /> */}
        <DarkTheme />
      </div>
    </header>
  );
}
