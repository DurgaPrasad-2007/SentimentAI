"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { time: "00:00", positive: 65, negative: 20, neutral: 15 },
  { time: "04:00", positive: 70, negative: 18, neutral: 12 },
  { time: "08:00", positive: 75, negative: 15, neutral: 10 },
  { time: "12:00", positive: 80, negative: 12, neutral: 8 },
  { time: "16:00", positive: 78, negative: 14, neutral: 8 },
  { time: "20:00", positive: 72, negative: 16, neutral: 12 },
]

export function SentimentChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="positive" stroke="#10b981" strokeWidth={2} name="Positive" />
        <Line type="monotone" dataKey="negative" stroke="#ef4444" strokeWidth={2} name="Negative" />
        <Line type="monotone" dataKey="neutral" stroke="#f59e0b" strokeWidth={2} name="Neutral" />
      </LineChart>
    </ResponsiveContainer>
  )
}
