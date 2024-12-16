import React from "react";

const SSHCard = () => {

    return (
        <div className="flex justify-between items-center space-x-4 bg-neutral-800 p-4 rounded-lg shadow-lg">
            <div>
                <h3 className="text-xl font-semibold">SSH Key</h3>
                <span className="text-gray-400">Private as of now.</span>
            </div>
            {/* Nerd Font Icon */}
            <div className="text-4xl text-blue-500 pr-4">󰣀</div>
        </div>
    );

};

export default SSHCard;