"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

type LevelChartProps = {
  data: { level: string | number; count: number }[];
};

export default function LevelChart({ data }: LevelChartProps) {
  return (
    <div style={{ width: "100%", height: "500px" }} className="mt-16">
      <h1 className="text-center text-3xl font-semibold dark:text-accent-200 font-serif uppercase underline mb-10">
        Membership Level Distribution
      </h1>
      <ResponsiveContainer width="90%" height="80%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--stroke-color)" />
          <XAxis
            dataKey="level"
            label={{
              value: "Levels",
              position: "insideBottom",
              offset: -5,
              style: { fill: "var(--axis-label-color)" },
            }}
            tick={{ fill: "var(--cartesian-label-color)" }}
          />
          <YAxis
            label={{
              value: "Members",
              angle: -90,
              position: "insideLeft",
              style: { fill: "var(--axis-label-color)" },
            }}
            tick={{ fill: "var(--cartesian-label-color)" }}
          />

          <Bar dataKey="count" fill="var(--bar-color)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
