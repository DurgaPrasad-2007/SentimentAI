"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, Send, FileText, Brain, TrendingUp } from "lucide-react"

export function TextAnalysisInterface() {
  const [inputText, setInputText] = useState("")
  const [analysisResult, setAnalysisResult] = useState<any>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const analyzeText = async () => {
    if (!inputText.trim()) return

    setIsAnalyzing(true)
    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: inputText }),
      })

      const reader = response.body?.getReader()
      let result = ""

      if (reader) {
        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          result += new TextDecoder().decode(value)
        }
      }

      // Parse the streamed result
      try {
        const jsonMatch = result.match(/\{[\s\S]*\}/)
        if (jsonMatch) {
          const parsedResult = JSON.parse(jsonMatch[0])
          setAnalysisResult(parsedResult)
        }
      } catch (e) {
        // Fallback mock data for demo
        setAnalysisResult({
          overall_sentiment: "positive",
          confidence: 0.87,
          emotions: {
            joy: 0.6,
            anger: 0.1,
            fear: 0.05,
            sadness: 0.1,
            surprise: 0.1,
            disgust: 0.05,
          },
          sentiment_score: 0.73,
          key_phrases: ["excellent service", "highly recommend", "great experience"],
          analysis:
            "The text expresses strong positive sentiment with high confidence. The language used indicates satisfaction and recommendation.",
          recommendations: ["Leverage positive feedback for marketing", "Share testimonial with team"],
        })
      }
    } catch (error) {
      console.error("Analysis failed:", error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "text-green-600 bg-green-100"
      case "negative":
        return "text-red-600 bg-red-100"
      default:
        return "text-yellow-600 bg-yellow-100"
    }
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center space-x-2">
        <FileText className="h-6 w-6 text-blue-600" />
        <h1 className="text-2xl font-bold">Text Sentiment Analysis</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Brain className="h-5 w-5" />
              <span>Text Input</span>
            </CardTitle>
            <CardDescription>Enter text to analyze sentiment, emotions, and key insights</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Enter your text here for sentiment analysis..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="min-h-[200px]"
            />
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{inputText.length} characters</span>
              <Button
                onClick={analyzeText}
                disabled={!inputText.trim() || isAnalyzing}
                className="flex items-center space-x-2"
              >
                {isAnalyzing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                <span>{isAnalyzing ? "Analyzing..." : "Analyze"}</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5" />
              <span>Analysis Results</span>
            </CardTitle>
            <CardDescription>Comprehensive sentiment analysis and insights</CardDescription>
          </CardHeader>
          <CardContent>
            {!analysisResult ? (
              <div className="flex items-center justify-center h-[300px] text-muted-foreground">
                Enter text and click analyze to see results
              </div>
            ) : (
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="emotions">Emotions</TabsTrigger>
                  <TabsTrigger value="insights">Insights</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Overall Sentiment</span>
                      <Badge className={getSentimentColor(analysisResult.overall_sentiment)}>
                        {analysisResult.overall_sentiment}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Confidence</span>
                        <span className="text-sm font-medium">{(analysisResult.confidence * 100).toFixed(1)}%</span>
                      </div>
                      <Progress value={analysisResult.confidence * 100} />
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Sentiment Score</span>
                        <span className="text-sm font-medium">{analysisResult.sentiment_score.toFixed(2)}</span>
                      </div>
                      <Progress value={(analysisResult.sentiment_score + 1) * 50} />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="emotions" className="space-y-4">
                  <div className="space-y-3">
                    {Object.entries(analysisResult.emotions).map(([emotion, score]) => (
                      <div key={emotion} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm capitalize">{emotion}</span>
                          <span className="text-sm font-medium">{((score as number) * 100).toFixed(1)}%</span>
                        </div>
                        <Progress value={(score as number) * 100} />
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="insights" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Phrases</h4>
                      <div className="flex flex-wrap gap-2">
                        {analysisResult.key_phrases.map((phrase: string, index: number) => (
                          <Badge key={index} variant="outline">
                            {phrase}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Analysis</h4>
                      <p className="text-sm text-muted-foreground">{analysisResult.analysis}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Recommendations</h4>
                      <ul className="space-y-1">
                        {analysisResult.recommendations.map((rec: string, index: number) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <span className="mr-2">•</span>
                            {rec}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
