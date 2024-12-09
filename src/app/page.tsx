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
            <div className="flex justify-between">
                <Magic8Ball/>
                <CounterCard/>
            </div>
        </div>
    );
}
