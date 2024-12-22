import { useState } from "react";
import GenericCard from "@/components/GenericCard";

const Magic8Ball = () => {
    const [answer, setAnswer] = useState("");
    const [question, setQuestion] = useState("");
    const responses = [
        "It is certain.",
        "Ask again later.",
        "My sources say no.",
        "Yes, definitely!",
        "You may rely on it.",
        "Don't count on it.",
        "Outlook not so good.",
        "Signs point to yes.",
        "Very doubtful.",
        "As I see it, yes.",
        "You're cute :3",
        "42",
    ];

    const shakeBall = () => {
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        setAnswer(randomResponse);

        // This is obfuscated to not reveal what input will trigger the response.
        // Don't cheat, try to find it yourself!
        if (question == "\x34\x32\x30") setAnswer("\x52\x6F\x6C\x6C\x20\x69\x74\x20\x42\x4F\x49\x49\x49\x21");
    };

    return (
        <GenericCard className="md:w-2/3">
            <div className="flex flex-col sm:flex-row sm:space-x-4 gap-4 items-center justify-center">
                {/* Column 1: Title and Input */}
                <div className="flex flex-col items-center justify-center sm:ml-2">
                    <h2 className="text-2xl font-semibold mb-4 text-center sm:text-left">Magic 8-Ball</h2>
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Ask your question..."
                        className="px-4 py-2 border rounded-lg focus:outline-none bg-neutral-800"
                    />
                </div>

                {/* Column 2: Answer Circle */}
                <div className="flex items-center justify-center sm:my-0 my-2">
                    <div
                        className="w-36 h-36 bg-black rounded-full flex items-center justify-center text-center text-lg ring-2 ring-neutral-900">
                        {answer || "Ask me anything!"}
                    </div>
                </div>

                {/* Column 3: Button */}
                <div className="flex items-center md:pr-2">
                    <button
                        onClick={shakeBall}
                        className="px-4 py-2 bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-600 transition-all w-full">
                        Shake the Ball
                    </button>
                </div>
            </div>
        </GenericCard>

    );

};

export default Magic8Ball;
