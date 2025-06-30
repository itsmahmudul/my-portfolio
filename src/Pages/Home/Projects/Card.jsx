import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="p-6 border border-gray-700 rounded-lg shadow bg-gray-800 text-gray-200 flex flex-col transition-all"
        >
            {image && liveDemo && (
                <a href={liveDemo} target="_blank" rel="noopener noreferrer">
                    <motion.img
                        src={image}
                        alt={`${name} screenshot`}
                        className="mb-4 rounded-md object-cover w-full h-48 cursor-pointer hover:opacity-90 transition"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    />
                </a>
            )}

            <h3 className="text-xl font-semibold mb-2">{name}</h3>

            <p className="mb-4 text-sm md:text-base leading-relaxed">
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

            <div className="mt-auto flex space-x-4 pt-4">
                {github && (
                    <motion.a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold shadow hover:brightness-110 transition-all"
                    >
                        GitHub
                    </motion.a>
                )}
                {liveDemo && (
                    <motion.a
                        href={liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="px-4 py-2 bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-lg font-semibold shadow hover:brightness-110 transition-all"
                    >
                        Live Demo
                    </motion.a>
                )}
            </div>
        </motion.div>
    );
};

export default Card;
