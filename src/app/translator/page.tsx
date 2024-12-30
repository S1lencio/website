"use client";

import React, { useRef, useState } from "react";

const languages = [
    { name: "Afrikaans", code: "af" },
    { name: "Albanian", code: "sq" },
    { name: "Amharic", code: "am" },
    { name: "Arabic", code: "ar" },
    { name: "Armenian", code: "hy" },
    { name: "Azerbaijani", code: "az" },
    { name: "Bashkir", code: "ba" },
    { name: "Belarusian", code: "be" },
    { name: "Bengali (Bangla)", code: "bn" },
    { name: "Bosnian", code: "bs" },
    { name: "Breton", code: "br" },
    { name: "Bulgarian", code: "bg" },
    { name: "Burmese", code: "my" },
    { name: "Catalan", code: "ca" },
    { name: "Chinese", code: "zh" },
    { name: "Croatian", code: "hr" },
    { name: "Czech", code: "cs" },
    { name: "Danish", code: "da" },
    { name: "Dutch", code: "nl" },
    { name: "Estonian", code: "et" },
    { name: "Finnish", code: "fi" },
    { name: "French", code: "fr" },
    { name: "Fula, Fulah, Pulaar, Pular", code: "ff" },
    { name: "Galician", code: "gl" },
    { name: "Gaelic (Scottish)", code: "gd" },
    { name: "Georgian", code: "ka" },
    { name: "German", code: "de" },
    { name: "Greek", code: "el" },
    { name: "Gujarati", code: "gu" },
    { name: "Haitian Creole", code: "ht" },
    { name: "Hausa", code: "ha" },
    { name: "Hebrew", code: "he" },
    { name: "Hindi", code: "hi" },
    { name: "Hungarian", code: "hu" },
    { name: "Icelandic", code: "is" },
    { name: "Igbo", code: "ig" },
    { name: "Indonesian", code: "id" },
    { name: "Irish", code: "ga" },
    { name: "Italian", code: "it" },
    { name: "Japanese", code: "ja" },
    { name: "Javanese", code: "jv" },
    { name: "Kannada", code: "kn" },
    { name: "Kazakh", code: "kk" },
    { name: "Khmer", code: "km" },
    { name: "Korean", code: "ko" },
    { name: "Lao", code: "lo" },
    { name: "Latvian (Lettish)", code: "lv" },
    { name: "Lingala", code: "ln" },
    { name: "Lithuanian", code: "lt" },
    { name: "Luganda, Ganda", code: "lg" },
    { name: "Luxembourgish", code: "lb" },
    { name: "Macedonian", code: "mk" },
    { name: "Malagasy", code: "mg" },
    { name: "Malay", code: "ms" },
    { name: "Malayalam", code: "ml" },
    { name: "Marathi", code: "mr" },
    { name: "Mongolian", code: "mn" },
    { name: "Nepali", code: "ne" },
    { name: "Norwegian", code: "no" },
    { name: "Occitan", code: "oc" },
    { name: "Oriya", code: "or" },
    { name: "Pashto, Pushto", code: "ps" },
    { name: "Persian (Farsi)", code: "fa" },
    { name: "Polish", code: "pl" },
    { name: "Portuguese", code: "pt" },
    { name: "Punjabi (Eastern)", code: "pa" },
    { name: "Romanian", code: "ro" },
    { name: "Russian", code: "ru" },
    { name: "Serbian", code: "sr" },
    { name: "Setswana", code: "tn" },
    { name: "Sindhi", code: "sd" },
    { name: "Sinhalese", code: "si" },
    { name: "Siswati", code: "ss" },
    { name: "Slovak", code: "sk" },
    { name: "Slovenian", code: "sl" },
    { name: "Somali", code: "so" },
    { name: "Spanish", code: "es" },
    { name: "Sundanese", code: "su" },
    { name: "Swahili (Kiswahili)", code: "sw" },
    { name: "Swati", code: "ss" },
    { name: "Swedish", code: "sv" },
    { name: "Tagalog", code: "tl" },
    { name: "Tamil", code: "ta" },
    { name: "Thai", code: "th" },
    { name: "Turkish", code: "tr" },
    { name: "Ukrainian", code: "uk" },
    { name: "Urdu", code: "ur" },
    { name: "Uzbek", code: "uz" },
    { name: "Vietnamese", code: "vi" },
    { name: "Welsh", code: "cy" },
    { name: "Wolof", code: "wo" },
    { name: "Western Frisian", code: "fy" },
    { name: "Xhosa", code: "xh" },
    { name: "Yiddish", code: "yi" },
    { name: "Yoruba", code: "yo" },
    { name: "Zulu", code: "zu" },
];

