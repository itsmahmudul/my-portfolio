import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';

// Logos
import uiuLogo from '../../../assets/Logos/uiu.png';
import cambrianLogo from '../../../assets/Logos/college.png';
import annadaLogo from '../../../assets/Logos/images.png';

// Lottie Animation
import educationAnimation from '../../../assets/Education.json';

const educationData = [
    {
        degree: 'B.Sc. in Computer Science & Engineering',
        institution: 'United International University, Dhaka',
        year: '2025 – Present',
        logo: uiuLogo,
    },
    {
        degree: 'Higher Secondary Certificate',
        institution: 'Cambrian College, Dhaka',
        year: '2020 – 2022',
        logo: cambrianLogo,
    },
    {
        degree: 'Secondary School Certificate (SSC)',
        institution: 'Annada Govt. High School, Brahmanbaria',
        year: '2015 – 2020',
        logo: annadaLogo,
    },
];

// Section animation
const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
            when: 'beforeChildren',
            staggerChildren: 0.2,
        },
    },
};

// Card animation
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

const Education = () => {
    return (
        <motion.section
            className="py-16 px-6 bg-gray-100 dark:bg-black"
            id="education"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="max-w-5xl mx-auto text-center">
                {/* Lottie Animation */}
                <motion.div variants={cardVariants} className="w-48 mx-auto mb-6">
                    <Lottie animationData={educationAnimation} loop={true} />
                </motion.div>

                {/* Heading */}
                <motion.h2
                    variants={cardVariants}
                    className="text-4xl font-bold mb-10 text-gray-800 dark:text-white"
                >
                    Educational <span className="text-cyan-400">Qualifications</span>
                </motion.h2>

                {/* Education Cards */}
                <div className="space-y-8">
                    {educationData.map((edu, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.03,
                                opacity: 1,
                                transition: { duration: 0.3 },
                            }}
                            className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md flex items-center gap-6 text-left hover:shadow-lg transition-all"
                        >
                            <img
                                src={edu.logo}
                                alt={`${edu.institution} logo`}
                                className="w-16 h-16 object-contain rounded-md border border-gray-200 dark:border-gray-700"
                            />
                            <div>
                                <h3 className="text-xl font-semibold text-cyan-600">{edu.degree}</h3>
                                <p className="text-gray-700 dark:text-gray-300">{edu.institution}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default Education;
