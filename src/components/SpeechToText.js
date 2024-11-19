import React from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

const SpeechToText = ({ setTranscript }) => {
    const { transcript, resetTranscript, listening } = useSpeechRecognition();

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return <p>Browser does not support speech recognition.</p>;
    }

    return (
        <div className="container">
            <p className="ml-3 m-lg-2">
                <button type="button" class="btn btn-outline-primary m-lg-2" onClick={SpeechRecognition.startListening}>Start Listening</button>
                <button type="button" class="btn btn-outline-primary m-lg-2" onClick={SpeechRecognition.stopListening}>Stop Listening</button>
                <button  type="button" class="btn btn-outline-primary" onClick={resetTranscript}>Reset</button>
            </p>
        <p>{listening ? "Listening..." : "Click Start to Speak"}</p>
        <p>Transcript: {transcript}</p>
        </div>
    );
};

export default SpeechToText;
