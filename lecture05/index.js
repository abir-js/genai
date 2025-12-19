import { GoogleGenAI, Type } from "@google/genai";

//* crypto currency tool
async function cryptoCurrency({ coin }) {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&ids=${coin}`
  );
  const data = await response.json();
  return data;
}

//* weather tool
async function weatherInformation({ city }) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=d6a3bcd7a43c4ed59c2155208252404&q=${city}&aqi=no`
  );
  const data = await response.json();

  return data;
}

//* crypto function ke information
const cryptoInfo = {
  name: "cryptoCurrency",
  description:
    "Get current crypro currency information like bitcoin, ethereum etc",
  parameters: {
    type: Type.OBJECT,
    properties: {
      coin: {
        type: Type.STRING,
        description:
          "It is the name of the crypto currency like bitcoin, ethereum etc",
        required: true,
      },
    },
  },
};

//* weather function ke information
const weatherInfo = {
  name: "weatherInformation",
  description: "Get current weather information like temperature, humidity etc",
  parameters: {
    type: Type.OBJECT,
    properties: {
      city: {
        type: Type.STRING,
        description:
          "It is the name of the city like Delhi, Mumbai etc of which you want to get weather information",
        required: true,
      },
    },
  },
};

const tools = [
  {
    cryptoInfo,
    weatherInfo,
  },
];

async function runAgent() {
  while (true) {
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents,
      config: { tools },
    });
  }
}