const TranslateAllPage = () => {
    const [text, setText] = useState("");
    const [translations, setTranslations] = useState<{ language: string; translation: string }[]>([]);
    const [loading, setLoading] = useState(false);
    const [completedTranslations, setCompletedTranslations] = useState(0); // Track the number of completed translations
    const cancelled = useRef(false);

    const handleTranslate = async () => {
        if (!text.trim()) return;
        if (text.length > 100) {
            alert("Text exceeds 100 characters. Please shorten it.");
            return;
        }

        setLoading(true);
        cancelled.current = false; // Reset cancellation state
        setTranslations([]); // Clear previous translations
        setCompletedTranslations(0); // Reset count

        const fetchTranslation = async (name: string, code: string, delay: number): Promise<{ language: string; translation?: string }> => {
            return new Promise((resolve) => {
                setTimeout(async () => {
                    try {
                        const res = await fetch(
                            `https://translate.devlencio.workers.dev/?text=${encodeURIComponent(text)}&target=${code}`
                        );
                        const data = await res.json();

                        resolve({
                            language: name,
                            translation: res.ok && data.translation ? data.translation : undefined,
                        });
                    } catch {
                        resolve({ language: name }); // Fallback on any error
                    }
                }, delay);
            });
        };

        try {
            for (let i = 0; i < languages.length; i++) {
                if (cancelled.current) break;

                const { name, code } = languages[i];
                const delay = (i % 4) * 250; // Stagger requests
                const response = await fetchTranslation(name, code, delay);

                // Add translation or "failed" message to the list
                setTranslations((prev) => [
                    ...prev,
                    {
                        language: response.language,
                        translation: response.translation ?? "Failed",
                    },
                ]);

                setCompletedTranslations((prev) => prev + 1);
            }
        } catch (error) {
            console.error("Translation error:", error);
        } finally {
            setLoading(false);
        }
    };


    const handleCancel = () => {
        cancelled.current = true; // Set the cancellation flag
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-center">Translate to (totally) all Languages</h1>

            {/* Textarea Input */}
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to translate..."
                className="block mx-auto w-1/2 h-24 px-4 py-2 border rounded-lg focus:outline-none bg-neutral-700 mb-4 resize-none"
            />


            {/* Translate Button */}
            <button
                onClick={handleTranslate}
                className="block mx-auto w-1/2 px-4 py-2 bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-600 transition-all"
                disabled={loading}
            >
                {loading ? "Translating..." : "Translate"}
            </button>

            {loading && (
                <button
                    onClick={handleCancel}
                    className="block mx-auto w-1/2 mt-2 px-4 py-2 bg-red-500 text-white rounded-lg"
                    disabled={cancelled.current}
                >
                    {cancelled.current ? "Cancelled" : "Cancel Translation"}
                </button>
            )}

            {/* Display Translations or Errors */}
            {translations.length > 0 && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold mb-2">
                        Translations: {completedTranslations}/{languages.length}
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {translations.map(({ language, translation }, index) => (
                            <li
                                key={index}
                                className={`flex justify-between items-center p-4 rounded-lg shadow-lg ${
                                    translation === "Failed"
                                        ? "bg-neutral-800 text-red-500"
                                        : "bg-neutral-800"
                                }`}
                            >
                                <div className="flex flex-col">
                                    <strong className="text-sm font-semibold">{language}:</strong>
                                    <span className="text-sm">{translation}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );

};

export default TranslateAllPage;