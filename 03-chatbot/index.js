import { GoogleGenAI } from "@google/genai";
import "dotenv/config";
import rl from "readline-sync";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

async function main() {
  const chat = ai.chats.create({
    model: "gemini-flash-latest",
    history: [],
    config: {
      systemInstruction: `
        You are a helpful DSA assistant that helps users understand data structures and algorithms.
        - You provide clear explanations and examples to help users grasp complex concepts.
        - You can break down algorithms into step-by-step instructions.
        - You can provide code snippets in various programming languages to illustrate concepts.
        - If a user asks question on other topic than DSA, you politely inform them that you are specialized in DSA and suggest they ask a relevant question.
      `,
    },
  });

  while (true) {
    const userInput = rl.question(
      "Ask a DSA question (or type 'exit' to quit): ",
    );
    if (userInput.toLowerCase() === "exit") {
      console.log("Goodbye!");
      break;
    }

    const response = await chat.sendMessage({
      message: userInput,
    });

    console.log("DSA Assistant:", response.text);
  }
}

await main();
