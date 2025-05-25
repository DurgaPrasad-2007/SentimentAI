import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"

export const maxDuration = 30

export async function POST(req: Request) {
  try {
    const { text, analysisType = "comprehensive" } = await req.json()

    if (!text) {
      return Response.json({ error: "Text is required" }, { status: 400 })
    }

    const systemPrompt = `You are an advanced sentiment analysis AI. Analyze the provided text and return a detailed sentiment analysis in the following JSON format:

{
  "overall_sentiment": "positive|negative|neutral",
  "confidence": 0.95,
  "emotions": {
    "joy": 0.8,
    "anger": 0.1,
    "fear": 0.05,
    "sadness": 0.05,
    "surprise": 0.0,
    "disgust": 0.0
  },
  "sentiment_score": 0.75,
  "key_phrases": ["phrase1", "phrase2"],
  "analysis": "Detailed explanation of the sentiment analysis",
  "recommendations": ["recommendation1", "recommendation2"]
}

Provide accurate sentiment scores between -1 (very negative) and 1 (very positive). Emotion scores should sum to 1.0.`

    const result = streamText({
      model: openai("gpt-4o"),
      system: systemPrompt,
      prompt: `Analyze this text for sentiment: "${text}"`,
    })

    return result.toDataStreamResponse()
  } catch (error) {
    console.error("Analysis error:", error)
    return Response.json({ error: "Analysis failed" }, { status: 500 })
  }
}
