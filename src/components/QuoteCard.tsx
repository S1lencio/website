import { useEffect, useState } from "react";

const QuoteCard = () => {

    const [quote, setQuote] = useState("Fetching today's fact...");
    const [permalink, setPermalink] = useState("");

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/today?language=en");
                const data = await res.json();
                setQuote(data.text);
                setPermalink(data.permalink);
            } catch {
                setQuote("Could not fetch today's fact. Please try again later.");
            }
        };

        fetchQuote();
    }, []);

    return (
        <div className="bg-neutral-800 p-6 rounded-lg shadow-lg mt-8">
            <h2 className="text-center text-2xl font-semibold">Fact of the day</h2>
            <div className="text-center text-lg italic mt-6 flex items-center justify-center">
                <span className="text-4xl mr-2 text-indigo-500">&ldquo;</span>
                <span>{quote}</span>
                <span className="text-4xl ml-2 text-indigo-500">&rdquo;</span>
            </div>
            {permalink && (
                <div className="text-center mt-4">
                    <a
                        href={permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-500 hover:text-indigo-600 transition-colors"
                    >
                        Source
                    </a>
                </div>
            )}
            <noscript>
                <div className="text-center mt-2 text-red-500">
                    JavaScript is disabled in your browser. This feature will not work.
                </div>
            </noscript>
        </div>
    );

};

export default QuoteCard;
