"use client"

import { Progress } from "@/components/ui/progress"

const emotions = [
  { name: "Joy", value: 45, color: "bg-yellow-500" },
  { name: "Trust", value: 38, color: "bg-blue-500" },
  { name: "Anticipation", value: 32, color: "bg-orange-500" },
  { name: "Surprise", value: 28, color: "bg-purple-500" },
  { name: "Fear", value: 15, color: "bg-gray-500" },
  { name: "Sadness", value: 12, color: "bg-blue-700" },
  { name: "Disgust", value: 8, color: "bg-green-700" },
  { name: "Anger", value: 6, color: "bg-red-500" },
]

export function EmotionHeatmap() {
  return (
    <div className="space-y-4">
      {emotions.map((emotion) => (
        <div key={emotion.name} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${emotion.color}`} />
              <span className="text-sm font-medium">{emotion.name}</span>
            </div>
            <span className="text-sm text-muted-foreground">{emotion.value}%</span>
          </div>
          <Progress value={emotion.value} className="h-2" />
        </div>
      ))}
    </div>
  )
}
