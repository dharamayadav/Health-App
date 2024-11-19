import axios from "axios";

const translateText = async (text, inputLang, outputLang) => {
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;

    if (!apiKey) {
        console.error("API key is missing.");
        return "API key missing";
    }

    try {
        const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
            model: "text-davinci-003",
            prompt: `Translate the following text from ${inputLang} to ${outputLang}: ${text}`,
            max_tokens: 100
        },
        { headers: { Authorization: `Bearer ${apiKey}` } }
        );
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error("Translation error:", error);
        return "Translation failed.";
    }
};

export default translateText;
