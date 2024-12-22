import { useEffect, useState } from "react";
import GenericCard from "@/components/GenericCard";

const CounterCard = () => {
    const [count, setCount] = useState("-1");
    const [isLoading, setIsLoading] = useState(false);

    const fetchCount = async () => {
        try {
            const res = await fetch("https://counter.devlencio.workers.dev/get");
            const data = await res.json();
            setCount(data.count);
        } catch {
            setCount("-1");
        }
    };

    const increment = async () => {
        if (isLoading) return;  // Prevent multiple simultaneous clicks

        setIsLoading(true);  // Set loading state to true to disable button
        const res = await fetch("https://counter.devlencio.workers.dev/increment");
        const data = await res.json();
        setCount(data.count);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchCount();
    }, []);

    return (
        <GenericCard className="flex flex-col items-center md:w-1/3">
            <h2 className="text-2xl font-semibold whitespace-nowrap">Big number go uppies</h2>
            <h2 className="text-lg mt-4">{count}</h2>
            <button
                onClick={increment} disabled={isLoading}
                className="mt-4 px-4 py-2 bg-indigo-500 rounded-lg shadow-md hover:bg-indigo-600 transition-all disabled:bg-red-500 disabled:cursor-not-allowed"
            >
                The button
            </button>
        </GenericCard>
    );
}

export default CounterCard;