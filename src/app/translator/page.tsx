"use client";

import React, { useRef, useState } from "react";

const languages = [
    { name: "Abkhaz", code: "ab" },
    { name: "Acehnese", code: "ace" },
    { name: "Acholi", code: "ach" },
    { name: "Afrikaans", code: "af" },
    { name: "Albanian", code: "sq" },
    { name: "Alur", code: "alz" },
    { name: "Amharic", code: "am" },
    { name: "Arabic", code: "ar" },
    { name: "Armenian", code: "hy" },
    { name: "Assamese", code: "as" },
    { name: "Awadhi", code: "awa" },
    { name: "Aymara", code: "ay" },
    { name: "Azerbaijani", code: "az" },
    { name: "Balinese", code: "ban" },
    { name: "Bambara", code: "bm" },
    { name: "Bashkir", code: "ba" },
    { name: "Basque", code: "eu" },
    { name: "Batak Karo", code: "btx" },
    { name: "Batak Simalungun", code: "bts" },
    { name: "Batak Toba", code: "bbc" },
    { name: "Belarusian", code: "be" },
    { name: "Bemba", code: "bem" },
    { name: "Bengali", code: "bn" },
    { name: "Betawi", code: "bew" },
    { name: "Bhojpuri", code: "bho" },
    { name: "Bikol", code: "bik" },
    { name: "Bosnian", code: "bs" },
    { name: "Breton", code: "br" },
    { name: "Bulgarian", code: "bg" },
    { name: "Buryat", code: "bua" },
    { name: "Cantonese", code: "yue" },
    { name: "Catalan", code: "ca" },
    { name: "Cebuano", code: "ceb" },
    { name: "Chichewa (Nyanja)", code: "ny" },
    { name: "Chinese (Simplified)", code: "zh-CN" },
    { name: "Chinese (Traditional)", code: "zh-TW" },
    { name: "Chuvash", code: "cv" },
    { name: "Corsican", code: "co" },
    { name: "Crimean Tatar", code: "crh" },
    { name: "Croatian", code: "hr" },
    { name: "Czech", code: "cs" },
    { name: "Danish", code: "da" },
    { name: "Dinka", code: "din" },
    { name: "Divehi", code: "dv" },
    { name: "Dogri", code: "doi" },
    { name: "Dombe", code: "dov" },
    { name: "Dutch", code: "nl" },
    { name: "Dzongkha", code: "dz" },
    { name: "English", code: "en" },
    { name: "Esperanto", code: "eo" },
    { name: "Estonian", code: "et" },
    { name: "Ewe", code: "ee" },
    { name: "Fijian", code: "fj" },
    { name: "Filipino (Tagalog)", code: "fil" },
    { name: "Finnish", code: "fi" },
    { name: "French", code: "fr" },
    { name: "French (French)", code: "fr-FR" },
    { name: "French (Canadian)", code: "fr-CA" },
    { name: "Frisian", code: "fy" },
    { name: "Fulfulde", code: "ff" },
    { name: "Ga", code: "gaa" },
    { name: "Galician", code: "gl" },
    { name: "Ganda (Luganda)", code: "lg" },
    { name: "Georgian", code: "ka" },
    { name: "German", code: "de" },
    { name: "Greek", code: "el" },
    { name: "Guarani", code: "gn" },
    { name: "Gujarati", code: "gu" },
    { name: "Haitian Creole", code: "ht" },
    { name: "Hakha Chin", code: "cnh" },
    { name: "Hausa", code: "ha" },
    { name: "Hawaiian", code: "haw" },
    { name: "Hebrew", code: "iw" },
    { name: "Hiligaynon", code: "hil" },
    { name: "Hindi", code: "hi" },
    { name: "Hmong", code: "hmn" },
    { name: "Hungarian", code: "hu" },
    { name: "Hunsrik", code: "hrx" },
    { name: "Icelandic", code: "is" },
    { name: "Igbo", code: "ig" },
    { name: "Iloko", code: "ilo" },
    { name: "Indonesian", code: "id" },
    { name: "Irish", code: "ga" },
    { name: "Italian", code: "it" },
    { name: "Japanese", code: "ja" },
    { name: "Javanese", code: "jw" },
    { name: "Kannada", code: "kn" },
    { name: "Kapampangan", code: "pam" },
    { name: "Kazakh", code: "kk" },
    { name: "Khmer", code: "km" },
    { name: "Kiga", code: "cgg" },
    { name: "Kinyarwanda", code: "rw" },
    { name: "Kituba", code: "ktu" },
    { name: "Konkani", code: "gom" },
    { name: "Korean", code: "ko" },
    { name: "Krio", code: "kri" },
    { name: "Kurdish (Kurmanji)", code: "ku" },
    { name: "Kurdish (Sorani)", code: "ckb" },
    { name: "Kyrgyz", code: "ky" },
    { name: "Lao", code: "lo" },
    { name: "Latgalian", code: "ltg" },
    { name: "Latin", code: "la" },
    { name: "Latvian", code: "lv" },
    { name: "Ligurian", code: "lij" },
    { name: "Limburgan", code: "li" },
    { name: "Lingala", code: "ln" },
    { name: "Lithuanian", code: "lt" },
    { name: "Lombard", code: "lmo" },
    { name: "Luo", code: "luo" },
    { name: "Luxembourgish", code: "lb" },
    { name: "Macedonian", code: "mk" },
    { name: "Maithili", code: "mai" },
    { name: "Makassar", code: "mak" },
    { name: "Malagasy", code: "mg" },
    { name: "Malay", code: "ms" },
    { name: "Malay (Jawi)", code: "ms-Arab" },
    { name: "Malayalam", code: "ml" },
    { name: "Maltese", code: "mt" },
    { name: "Maori", code: "mi" },
    { name: "Marathi", code: "mr" },
    { name: "Meadow Mari", code: "chm" },
    { name: "Meiteilon (Manipuri)", code: "mni-Mtei" },
    { name: "Minang", code: "min" },
    { name: "Mizo", code: "lus" },
    { name: "Mongolian", code: "mn" },
    { name: "Myanmar (Burmese)", code: "my" },
    { name: "Ndebele (South)", code: "nr" },
    { name: "Nepalbhasa (Newari)", code: "new" },
    { name: "Nepali", code: "ne" },
    { name: "Northern Sotho (Sepedi)", code: "nso" },
    { name: "Norwegian", code: "no" },
    { name: "Nuer", code: "nus" },
    { name: "Occitan", code: "oc" },
    { name: "Odia (Oriya)", code: "or" },
    { name: "Oromo", code: "om" },
    { name: "Pangasinan", code: "pag" },
    { name: "Papiamento", code: "pap" },
    { name: "Pashto", code: "ps" },
    { name: "Persian", code: "fa" },
    { name: "Polish", code: "pl" },
    { name: "Portuguese", code: "pt" },
    { name: "Portuguese (Portugal)", code: "pt-PT" },
    { name: "Portuguese (Brazil)", code: "pt-BR" },
    { name: "Punjabi", code: "pa" },
    { name: "Punjabi (Shahmukhi)", code: "pa-Arab" },
    { name: "Quechua", code: "qu" },
    { name: "Romani", code: "rom" },
    { name: "Romanian", code: "ro" },
    { name: "Rundi", code: "rn" },
    { name: "Russian", code: "ru" },
    { name: "Samoan", code: "sm" },
    { name: "Sango", code: "sg" },
    { name: "Sanskrit", code: "sa" },
    { name: "Scots Gaelic", code: "gd" },
    { name: "Serbian", code: "sr" },
    { name: "Sesotho", code: "st" },
    { name: "Seychellois Creole", code: "crs" },
    { name: "Shan", code: "shn" },
    { name: "Shona", code: "sn" },
    { name: "Sicilian", code: "scn" },
    { name: "Silesian", code: "szl" },
    { name: "Sindhi", code: "sd" },
    { name: "Sinhala (Sinhalese)", code: "si" },
    { name: "Slovak", code: "sk" },
    { name: "Slovenian", code: "sl" },
    { name: "Somali", code: "so" },
    { name: "Spanish", code: "es" },
    { name: "Sundanese", code: "su" },
    { name: "Swahili", code: "sw" },
    { name: "Swati", code: "ss" },
    { name: "Swedish", code: "sv" },
    { name: "Tajik", code: "tg" },
    { name: "Tamil", code: "ta" },
    { name: "Tatar", code: "tt" },
    { name: "Telugu", code: "te" },
    { name: "Tetum", code: "tet" },
    { name: "Thai", code: "th" },
    { name: "Tigrinya", code: "ti" },
    { name: "Tsonga", code: "ts" },
    { name: "Tswana", code: "tn" },
    { name: "Turkish", code: "tr" },
    { name: "Turkmen", code: "tk" },
    { name: "Twi (Akan)", code: "ak" },
    { name: "Ukrainian", code: "uk" },
    { name: "Urdu", code: "ur" },
    { name: "Uyghur", code: "ug" },
    { name: "Uzbek", code: "uz" },
    { name: "Vietnamese", code: "vi" },
    { name: "Welsh", code: "cy" },
    { name: "Xhosa", code: "xh" },
    { name: "Yiddish", code: "yi" },
    { name: "Yoruba", code: "yo" },
    { name: "Yucatec Maya", code: "yua" },
    { name: "Zulu", code: "zu" }
];


