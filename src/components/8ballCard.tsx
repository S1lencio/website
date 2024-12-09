import { useState } from "react";

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
    };

    return (
        <div className="flex justify-between items-center bg-neutral-800 p-4 rounded-lg shadow-lg mt-8">
            <div className="flex flex-col items-center justify-center ml-4">
                <h2 className="text-2xl font-semibold mb-4">Magic 8-Ball</h2>
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask your question..."
                    className="px-4 py-2 border rounded-lg focus:outline-none bg-neutral-800"
                />
            </div>
            <div
                className="ml-6 mr-6 w-36 h-36 bg-black rounded-full flex items-center text-center text-lg ring-2 ring-neutral-900">
                {answer || "Ask me anything!"}
            </div>
            <button
                onClick={shakeBall}
                className="px-4 py-2 bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-600 transition-all mr-4"
            >
                Shake the Ball
            </button>
        </div>
    );
};

export default Magic8Ball;
