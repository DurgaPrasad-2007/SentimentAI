"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Settings, Bell, Shield, Globe, Brain, AlertTriangle } from "lucide-react"

export function SettingsInterface() {
  const [sentimentThreshold, setSentimentThreshold] = useState([70])
  const [confidenceThreshold, setConfidenceThreshold] = useState([80])

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center space-x-2">
        <Settings className="h-6 w-6 text-blue-600" />
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="models">AI Models</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Organization Settings</CardTitle>
              <CardDescription>Manage your organization's basic information and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="org-name">Organization Name</Label>
                  <Input id="org-name" defaultValue="Acme Corporation" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="utc">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc">UTC</SelectItem>
                      <SelectItem value="est">Eastern Time</SelectItem>
                      <SelectItem value="pst">Pacific Time</SelectItem>
                      <SelectItem value="cet">Central European Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="default-language">Default Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="zh">Chinese</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Real-time Processing</Label>
                  <p className="text-sm text-muted-foreground">Enable real-time sentiment analysis</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Data Retention</Label>
                  <p className="text-sm text-muted-foreground">Automatically delete old analysis data</p>
                </div>
                <Select defaultValue="90">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30">30 days</SelectItem>
                    <SelectItem value="90">90 days</SelectItem>
                    <SelectItem value="365">1 year</SelectItem>
                    <SelectItem value="never">Never</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Analysis Preferences</CardTitle>
              <CardDescription>Configure default analysis settings and thresholds</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label>Sentiment Threshold ({sentimentThreshold[0]}%)</Label>
                <p className="text-sm text-muted-foreground">Minimum confidence level for sentiment classification</p>
                <Slider
                  value={sentimentThreshold}
                  onValueChange={setSentimentThreshold}
                  max={100}
                  step={5}
                  className="w-full"
                />
              </div>

              <div className="space-y-3">
                <Label>Confidence Threshold ({confidenceThreshold[0]}%)</Label>
                <p className="text-sm text-muted-foreground">Minimum confidence level for analysis results</p>
                <Slider
                  value={confidenceThreshold}
                  onValueChange={setConfidenceThreshold}
                  max={100}
                  step={5}
                  className="w-full"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Include Emotion Analysis</Label>
                  <p className="text-sm text-muted-foreground">Analyze emotions in addition to sentiment</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Keyword Extraction</Label>
                  <p className="text-sm text-muted-foreground">Extract key phrases from analyzed content</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>Smart Alerts & Thresholds</span>
              </CardTitle>
              <CardDescription>Configure custom alerts for sentiment and emotion thresholds</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Negative Sentiment Alert</h3>
                    <p className="text-sm text-muted-foreground">
                      Alert when negative sentiment &gt; 20% in last 2 hours
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-red-100 text-red-800">Active</Badge>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">High Volume Alert</h3>
                    <p className="text-sm text-muted-foreground">Alert when analysis volume exceeds 1000/hour</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-blue-100 text-blue-800">Active</Badge>
                    <Switch defaultChecked />
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Low Confidence Alert</h3>
                    <p className="text-sm text-muted-foreground">Alert when confidence drops below 60%</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">Inactive</Badge>
                    <Switch />
                  </div>
                </div>
              </div>

              <Button className="w-full">
                <Bell className="h-4 w-4 mr-2" />
                Create Custom Alert
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notification Channels</CardTitle>
              <CardDescription>Choose how and where you receive alerts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive alerts via email</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Slack Integration</Label>
                  <p className="text-sm text-muted-foreground">Post alerts to Slack channels</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Webhook Notifications</Label>
                  <p className="text-sm text-muted-foreground">Send alerts to custom endpoints</p>
                </div>
                <Switch />
              </div>

              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <Input id="webhook-url" placeholder="https://your-app.com/webhook" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="models" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="h-5 w-5" />
                <span>AI Model Configuration</span>
              </CardTitle>
              <CardDescription>Configure and fine-tune AI models for your specific needs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label>Primary Text Model</Label>
                  <Select defaultValue="gpt-4">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gpt-4">GPT-4 (Recommended)</SelectItem>
                      <SelectItem value="gpt-3.5">GPT-3.5 Turbo</SelectItem>
                      <SelectItem value="bert">BERT Large</SelectItem>
                      <SelectItem value="custom">Custom Fine-tuned Model</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Audio Analysis Model</Label>
                  <Select defaultValue="whisper">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="whisper">OpenAI Whisper</SelectItem>
                      <SelectItem value="google">Google Speech-to-Text</SelectItem>
                      <SelectItem value="azure">Azure Cognitive Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Visual Analysis Model</Label>
                  <Select defaultValue="affectiva">
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="affectiva">Affectiva Emotion AI</SelectItem>
                      <SelectItem value="azure-face">Azure Face API</SelectItem>
                      <SelectItem value="google-vision">Google Vision AI</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Custom Model Training</Label>
                  <p className="text-sm text-muted-foreground">Fine-tune models with your labeled data</p>
                </div>
                <Button variant="outline">
                  <Brain className="h-4 w-4 mr-2" />
                  Start Training
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Predictive Sentiment Forecasting</Label>
                  <p className="text-sm text-muted-foreground">Enable time series models for future sentiment trends</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Model Performance</CardTitle>
              <CardDescription>Monitor and optimize your AI model performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">94.2%</div>
                  <p className="text-sm text-muted-foreground">Text Accuracy</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">89.7%</div>
                  <p className="text-sm text-muted-foreground">Audio Accuracy</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">91.3%</div>
                  <p className="text-sm text-muted-foreground">Visual Accuracy</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>Integration Settings</span>
              </CardTitle>
              <CardDescription>Manage your connected platforms and data sources</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Globe className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Salesforce CRM</h3>
                      <p className="text-sm text-muted-foreground">Sync sentiment data with customer records</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800">Connected</Badge>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Globe className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Slack Workspace</h3>
                      <p className="text-sm text-muted-foreground">Real-time alerts and team notifications</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800">Connected</Badge>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Globe className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">HubSpot</h3>
                      <p className="text-sm text-muted-foreground">Marketing automation with sentiment insights</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">Available</Badge>
                    <Button size="sm">Connect</Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Data Sync Frequency</Label>
                <Select defaultValue="realtime">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="realtime">Real-time</SelectItem>
                    <SelectItem value="hourly">Every hour</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Security & Compliance</span>
              </CardTitle>
              <CardDescription>Manage security settings and compliance requirements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-muted-foreground">Require 2FA for all team members</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>IP Allowlist</Label>
                    <p className="text-sm text-muted-foreground">Restrict access to specific IP addresses</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Data Encryption</Label>
                    <p className="text-sm text-muted-foreground">End-to-end encryption for all data</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Enabled</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Audit Logging</Label>
                    <p className="text-sm text-muted-foreground">Log all user actions and API calls</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Data Residency</Label>
                <Select defaultValue="us">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="eu">European Union</SelectItem>
                    <SelectItem value="asia">Asia Pacific</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Compliance Certifications</h3>
                <div className="grid gap-2 md:grid-cols-3">
                  <Badge className="bg-green-100 text-green-800 justify-center py-2">SOC 2 Type II</Badge>
                  <Badge className="bg-green-100 text-green-800 justify-center py-2">GDPR Compliant</Badge>
                  <Badge className="bg-green-100 text-green-800 justify-center py-2">HIPAA Ready</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5" />
                <span>Data Privacy Controls</span>
              </CardTitle>
              <CardDescription>Configure data handling and privacy settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Automatic Data Anonymization</Label>
                  <p className="text-sm text-muted-foreground">Remove PII from analyzed content</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Data Sharing Consent</Label>
                  <p className="text-sm text-muted-foreground">Require explicit consent for data processing</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Right to be Forgotten</Label>
                  <p className="text-sm text-muted-foreground">Enable data deletion requests</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">Reset to Defaults</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  )
}
