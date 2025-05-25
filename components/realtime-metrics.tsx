"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Activity } from "lucide-react"

export function RealtimeMetrics() {
  const [metrics, setMetrics] = useState([
    { source: "Twitter", sentiment: "positive", confidence: 0.87, timestamp: new Date() },
    { source: "Customer Reviews", sentiment: "positive", confidence: 0.92, timestamp: new Date() },
    { source: "Support Tickets", sentiment: "neutral", confidence: 0.76, timestamp: new Date() },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      const sources = ["Twitter", "Customer Reviews", "Support Tickets", "Social Media", "Email", "Chat"]
      const sentiments = ["positive", "negative", "neutral"]
      const newMetric = {
        source: sources[Math.floor(Math.random() * sources.length)],
        sentiment: sentiments[Math.floor(Math.random() * sentiments.length)],
        confidence: Math.random() * 0.4 + 0.6, // 0.6 to 1.0
        timestamp: new Date(),
      }

      setMetrics((prev) => [newMetric, ...prev.slice(0, 9)]) // Keep last 10 items
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "bg-green-100 text-green-800"
      case "negative":
        return "bg-red-100 text-red-800"
      default:
        return "bg-yellow-100 text-yellow-800"
    }
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center space-x-2 mb-4">
        <Activity className="h-4 w-4 text-blue-600" />
        <span className="text-sm font-medium">Live Processing Stream</span>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
      </div>

      {metrics.map((metric, index) => (
        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Badge variant="outline">{metric.source}</Badge>
            <Badge className={getSentimentColor(metric.sentiment)}>{metric.sentiment}</Badge>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium">{(metric.confidence * 100).toFixed(0)}%</div>
            <div className="text-xs text-muted-foreground">{metric.timestamp.toLocaleTimeString()}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
