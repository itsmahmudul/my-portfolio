// Card.jsx
import React, { useState } from 'react';

const SHORT_DESC_LENGTH = 150;

const Card = ({ project }) => {
    const [expanded, setExpanded] = useState(false);

    const {
        name,
        description,
        github,
        liveDemo,
        image,
        techStack,
    } = project;

    const displayedDescription = expanded
        ? description
        : description.length > SHORT_DESC_LENGTH
            ? description.slice(0, SHORT_DESC_LENGTH) + '...'
            : description;

    return (
        <div className="p-6 border border-gray-700 rounded-lg shadow hover:shadow-lg transition bg-gray-800 text-gray-200 flex flex-col">
            {image && liveDemo && (
                <a href={liveDemo} target="_blank" rel="noopener noreferrer">
                    <img
                        src={image}
                        alt={`${name} screenshot`}
                        className="mb-4 rounded-md object-cover w-full h-48 cursor-pointer hover:opacity-90 transition"
                    />
                </a>
            )}

            <h3 className="text-xl font-semibold mb-2">{name}</h3>

            <p className="mb-4 text-sm md:text-base">
                {displayedDescription}
                {description.length > SHORT_DESC_LENGTH && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="ml-2 text-cyan-400 hover:underline font-semibold"
                    >
                        {expanded ? 'See Less' : 'See More'}
                    </button>
                )}
            </p>

            {techStack && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech, index) => (
                        <a
                            key={index}
                            href={tech.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-700 text-white text-xs md:text-sm px-3 py-1 rounded-full hover:bg-blue-600 transition"
                        >
                            {tech.name}
                        </a>
                    ))}
                </div>
            )}

            <div className="mt-auto flex space-x-4">
                {github && (
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        GitHub
                    </a>
                )}
                {liveDemo && (
                    <a
                        href={liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    );
};

export default Card;
