import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { SentimentChart } from "@/components/sentiment-chart"
import { EmotionHeatmap } from "@/components/emotion-heatmap"
import { RealtimeMetrics } from "@/components/realtime-metrics"
import { TrendingUp, Activity, Users, FileText, Mic } from "lucide-react"

export function DashboardContent() {
  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Sentiment</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+0.73</div>
            <p className="text-xs text-muted-foreground">+12% from last week</p>
            <Progress value={73} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Analyses</CardTitle>
            <Activity className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">+23% from last hour</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Sources</CardTitle>
            <Users className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Connected platforms</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processing Speed</CardTitle>
            <Activity className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">847ms</div>
            <p className="text-xs text-muted-foreground">Average response time</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Charts */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Sentiment Trends</CardTitle>
            <CardDescription>Real-time sentiment analysis across all data sources</CardDescription>
          </CardHeader>
          <CardContent>
            <SentimentChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Emotion Heatmap</CardTitle>
            <CardDescription>Distribution of emotions detected in the last 24 hours</CardDescription>
          </CardHeader>
          <CardContent>
            <EmotionHeatmap />
          </CardContent>
        </Card>
      </div>

      {/* Real-time Metrics and Recent Activity */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Real-time Processing</CardTitle>
            <CardDescription>Live sentiment analysis from connected data streams</CardDescription>
          </CardHeader>
          <CardContent>
            <RealtimeMetrics />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest sentiment analysis results</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-3">
              <FileText className="h-4 w-4 text-blue-600" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Customer Review Analysis</p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Positive
              </Badge>
            </div>

            <div className="flex items-center space-x-3">
              <Mic className="h-4 w-4 text-green-600" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Voice Call Sentiment</p>
                <p className="text-xs text-muted-foreground">5 minutes ago</p>
              </div>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                Neutral
              </Badge>
            </div>

            <div className="flex items-center space-x-3">
              <FileText className="h-4 w-4 text-blue-600" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Social Media Monitoring</p>
                <p className="text-xs text-muted-foreground">8 minutes ago</p>
              </div>
              <Badge variant="secondary" className="bg-red-100 text-red-800">
                Negative
              </Badge>
            </div>

            <div className="flex items-center space-x-3">
              <FileText className="h-4 w-4 text-blue-600" />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">Email Campaign Analysis</p>
                <p className="text-xs text-muted-foreground">12 minutes ago</p>
              </div>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Positive
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
