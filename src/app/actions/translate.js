"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
async function translateText(text, targetLanguage, languageFrom = "") {
  const genAI = new GoogleGenerativeAI(
    process.env.GOOGLE_GENERATIVE_AI_API_KEY
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = languageFrom
    ? `Translate from ${languageFrom} to ${targetLanguage}: ${text}`
    : `Detect the langugae of the text and translate it into ${targetLanguage}: ${text}`;
  const additional_prompt =
    "Just return the translated text. Do no add additional description such as `Here are the translations`";
  try {
    const result = await model.generateContent(prompt + additional_prompt);
    console.log(result.response.text());
    return result.response.text();
  } catch (e) {
    console.log(e);
  }
  return "couldn't load translation";
}
export async function translateText(formData) {
  const text = formData.get("text");
  const targetLanguage = formData.get("targetLanguage");
  const languageFrom = formData.get("languageFr");

  const translation = await translateText(text, targetLanguage, languageFrom);
  return { translation };
}
