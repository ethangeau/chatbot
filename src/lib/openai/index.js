const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

// console.log(OPENAI_API_KEY);

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const getResponse = async (prompt) => {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });
    // console.log(response);

    if (response.data.choices.length > 0) {
      return response.data.choices[0].message.content;
    } else {
      return "";
    }
  } catch (error) {
    console.error("Error fetching completion:", error);
    return "";
  }
};
