import React from 'react';
import Pic from '../../assets/My-Pic.png';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

const UpworkIcon = (props) => (
    <svg
        {...props}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M21.768 3.197c-1.136-1.017-3.037-1.058-4.67-.09-1.53.895-2.357 2.557-2.462 4.074h-.002c-1.385-2.24-4.173-3.238-6.59-2.423-3.224 1.03-5.005 4.367-3.805 8.1.742 2.2 3.152 3.889 5.908 3.641 1.782-.163 3.293-1.155 4.092-2.512h.002c.344.195.726.295 1.125.295a2.17 2.17 0 002.01-1.315l.002-.003 2.152-5.433c.557-1.421.084-3.026-1.232-3.812zm-4.312 3.462a1.072 1.072 0 011.516-.417 1.08 1.08 0 01.413 1.517l-1.917 4.847-2.765-5.363c.553-.512 1.395-.635 2.335-.584zm-5.974 6.34c-1.392 0-2.519-1.025-2.519-2.288 0-1.264 1.127-2.288 2.519-2.288 1.391 0 2.52 1.024 2.52 2.288 0 1.263-1.129 2.288-2.52 2.288z" />
    </svg>
);

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Home = () => {
    return (
        <motion.div
            className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 font-sans"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {/* Profile Picture */}
            <motion.div
                variants={itemVariants}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg mb-6"
            >
                <img
                    src={Pic}
                    alt="Mahmudul's Profile"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            {/* Title */}
            <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-5xl font-bold text-center"
            >
                CraftedBy<span className="text-cyan-400">Mahmudul</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                variants={itemVariants}
                className="mt-4 text-lg md:text-xl text-gray-300 text-center max-w-lg"
            >
                Frontend Developer specializing in clean UI and interactive web experiences.
            </motion.p>

            {/* Additional Description */}
            <motion.p
                variants={itemVariants}
                className="mt-4 text-md md:text-lg text-gray-400 text-center max-w-xl"
            >
                I am a MERN stack and frontend developer passionate about building scalable, responsive, and user-friendly web applications. Skilled in React, Node.js, Express, and MongoDB, I create seamless digital experiences with a focus on performance and accessibility.
            </motion.p>

            {/* Social Links */}
            <motion.div
                variants={itemVariants}
                className="flex gap-8 mt-8"
            >
                <a
                    href="https://github.com/itsmahmudul"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-gray-400 hover:text-cyan-400 transition"
                >
                    <Github size={28} />
                </a>
                <a
                    href="https://www.linkedin.com/in/md-mahmudul-alam-3a6447370/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-gray-400 hover:text-cyan-400 transition"
                >
                    <Linkedin size={28} />
                </a>
                <a
                    href="https://www.upwork.com/freelancers/~01abcdef1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Upwork"
                    className="text-gray-400 hover:text-cyan-400 transition"
                >
                    <UpworkIcon className="w-7 h-7" />
                </a>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
                <Link to="/projects">
                    <button className="mt-6 flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl shadow-md transition">
                        View Projects <ArrowRight size={20} />
                    </button>
                </Link>
            </motion.div>
        </motion.div>
    );
};

export default Home;
