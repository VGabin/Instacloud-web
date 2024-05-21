import React from 'react';
import Image from "next/image";

const Avatar = () => {
    return (
        <div>
            <Image
                width={100} height={100}
                className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src="/imgs/profile.png" alt="Profile"/>
        </div>
    );
};

export default Avatar;