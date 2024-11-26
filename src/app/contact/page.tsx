"use client";

import React from "react";
import contactLinks from "./tiles";
import ContactCard from "@/components/ContactCard";

export default function ContactsPage() {
    return (
        <div>
            <h1 className="text-2xl">Contact Me</h1>
            <p className="mt-2">Feel free to reach out through any of the following platforms:</p>

            {/* Static Grid of Contact Cards */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {contactLinks.map((contact, index) => (
                    <ContactCard
                        key={index}
                        platform={contact.platform}
                        url={contact.url}
                        icon={contact.icon}
                        name={contact.name}
                    />
                ))}
            </div>
        </div>
    );
}
