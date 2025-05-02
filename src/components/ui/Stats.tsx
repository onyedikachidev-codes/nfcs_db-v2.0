"use client";

import { Montserrat } from "next/font/google";
import { IoIosPeople } from "react-icons/io";

import Stat from "./Stat";

const mons = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface StatsProps {
  count: number | null;
  level: number | null;
  levelCount: number;
  faculty: string;
  facultyCount: number;
  state: string;
  stateCount: number;
}

function Stats({
  count,
  level,
  levelCount,
  faculty,
  facultyCount,
  state,
  stateCount,
}: StatsProps) {
  return (
    <div className="flex gap-6 mt-10 justify-center items-center">
      <div>
        <h2
          className={`${mons.className} text-lg text-center uppercase font-medium mb-2`}
        >
          Total members
        </h2>
        <Stat title="members" value={count} text="members">
          <IoIosPeople className="bg-blue-500 text-gray-50 dark:bg-gray-50 dark:text-blue-500 h-14 w-14 rounded-full" />
        </Stat>
      </div>

      <div>
        <h2
          className={`${mons.className} text-lg text-center uppercase font-medium mb-2`}
        >
          Top Faculty
        </h2>
        <Stat title={faculty} value={facultyCount} text="members">
          <IoIosPeople className="bg-blue-500 text-gray-50 dark:bg-gray-50 dark:text-blue-500 h-14 w-14 rounded-full" />
        </Stat>
      </div>

      <div>
        <h2
          className={`${mons.className} text-lg text-center uppercase font-medium mb-2`}
        >
          Top Level
        </h2>
        <Stat title={`${level} level`} value={levelCount} text="members">
          <IoIosPeople className="bg-blue-500 text-gray-50 dark:bg-gray-50 dark:text-blue-500 h-14 w-14 rounded-full" />
        </Stat>
      </div>

      <div>
        <h2
          className={`${mons.className} text-lg text-center uppercase font-medium mb-2`}
        >
          Top State
        </h2>
        <Stat title={`${state} state`} value={stateCount} text="members">
          <IoIosPeople className="bg-blue-500 text-gray-50 dark:bg-gray-50 dark:text-blue-500 h-14 w-14 rounded-full" />
        </Stat>
      </div>
    </div>
  );
}

export default Stats;
