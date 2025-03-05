"use client";

import React from "react";
import Magic8Ball from "@/components/8ballCard";
import QuoteCard from "@/components/QuoteCard";
import MainPageTextCard from "@/components/MainPageTextCard";
import CounterCard from "@/components/CounterCard";
import MicroButtonCard from "@/components/88x31Card";
import WebringCard from "@/components/WebringCard";

export default function Page() {
    return (
        <div>
            <MainPageTextCard/>

            <noscript>
                <div className="text-center mt-8 text-red-500">
                    JavaScript is disabled. Due to this website being deployed statically, some functions will not work correctly.
                </div>
            </noscript>

            <QuoteCard/>

            <div className="flex flex-col md:flex-row md:space-x-4">
                <Magic8Ball />
                <CounterCard />
            </div>

            <MicroButtonCard />
            <WebringCard />
        </div>
    );
}
