"use client";

import React from "react";
import Magic8Ball from "@/components/8ballCard";
import QuoteCard from "@/components/QuoteCard";
import MainPageTextCard from "@/components/MainPageTextCard";

export default function Page() {
    return (
        <div>
            <MainPageTextCard />
            <QuoteCard />
            <Magic8Ball />
        </div>
    );
}
