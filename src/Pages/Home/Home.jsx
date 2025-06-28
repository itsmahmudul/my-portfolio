import React, { useEffect, useState } from 'react';
import Pic from '../../assets/My-Pic.png';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import Card from './Projects/Card';

import Lottie from 'lottie-react';
import projectsAnimation from '../../assets/projects.json';

import AnimatedBackground from './Animated-bg/AnimatedBackground';
import ContactSection from './ContactSection/ContactSection';

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

const skills = [
    { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
    { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'React', url: 'https://react.dev/' },
    { name: 'Next.js', url: 'https://nextjs.org/' },
    { name: 'Node.js', url: 'https://nodejs.org/' },
    { name: 'Express.js', url: 'https://expressjs.com/' },
    { name: 'MongoDB', url: 'https://www.mongodb.com/' },
    { name: 'JWT', url: 'https://jwt.io/' },
    { name: 'Axios', url: 'https://axios-http.com/' },
    { name: 'Firebase', url: 'https://firebase.google.com/' },
    { name: 'Git & GitHub', url: 'https://github.com/' },
];

const Home = () => {
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then((res) => res.json())
            .then((data) => setProjectsData(data))
            .catch((err) => console.error('Failed to load projects:', err));
    }, []);

    const topProjects = projectsData.slice(0, 3);

    return (
        <div className="bg-black text-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden pb-20 pt-20 px-4 sm:px-6 lg:px-8">
                <AnimatedBackground />

                <motion.div
                    className="min-h-screen flex flex-col items-center justify-center font-sans relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
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

                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
                    >
                        CraftedBy
                        <span className="text-cyan-400">Mahmudul</span>
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 text-center max-w-lg"
                    >
                        Frontend Developer specializing in clean UI and interactive web experiences.
                    </motion.p>

                    <motion.p
                        variants={itemVariants}
                        className="mt-4 text-sm sm:text-md md:text-lg text-gray-400 text-center max-w-xl"
                    >
                        I am a MERN stack and frontend developer passionate about building scalable, responsive, and user-friendly web
                        applications. Skilled in React, Node.js, Express, and MongoDB, I create seamless digital experiences with a focus
                        on performance and accessibility.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex gap-6 sm:gap-8 mt-6 sm:mt-8">
                        <a
                            href="https://github.com/itsmahmudul"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cyan-400 transition"
                            aria-label="GitHub Profile"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/md-mahmudul-alam-3a6447370/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cyan-400 transition"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="https://www.upwork.com/freelancers/~01abcdef1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cyan-400 transition"
                            aria-label="Upwork Profile"
                        >
                            <UpworkIcon className="w-6 h-6" />
                        </a>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-6">
                        <Link to="/projects" aria-label="View Projects">
                            <button className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl shadow-md transition">
                                View Projects <ArrowRight size={20} />
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Skills Section */}
            <section className="w-full bg-black py-20 px-4 sm:px-6 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto text-center"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-cyan-400">My Skills</h2>
                    <p className="max-w-3xl mx-auto mb-10 text-gray-300 text-base sm:text-lg">
                        I have cultivated a diverse set of technical skills and tools that I utilize to create efficient, scalable, and
                        beautiful applications. Whether it's front-end design, backend development, or tooling, these skills help me deliver
                        quality solutions tailored to modern web needs.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <motion.a
                                key={index}
                                href={skill.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                className="bg-gray-800 p-4 rounded-lg shadow-md transition text-center cursor-pointer hover:bg-gray-700"
                                aria-label={`Learn more about ${skill.name}`}
                            >
                                <p className="text-lg font-medium text-cyan-300">{skill.name}</p>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Projects Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-6">Featured Projects</h2>
                    <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg">
                        Here are some of the top projects I've worked on recently, showcasing my skills in design, development, and problem-solving.
                        Feel free to explore more projects and see what I can create.
                    </p>
                    <div className="max-w-xs mx-auto mt-8">
                        <Lottie animationData={projectsAnimation} loop={true} />
                    </div>
                </div>

                <section className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {topProjects.length > 0 ? (
                        topProjects.map((project) => <Card key={project.id} project={project} />)
                    ) : (
                        <p className="text-center text-gray-400 col-span-full">No projects to display.</p>
                    )}

                    <div className="text-center mt-10 col-span-full">
                        <Link to="/projects" aria-label="Show More Projects">
                            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-xl shadow-md transition">
                                Show More Projects
                            </button>
                        </Link>
                    </div>
                </section>
            </section>

            {/* Contact Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">
                <ContactSection />
            </section>
        </div>
    );
};

export default Home;
