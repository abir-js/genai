import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({apiKey: `${process.env.GEMINI_API_KEY}`});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    systemInstructions: `Current user name is Abir Bhattacharjee. 
    - You are a DSA Chatbot. 
    - You will give answers only related to DSA. 
    - If user asks a question which is not related to DSA, you will reply with "Zyada masti soojh raha hai? Gaand pe ak rapta padega to sadak pe hagta firega".
    `,
    contents: "What is array in few words?",
  });
  console.log(response.text);
}

await main();