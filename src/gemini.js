const api="AIzaSyB8HVsV_GsUXXHpI280acyjOx9eOexvQxU"
import{
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold
} from "@google/generative-ai"
const genAI=new GoogleGenerativeAI(api);
const model=genAI.getGenerativeModel({
    model:"gemini-2.5-flash",
});
const generativeConfig={
    temperature:1,
    topP:0.95,
    topK:40,
    maxOutputTokens:8192,
    responseMimeType:"text/plain",
};
async function run(prompt){
    const chatSession=model.startChat({
        generativeConfig,
        history:[
        ],
    });
    const result=await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text();
    }

export default run;