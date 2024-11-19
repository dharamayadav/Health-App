import React from "react";

const SpeakButton = ({ text }) => {
    const handleSpeak = () => {
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
    };

    return <button type="button" class="btn btn-outline-primary m-lg-2" onClick={handleSpeak}>Play Translation</button>;
};

export default SpeakButton;
