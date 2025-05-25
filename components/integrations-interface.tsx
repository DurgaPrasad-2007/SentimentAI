import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Globe, Users, MessageSquare, BarChart3, Zap, Shield, CheckCircle, AlertCircle } from "lucide-react"

const integrations = [
  {
    name: "Salesforce CRM",
    description: "Sync customer sentiment data with your CRM records",
    icon: Users,
    status: "connected",
    category: "CRM",
  },
  {
    name: "Twitter API",
    description: "Monitor social media sentiment in real-time",
    icon: MessageSquare,
    status: "connected",
    category: "Social Media",
  },
  {
    name: "Slack",
    description: "Get sentiment alerts in your team channels",
    icon: MessageSquare,
    status: "available",
    category: "Communication",
  },
  {
    name: "Google Analytics",
    description: "Correlate sentiment with website behavior",
    icon: BarChart3,
    status: "connected",
    category: "Analytics",
  },
  {
    name: "HubSpot",
    description: "Integrate sentiment insights with marketing automation",
    icon: Users,
    status: "available",
    category: "CRM",
  },
  {
    name: "Zendesk",
    description: "Analyze customer support ticket sentiment",
    icon: Users,
    status: "connected",
    category: "Support",
  },
]

export function IntegrationsInterface() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Globe className="h-6 w-6 text-blue-600" />
          <h1 className="text-2xl font-bold">Integrations</h1>
        </div>
        <Button>
          <Zap className="h-4 w-4 mr-2" />
          Browse All Integrations
        </Button>
      </div>

      {/* Integration Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Connected</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">4</div>
            <p className="text-xs text-muted-foreground">Active integrations</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available</CardTitle>
            <AlertCircle className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">2</div>
            <p className="text-xs text-muted-foreground">Ready to connect</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Data Synced</CardTitle>
            <BarChart3 className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">847K</div>
            <p className="text-xs text-muted-foreground">Records processed today</p>
          </CardContent>
        </Card>
      </div>

      {/* Integrations Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration, index) => (
          <Card key={index} className="relative">
            <CardHeader>
              <div className="flex items-center justify-between">
                <integration.icon className="h-8 w-8 text-blue-600" />
                <Badge
                  variant={integration.status === "connected" ? "default" : "secondary"}
                  className={integration.status === "connected" ? "bg-green-100 text-green-800" : ""}
                >
                  {integration.status}
                </Badge>
              </div>
              <CardTitle className="text-lg">{integration.name}</CardTitle>
              <CardDescription>{integration.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Badge variant="outline">{integration.category}</Badge>
                {integration.status === "connected" ? (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">Active</span>
                    <Switch checked={true} />
                  </div>
                ) : (
                  <Button size="sm">Connect</Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* API Access */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-5 w-5" />
            <span>API Access</span>
          </CardTitle>
          <CardDescription>Integrate SentimentAI with your custom applications using our REST API</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="text-sm font-medium">API Endpoint</h4>
              <code className="block p-2 bg-gray-100 rounded text-sm">https://api.sentimentai.com/v1/analyze</code>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Rate Limit</h4>
              <p className="text-sm text-muted-foreground">1,000 requests per minute</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">View Documentation</Button>
            <Button variant="outline">Generate API Key</Button>
          </div>
        </CardContent>
      </Card>

      {/* Security & Compliance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>Security & Compliance</span>
          </CardTitle>
          <CardDescription>Enterprise-grade security for all your integrations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm">GDPR Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm">End-to-End Encryption</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
