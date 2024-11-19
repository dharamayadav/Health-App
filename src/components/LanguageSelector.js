import React from "react";

const LanguageSelector = ({ inputLang, setInputLang, outputLang, setOutputLang }) => (
    <div>
        <label className="m-3">
        Input Language:
            <select value={inputLang} onChange={(e) => setInputLang(e.target.value)} className="m-1">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="hi">Hindi</option>
                
            </select>
        </label>
        <label>
        Output Language:
        <select value={outputLang} onChange={(e) => setOutputLang(e.target.value)} className="m-1">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="hi">Hindi</option>
        </select>
        </label>
    </div>
);

export default LanguageSelector;