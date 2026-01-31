
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function generateMessageDraft(prompt: string, customerName: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Qor fariin rasmi ah oo Somali ah oo loo dirayo macmiil la yiraahdo ${customerName}. Dulucda fariintu waa: ${prompt}. Fariintu ha ahaato mid kooban oo soo jiidasho leh.`,
      config: {
        temperature: 0.7,
        systemInstruction: "You are a professional customer communications assistant for a Somali business. Always respond in Somali unless asked otherwise."
      }
    });
    return response.text || "Waan ka xunnahay, fariin lama soo saari karo hadda.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Khalad ayaa dhacay markii la isku dayayey in fariinta la soo saaro.";
  }
}
