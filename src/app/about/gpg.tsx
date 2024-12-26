import React from "react";

const GPGCard = () => {

    return (
        <div className="flex justify-between items-center space-x-4 bg-neutral-800 p-4 rounded-lg shadow-lg">
            <div>
                <h3 className="text-xl font-semibold">GPG Key</h3>
                <a
                    href={`/cdn/silencio_public.asc`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 transition-all"
                >
                    Download Key
                </a>
                <span className="text-gray-400 mx-2">|</span>
                <a
                    href={`/cdn/gpg_fingerprint.txt`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 transition-all"
                >
                    Fingerprint
                </a>
            </div>
            {/* Nerd Font Icon */}
            <div className="text-4xl text-blue-500 pr-4">󱕵</div>
        </div>
    );

};

export default GPGCard;