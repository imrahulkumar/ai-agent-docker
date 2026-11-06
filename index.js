import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "http://localhost:12434/engines/v1",
  apiKey: "1", // Docker doesn't require a real API key locally
});

async function main() {
  const response = await client.chat.completions.create({
    model: "ai/gemma4", // Replace with your pulled model name
    messages: [
      {
        role: "user",
        content: "Hey, I am Rahul Kumar",
      },
    ],
  });

  console.log(response.choices[0].message.content);
}

main();