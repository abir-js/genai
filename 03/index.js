import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "count to 10 starting from 11",
  });
  console.log(response.text);
}

main();
