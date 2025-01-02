import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY);
export async function POST(request) {
  const formData = await request.formData();
  const audioFile = formData.get("audio");

  const model = genAI.getGenerativeModel9({
    model: "gemini-1.5-flash",
  });
  try {
    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: "audio/wav",
          data: audioFile,
        },
      },
      {
        text: "Please transcribe the audio",
      },
    ]);
    console.log(result.response.text());
    return Response.json({ result: result.response.text() });
  } catch (error) {
    return Response.json({ error });
  }
}
