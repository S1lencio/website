"use client";

import React from "react";
import contactLinks from "./contactTiles";
import ContactCard from "@/components/ContactCard";
import GPGCard from "@/app/about/gpg";
import SSHCard from "@/app/about/ssh";

export default function ContactsPage() {
    return (
        <div>
            <h1 className="text-2xl">Contact Me</h1>
            <p className="mt-2">Feel free to reach out through any of the following platforms:</p>
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

            <h1 className="text-2xl mt-16">Public keys</h1>
            <p className="mt-2">As of now, the GPG key used only to sign Github commits.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <GPGCard/>
                <SSHCard/>
            </div>
        </div>
    );
}
