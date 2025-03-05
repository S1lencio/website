import GenericCard from "@/components/GenericCard";
import React from "react";
import { buttons, badges } from "@/content/88x31Buttons";
import Image from "next/image";

const MicroButtonCard = () => {
    return (
        <GenericCard className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Cool People</h2>
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-2">
                {buttons.map((button, index) => (
                    <a key={index} href={button.website} target="_blank" rel="noopener noreferrer">
                        <Image
                            src={"/cdn/88x31s/" + button.image}
                            alt={button.website}
                            width={88}
                            height={31}
                        />
                    </a>
                ))}
            </div>
            <h2 className="text-2xl font-semibold mt-4 mb-4">Silly Badges</h2>
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 mb-6">
                {badges.map((button, index) => (
                    <a key={index} href={button.website} target="_blank" rel="noopener noreferrer">
                        <Image
                            src={"/cdn/88x31s/" + button.image}
                            alt={button.website || "Badge"}
                            width={88}
                            height={31}
                        />
                    </a>
                ))}
            </div>
        </GenericCard>
    );
}

export default MicroButtonCard;
