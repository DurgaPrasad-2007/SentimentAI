"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mic, MicOff, Upload, Volume2, AudioWaveformIcon as Waveform } from "lucide-react"

export function AudioAnalysisInterface() {
  const [isRecording, setIsRecording] = useState(false)
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [analysisResult, setAnalysisResult] = useState<any>(null)

  // Mock analysis result for demo
  const mockAnalysis = {
    overall_sentiment: "positive",
    confidence: 0.82,
    emotions: {
      joy: 0.5,
      anger: 0.1,
      fear: 0.1,
      sadness: 0.1,
      surprise: 0.1,
      disgust: 0.1,
    },
    voice_characteristics: {
      tone: "friendly",
      pace: "moderate",
      volume: "normal",
      clarity: 0.9,
    },
    transcript:
      "Hello, I'm really excited about this new product. It's exactly what I was looking for and the customer service has been excellent.",
    key_insights: ["Positive customer experience", "Product satisfaction", "Service quality appreciation"],
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setAudioFile(file)
      // Simulate analysis
      setTimeout(() => {
        setAnalysisResult(mockAnalysis)
      }, 2000)
    }
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
    if (!isRecording) {
      // Start recording simulation
      setTimeout(() => {
        setIsRecording(false)
        setAnalysisResult(mockAnalysis)
      }, 5000)
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
        <Mic className="h-6 w-6 text-blue-600" />
        <h1 className="text-2xl font-bold">Audio Sentiment Analysis</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Volume2 className="h-5 w-5" />
              <span>Audio Input</span>
            </CardTitle>
            <CardDescription>Record live audio or upload a file for sentiment analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Live Recording */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Live Recording</h3>
              <div className="flex flex-col items-center space-y-4">
                <Button
                  onClick={toggleRecording}
                  variant={isRecording ? "destructive" : "default"}
                  size="lg"
                  className="w-32 h-32 rounded-full"
                >
                  {isRecording ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
                </Button>
                <p className="text-sm text-muted-foreground">
                  {isRecording ? "Recording... Click to stop" : "Click to start recording"}
                </p>
                {isRecording && (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-red-600">Recording in progress</span>
                  </div>
                )}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or</span>
              </div>
            </div>

            {/* File Upload */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Upload Audio File</h3>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                <p className="text-sm text-muted-foreground mb-2">Drag and drop an audio file, or click to browse</p>
                <input type="file" accept="audio/*" onChange={handleFileUpload} className="hidden" id="audio-upload" />
                <Button asChild variant="outline">
                  <label htmlFor="audio-upload" className="cursor-pointer">
                    Choose File
                  </label>
                </Button>
                {audioFile && <p className="text-sm text-green-600 mt-2">File uploaded: {audioFile.name}</p>}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Waveform className="h-5 w-5" />
              <span>Analysis Results</span>
            </CardTitle>
            <CardDescription>Voice sentiment analysis and audio characteristics</CardDescription>
          </CardHeader>
          <CardContent>
            {!analysisResult ? (
              <div className="flex items-center justify-center h-[400px] text-muted-foreground">
                Record audio or upload a file to see analysis results
              </div>
            ) : (
              <Tabs defaultValue="sentiment" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
                  <TabsTrigger value="emotions">Emotions</TabsTrigger>
                  <TabsTrigger value="voice">Voice</TabsTrigger>
                  <TabsTrigger value="transcript">Transcript</TabsTrigger>
                </TabsList>

                <TabsContent value="sentiment" className="space-y-4">
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

                <TabsContent value="voice" className="space-y-4">
                  <div className="space-y-3">
                    {Object.entries(analysisResult.voice_characteristics).map(([characteristic, value]) => (
                      <div key={characteristic} className="flex items-center justify-between">
                        <span className="text-sm capitalize">{characteristic}</span>
                        <Badge variant="outline">
                          {typeof value === "number" ? (value * 100).toFixed(0) + "%" : value}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="transcript" className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Transcript</h4>
                      <p className="text-sm text-muted-foreground p-3 bg-gray-50 rounded-lg">
                        {analysisResult.transcript}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Insights</h4>
                      <ul className="space-y-1">
                        {analysisResult.key_insights.map((insight: string, index: number) => (
                          <li key={index} className="text-sm text-muted-foreground flex items-start">
                            <span className="mr-2">•</span>
                            {insight}
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