const TranslateAllPage = () => {
    const [text, setText] = useState("");
    const [translations, setTranslations] = useState<{ language: string; translation: string }[]>([]);
    const [loading, setLoading] = useState(false);
    const [completedTranslations, setCompletedTranslations] = useState(0); // Track the number of completed translations
    const cancelled = useRef(false);

    const handleTranslate = async () => {
        if (!text.trim()) return;

        setLoading(true);
        cancelled.current = false; // Reset cancellation state
        setTranslations([]); // Clear previous translations
        setCompletedTranslations(0); // Reset count

        const fetchTranslation = async (name: string, code: string): Promise<{ language: string; translation?: string }> => {
            return new Promise((resolve) => {
                setTimeout(async () => {
                    try {
                        const res = await fetch(
                            `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${code}&dt=t&q=${encodeURIComponent(text)}`
                        );

                        const data = await res.json();

                        const translation = data[0]?.[0]?.[0];

                        resolve({
                            language: name,
                            translation: res.ok && translation ? translation : undefined,
                        });
                    } catch {
                        resolve({ language: name }); // Fallback on any error
                    }
                });
            });
        };

        try {
            for (let i = 0; i < languages.length; i++) {
                if (cancelled.current) break;

                const { name, code } = languages[i];
                const response = await fetchTranslation(name, code);

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
            <h1 className="text-2xl font-bold mb-4 text-center">Translate-inator 9000</h1>

            {/* Textarea Input */}
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text to translate..."
                className="block mx-auto md:w-1/2 h-24 px-4 py-2 border rounded-lg focus:outline-hidden bg-neutral-700 mb-4 resize-none"
            />


            {/* Translate Button */}
            <button
                onClick={handleTranslate}
                className="block mx-auto md:w-1/2 px-4 py-2 bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-600 transition-all disabled:bg-indigo-600"
                disabled={loading}
            >
                {loading ? "Translating..." : "Translate"}
            </button>

            {loading && (
                <button
                    onClick={handleCancel}
                    className="block mx-auto md:w-1/2 mt-2 px-4 py-2 bg-red-500 hover:bg-red-600 transition-all rounded-lg"
                >
                    Cancel Translation
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