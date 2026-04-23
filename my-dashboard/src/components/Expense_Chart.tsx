"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", expense: 50 },
  { day: "Tue", expense: 120 },
  { day: "Wed", expense: 80 },
  { day: "Thu", expense: 90 },
  { day: "Fri", expense: 150 },
  { day: "Sat", expense: 60 },
  { day: "Sun", expense: 70 },
];

export default function ChartBox() {
  return (
    <div className="bg-black p-4 rounded w-full mt-6">
      <p className="mb-4 text-sm text-gray-400">Daily Expenses</p>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="day" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="expense"
            stroke="#4f46e5"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}