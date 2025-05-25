"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Key, Zap, Code, Webhook, Shield } from "lucide-react"

export function ApiDocumentation() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Code className="h-6 w-6 text-blue-600" />
          <h1 className="text-2xl font-bold">API Documentation</h1>
        </div>
        <Button>
          <Key className="h-4 w-4 mr-2" />
          Generate API Key
        </Button>
      </div>

      {/* API Overview */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rate Limit</CardTitle>
            <Zap className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,000</div>
            <p className="text-xs text-muted-foreground">requests per minute</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Response Time</CardTitle>
            <Zap className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">~200ms</div>
            <p className="text-xs text-muted-foreground">average latency</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Uptime</CardTitle>
            <Shield className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.9%</div>
            <p className="text-xs text-muted-foreground">SLA guarantee</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="endpoints" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
          <TabsTrigger value="authentication">Auth</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
          <TabsTrigger value="sdks">SDKs</TabsTrigger>
        </TabsList>

        <TabsContent value="endpoints" className="space-y-6">
          {/* Text Analysis Endpoint */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Badge className="bg-green-100 text-green-800">POST</Badge>
                  <span>/v1/analyze/text</span>
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard("curl -X POST https://api.sentimentai.com/v1/analyze/text")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>Analyze sentiment and emotions in text content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Request Body</h4>
                <pre className="bg-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
                  {`{
  "text": "I love this product! It's amazing.",
  "language": "en",
  "include_emotions": true,
  "include_keywords": true
}`}
                </pre>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Response</h4>
                <pre className="bg-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
                  {`{
  "sentiment": "positive",
  "confidence": 0.95,
  "score": 0.8,
  "emotions": {
    "joy": 0.7,
    "trust": 0.2,
    "anticipation": 0.1
  },
  "keywords": ["love", "amazing"],
  "processing_time": 120
}`}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Audio Analysis Endpoint */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Badge className="bg-green-100 text-green-800">POST</Badge>
                  <span>/v1/analyze/audio</span>
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard("curl -X POST https://api.sentimentai.com/v1/analyze/audio")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>Analyze sentiment from audio files or voice recordings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Request (Multipart Form)</h4>
                <pre className="bg-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
                  {`Content-Type: multipart/form-data

audio_file: [binary audio data]
format: "wav" | "mp3" | "m4a"
include_transcript: true
language: "en"`}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Visual Analysis Endpoint */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Badge className="bg-green-100 text-green-800">POST</Badge>
                  <span>/v1/analyze/visual</span>
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard("curl -X POST https://api.sentimentai.com/v1/analyze/visual")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>Analyze facial emotions and visual sentiment from images</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Request (Multipart Form)</h4>
                <pre className="bg-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
                  {`Content-Type: multipart/form-data

image_file: [binary image data]
include_demographics: true
include_scene_analysis: true
face_detection: true`}
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Batch Analysis Endpoint */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <Badge className="bg-blue-100 text-blue-800">POST</Badge>
                  <span>/v1/analyze/batch</span>
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard("curl -X POST https://api.sentimentai.com/v1/analyze/batch")}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>Process multiple items in a single request for efficiency</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Request Body</h4>
                <pre className="bg-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
                  {`{
  "items": [
    {
      "id": "item_1",
      "type": "text",
      "content": "This is great!"
    },
    {
      "id": "item_2", 
      "type": "text",
      "content": "Not satisfied with service"
    }
  ],
  "callback_url": "https://your-app.com/webhook"
}`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="authentication" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>API Authentication</CardTitle>
              <CardDescription>Secure your API requests with proper authentication</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">API Key Authentication</h4>
                <p className="text-sm text-muted-foreground mb-3">Include your API key in the Authorization header:</p>
                <pre className="bg-gray-100 p-3 rounded-lg text-sm">
                  {`Authorization: Bearer your_api_key_here
Content-Type: application/json`}
                </pre>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Rate Limiting</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Free tier: 100 requests/hour</p>
                  <p>• Pro tier: 1,000 requests/minute</p>
                  <p>• Enterprise: Custom limits</p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Error Codes</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Badge variant="outline">401</Badge>
                    <span className="text-sm">Unauthorized - Invalid API key</span>
                  </div>
                  <div className="flex justify-between">
                    <Badge variant="outline">429</Badge>
                    <span className="text-sm">Rate limit exceeded</span>
                  </div>
                  <div className="flex justify-between">
                    <Badge variant="outline">422</Badge>
                    <span className="text-sm">Invalid request format</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="webhooks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Webhook className="h-5 w-5" />
                <span>Webhook Configuration</span>
              </CardTitle>
              <CardDescription>Receive real-time notifications when sentiment thresholds are crossed</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Webhook Setup</h4>
                <pre className="bg-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
                  {`POST /v1/webhooks

{
  "url": "https://your-app.com/sentiment-webhook",
  "events": ["sentiment.negative", "sentiment.threshold"],
  "filters": {
    "sentiment_score": { "lt": -0.5 },
    "confidence": { "gt": 0.8 }
  }
}`}
                </pre>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Webhook Payload Example</h4>
                <pre className="bg-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
                  {`{
  "event": "sentiment.negative",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "analysis_id": "analysis_123",
    "sentiment": "negative",
    "score": -0.7,
    "confidence": 0.92,
    "source": "customer_review",
    "content": "Product quality is disappointing"
  }
}`}
                </pre>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Available Events</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Badge variant="outline">sentiment.positive</Badge>
                    <span className="text-sm">Positive sentiment detected</span>
                  </div>
                  <div className="flex justify-between">
                    <Badge variant="outline">sentiment.negative</Badge>
                    <span className="text-sm">Negative sentiment detected</span>
                  </div>
                  <div className="flex justify-between">
                    <Badge variant="outline">sentiment.threshold</Badge>
                    <span className="text-sm">Custom threshold crossed</span>
                  </div>
                  <div className="flex justify-between">
                    <Badge variant="outline">analysis.completed</Badge>
                    <span className="text-sm">Batch analysis finished</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sdks" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>JavaScript/Node.js SDK</CardTitle>
                <CardDescription>Official SDK for JavaScript and Node.js applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Installation</h4>
                  <pre className="bg-gray-100 p-3 rounded-lg text-sm">{`npm install @sentimentai/sdk`}</pre>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Usage</h4>
                  <pre className="bg-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
                    {`import { SentimentAI } from '@sentimentai/sdk'

const client = new SentimentAI({
  apiKey: 'your_api_key'
})

const result = await client.analyzeText({
  text: 'I love this product!'
})

console.log(result.sentiment) // 'positive'`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Python SDK</CardTitle>
                <CardDescription>Official SDK for Python applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Installation</h4>
                  <pre className="bg-gray-100 p-3 rounded-lg text-sm">{`pip install sentimentai-python`}</pre>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Usage</h4>
                  <pre className="bg-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
                    {`from sentimentai import SentimentAI

client = SentimentAI(api_key='your_api_key')

result = client.analyze_text(
    text='I love this product!'
)

print(result.sentiment)  # 'positive'`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Embedding SDK</CardTitle>
                <CardDescription>Embed sentiment widgets directly into your web applications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Script Include</h4>
                  <pre className="bg-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
                    {`<script src="https://cdn.sentimentai.com/widget.js"></script>`}
                  </pre>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2">Widget Embed</h4>
                  <pre className="bg-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
                    {`<div id="sentiment-widget" 
     data-api-key="your_api_key"
     data-theme="light"
     data-type="dashboard">
</div>

<script>
  SentimentAI.init('#sentiment-widget')
</script>`}
                  </pre>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>REST API Examples</CardTitle>
                <CardDescription>Direct API usage examples in various languages</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">cURL</h4>
                  <pre className="bg-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
                    {`curl -X POST https://api.sentimentai.com/v1/analyze/text \\
  -H "Authorization: Bearer your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{"text": "I love this product!"}'`}
                  </pre>
                </div>
                <Button variant="outline" className="w-full">
                  View More Examples
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
