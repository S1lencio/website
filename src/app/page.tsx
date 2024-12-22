"use client";

import React from "react";
import Magic8Ball from "@/components/8ballCard";
import QuoteCard from "@/components/QuoteCard";
import MainPageTextCard from "@/components/MainPageTextCard";
import CounterCard from "@/components/CounterCard";

export default function Page() {
    return (
        <div>
            <MainPageTextCard/>

            <noscript>
                <div className="text-center mt-8 text-red-500">
                    JavaScript is disabled in your browser. These features will not work.
                </div>
            </noscript>

            <QuoteCard/>

            {/* Adjust the flex container for responsiveness */}
            <div className="flex flex-col md:flex-row md:space-x-4">
                <Magic8Ball />
                <CounterCard />
            </div>
        </div>
    );
}
