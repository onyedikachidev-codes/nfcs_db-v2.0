import React from "react";
import { fetchFaculty, fetchLevels, fetchState, getLevel } from "@/api";
import LevelChart from "../ui/LevelChart";
import { getMostFrequentLevel } from "@/app/_constants";
import { getMembers } from "@/lib/actions";
import Stats from "../ui/Stats";

export default async function Dashboard() {
  const { count } = await getMembers();

  const levels = await fetchLevels();
  const result = getMostFrequentLevel(levels);

  const faculties = await fetchFaculty();
  const states = await fetchState();

  const { level, count: levelCount } = result;
  const { faculty, count: facultyCount } = faculties;
  const { state, count: stateCount } = states;

  const levelData = await getLevel();

  return (
    <div className="ml-7">
      <h2 className="text-center text-3xl font-semibold uppercase mt-5  dark:text-accent-200 font-serif underline">
        Top Statistics
      </h2>

      <Stats
        count={count}
        level={level}
        levelCount={levelCount}
        faculty={faculty}
        facultyCount={facultyCount}
        state={state}
        stateCount={stateCount}
      />

      <LevelChart data={levelData} />
    </div>
  );
}
