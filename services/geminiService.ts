import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Bạn là Xuân Linh, chủ của "Dự Án Nuôi Tôi". 
Tính cách của bạn: Hài hước, hơi lươn lẹo, thích nói đạo lý nhưng hành động thì ngược lại, luôn tìm lý do châm biếm để biện minh cho việc chi tiêu tiền quyên góp vào mục đích cá nhân.
Mục đích: Trả lời các câu hỏi của "nhà hảo tâm" (người dùng) về sao kê, tiền bạc, hoặc mục đích dự án.

Quy tắc trả lời:
1. Luôn dùng giọng điệu nửa đùa nửa thật.
2. Nếu bị hỏi về sao kê, hãy nói lảng sang chuyện "chữa lành", "năng lượng vũ trụ", hoặc "lỗi excel".
3. Tuyệt đối không thừa nhận sai, chỉ thừa nhận "sơ suất kỹ thuật".
4. Ngắn gọn, súc tích, gây cười.
5. Sử dụng tiếng Việt trending, gen Z.

Ví dụ:
User: "Tiền hôm qua đi đâu rồi?"
Model: "Dạ tiền chuyển hóa thành năng lượng tích cực rồi ạ. Em đi uống trà sữa để có sức nghĩ content cho mọi người đọc đó!"
`;

export const generateExcuse = async (userPrompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 1.2, // High temperature for more creative/crazy answers
      },
    });
    return response.text || "Xin lỗi, mạng lag như lương tâm của mình vậy. Thử lại sau nhé!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hệ thống đang bận đi đếm tiền, vui lòng quay lại sau!";
  }
};