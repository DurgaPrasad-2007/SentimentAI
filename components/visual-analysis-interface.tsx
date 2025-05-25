"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ImageIcon, Upload, Camera, Eye, Smile, Frown, Meh, Heart, AlertTriangle } from "lucide-react"

export function VisualAnalysisInterface() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [analysisResult, setAnalysisResult] = useState<any>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  // Mock analysis result for demo
  const mockAnalysis = {
    overall_sentiment: "positive",
    confidence: 0.89,
    facial_emotions: {
      happiness: 0.7,
      surprise: 0.15,
      neutral: 0.1,
      sadness: 0.03,
      anger: 0.02,
      fear: 0.0,
    },
    visual_cues: {
      eye_contact: 0.85,
      smile_intensity: 0.72,
      body_language: "open",
      engagement_level: 0.88,
    },
    demographics: {
      age_range: "25-35",
      gender: "female",
      ethnicity: "diverse",
    },
    scene_analysis: {
      setting: "professional",
      lighting: "good",
      image_quality: 0.92,
      face_detection_count: 1,
    },
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
        // Simulate analysis
        setIsAnalyzing(true)
        setTimeout(() => {
          setAnalysisResult(mockAnalysis)
          setIsAnalyzing(false)
        }, 3000)
      }
      reader.readAsDataURL(file)
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

  const getEmotionIcon = (emotion: string, intensity: number) => {
    if (intensity < 0.1) return <Meh className="h-4 w-4 text-gray-400" />

    switch (emotion) {
      case "happiness":
        return <Smile className="h-4 w-4 text-green-600" />
      case "sadness":
        return <Frown className="h-4 w-4 text-blue-600" />
      case "anger":
        return <AlertTriangle className="h-4 w-4 text-red-600" />
      case "surprise":
        return <Eye className="h-4 w-4 text-purple-600" />
      default:
        return <Heart className="h-4 w-4 text-pink-600" />
    }
  }

  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center space-x-2">
        <ImageIcon className="h-6 w-6 text-blue-600" />
        <h1 className="text-2xl font-bold">Visual Sentiment Analysis</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Camera className="h-5 w-5" />
              <span>Image Input</span>
            </CardTitle>
            <CardDescription>Upload an image or take a photo for facial emotion and sentiment analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Image Upload */}
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                {selectedImage ? (
                  <div className="space-y-4">
                    <img
                      src={selectedImage || "/placeholder.svg"}
                      alt="Selected"
                      className="max-w-full h-48 object-cover mx-auto rounded-lg"
                    />
                    {isAnalyzing && (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                        <span className="text-sm text-blue-600">Analyzing facial expressions...</span>
                      </div>
                    )}
                  </div>
                ) : (
                  <>
                    <Upload className="h-8 w-8 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">Drag and drop an image, or click to browse</p>
                  </>
                )}
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="image-upload" />
                <Button asChild variant="outline">
                  <label htmlFor="image-upload" className="cursor-pointer">
                    {selectedImage ? "Change Image" : "Choose Image"}
                  </label>
                </Button>
              </div>
            </div>

            {/* Camera Capture */}
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or</span>
                </div>
              </div>
              <Button variant="outline" className="w-full" disabled>
                <Camera className="h-4 w-4 mr-2" />
                Capture from Camera (Coming Soon)
              </Button>
            </div>

            {/* Supported Features */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Supported Analysis</h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                <div>• Facial emotion detection</div>
                <div>• Sentiment classification</div>
                <div>• Body language analysis</div>
                <div>• Engagement measurement</div>
                <div>• Demographics estimation</div>
                <div>• Scene context analysis</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="h-5 w-5" />
              <span>Analysis Results</span>
            </CardTitle>
            <CardDescription>Comprehensive visual sentiment and emotion analysis</CardDescription>
          </CardHeader>
          <CardContent>
            {!analysisResult ? (
              <div className="flex items-center justify-center h-[400px] text-muted-foreground">
                Upload an image to see visual sentiment analysis
              </div>
            ) : (
              <Tabs defaultValue="emotions" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="emotions">Emotions</TabsTrigger>
                  <TabsTrigger value="sentiment">Sentiment</TabsTrigger>
                  <TabsTrigger value="cues">Visual Cues</TabsTrigger>
                  <TabsTrigger value="scene">Scene</TabsTrigger>
                </TabsList>

                <TabsContent value="emotions" className="space-y-4">
                  <div className="space-y-3">
                    {Object.entries(analysisResult.facial_emotions).map(([emotion, score]) => (
                      <div key={emotion} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {getEmotionIcon(emotion, score as number)}
                            <span className="text-sm capitalize">{emotion}</span>
                          </div>
                          <span className="text-sm font-medium">{((score as number) * 100).toFixed(1)}%</span>
                        </div>
                        <Progress value={(score as number) * 100} />
                      </div>
                    ))}
                  </div>
                </TabsContent>

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

                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Demographics</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex justify-between">
                          <span className="text-xs text-muted-foreground">Age Range</span>
                          <Badge variant="outline">{analysisResult.demographics.age_range}</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-muted-foreground">Gender</span>
                          <Badge variant="outline">{analysisResult.demographics.gender}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="cues" className="space-y-4">
                  <div className="space-y-3">
                    {Object.entries(analysisResult.visual_cues).map(([cue, value]) => (
                      <div key={cue} className="flex items-center justify-between">
                        <span className="text-sm capitalize">{cue.replace("_", " ")}</span>
                        <Badge variant="outline">
                          {typeof value === "number" ? (value * 100).toFixed(0) + "%" : value}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="scene" className="space-y-4">
                  <div className="space-y-3">
                    {Object.entries(analysisResult.scene_analysis).map(([aspect, value]) => (
                      <div key={aspect} className="flex items-center justify-between">
                        <span className="text-sm capitalize">{aspect.replace("_", " ")}</span>
                        <Badge variant="outline">
                          {typeof value === "number"
                            ? aspect === "face_detection_count"
                              ? value
                              : (value * 100).toFixed(0) + "%"
                            : value}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Advanced Features */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Geo-Emotional Mapping</CardTitle>
            <CardDescription>Track emotional patterns across different regions and demographics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="h-32 bg-gradient-to-r from-blue-100 to-green-100 rounded-lg flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Interactive emotion heatmap visualization</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center">
                  <div className="text-green-600 font-medium">North America</div>
                  <div className="text-muted-foreground">Positive: 78%</div>
                </div>
                <div className="text-center">
                  <div className="text-yellow-600 font-medium">Europe</div>
                  <div className="text-muted-foreground">Neutral: 65%</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-600 font-medium">Asia</div>
                  <div className="text-muted-foreground">Mixed: 72%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Customer Journey Mapping</CardTitle>
            <CardDescription>Sentiment analysis across user lifecycle stages</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Onboarding</span>
                <div className="flex items-center space-x-2">
                  <Progress value={85} className="w-16 h-2" />
                  <span className="text-xs text-green-600">85%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Product Usage</span>
                <div className="flex items-center space-x-2">
                  <Progress value={72} className="w-16 h-2" />
                  <span className="text-xs text-green-600">72%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Support Interaction</span>
                <div className="flex items-center space-x-2">
                  <Progress value={45} className="w-16 h-2" />
                  <span className="text-xs text-yellow-600">45%</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Renewal/Churn</span>
                <div className="flex items-center space-x-2">
                  <Progress value={38} className="w-16 h-2" />
                  <span className="text-xs text-red-600">38%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
