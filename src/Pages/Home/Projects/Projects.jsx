import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import Lottie from 'lottie-react';
import loadingAnimation from '../../../assets/loading.json';
const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-24 bg-black min-h-screen">
                <Lottie animationData={loadingAnimation} loop={true} style={{ width: 150, height: 150 }} />
                <p className="text-gray-400 mt-6 text-lg">Loading projects...</p>
            </div>
        );
    }

    if (error) {
        return <p className="text-center text-red-500 py-12">Failed to load projects: {error}</p>;
    }

    if (!projects.length) {
        return <p className="text-center text-gray-400 py-12">No projects to show.</p>;
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen mt-16 w-full bg-black text-white py-16 px-6 md:px-12 lg:px-24"
        >
            <h2 className="text-4xl font-bold text-cyan-400 mb-12 text-center">My Projects</h2>
            <div className="max-w-[1440px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {projects.map(project => (
                    <Card key={project.id} project={project} />
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;
