import { Montserrat } from "next/font/google";

const mons = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface Props {
  children: React.ReactNode;
  title: string;
  value: string;
  text: string;
}

function Stat({ children, title, value, text }: Props) {
  return (
    <div className="bg-white border border-gray-50 rounded-md dark:bg-gray-700 dark:border-gray-700 p-6 flex gap-4">
      <div className="">{children}</div>

      <div className="flex flex-col gap-[0.3rem]">
        <h3 className={`${mons.className} uppercase font-medium`}>{title}</h3>
        <p className="font-semibold text-2xl font-serif">
          {value}
          <span className="text-base ml-[0.30rem]">{text}</span>
        </p>
      </div>
    </div>
  );
}

export default Stat;
