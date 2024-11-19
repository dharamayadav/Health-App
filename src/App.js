import React, { useState } from "react";
import SpeechToText from "./components/SpeechToText";
import translateText from "./components/Translate";
import SpeakButton from "./components/SpeakButton";
import LanguageSelector from "./components/LanguageSelector";

function App() {
  const [originalText, setOriginalText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [inputLang, setInputLang] = useState("en");
  const [outputLang, setOutputLang] = useState("es");

  const handleTranslation = async () => {
    const translation = await translateText(originalText, inputLang, outputLang);
    setTranslatedText(translation);
  };

  return (
    <div className="m-xxl-5">
      <div className="navbar navbar-expand-lg bg-body-tertiary">
        <h1 className="large-text m-1">Healthcare Translation App</h1>
      </div>
      <div className="container border-3 card mt-5 m-5">
          <SpeechToText setTranscript={setOriginalText} />
          <LanguageSelector inputLang={inputLang} setInputLang={setInputLang} outputLang={outputLang} setOutputLang={setOutputLang} />

          <button type="button" class="btn btn-outline-primary m-lg-2" onClick={handleTranslation}>Translate</button>
          <p>Original: {originalText}</p>
          <p>Translation: {translatedText}</p>
          <SpeakButton text={translatedText} />
      </div>
    </div>
  );
}

export default App;
