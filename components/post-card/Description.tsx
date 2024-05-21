import React from 'react';

interface DescriptionProps {
    description: string,
}

const Description = ({description}: DescriptionProps) => {
    return (
        <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
            {description}
        </p>
    );
};

export default Description;