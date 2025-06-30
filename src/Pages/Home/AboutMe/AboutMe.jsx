import React from 'react';
import { Trophy, Palette, Code, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { staggerChildren: 0.3, ease: 'easeOut', duration: 0.6 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const iconWrapperStyle =
    'flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-cyan-700 text-cyan-400';

const About = () => {
    return (
        <section className="bg-black text-gray-200 py-24 px-6 sm:px-12 lg:px-20 max-w-4xl mx-auto">
            <motion.h1
                className="text-5xl font-extrabold text-cyan-400 mb-16 text-center tracking-wide drop-shadow-lg"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                About Me
            </motion.h1>

            <motion.div
                className="space-y-10 max-w-3xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Paragraph with subtle box */}
                <motion.div
                    variants={itemVariants}
                    className="bg-gray-900 rounded-xl p-6 shadow-lg border border-cyan-700"
                >
                    <p className="text-gray-300 leading-relaxed">
                        Hello! I’m{' '}
                        <span className="text-cyan-400 font-semibold">MD Mahmudul Alam</span>, a passionate programmer who began this journey with curiosity and a desire to build meaningful solutions. Over the years, I have honed my skills in modern web development, especially working with{' '}
                        <span className="text-cyan-400 font-medium">React</span>,{' '}
                        <span className="text-cyan-400 font-medium">Node.js</span>, and{' '}
                        <span className="text-cyan-400 font-medium">Tailwind CSS</span>. I love creating clean, user-friendly interfaces and solving complex problems through code.
                    </p>
                </motion.div>

                {/* Paragraph with icon on left */}
                <motion.div
                    variants={itemVariants}
                    className="flex gap-6 items-start bg-gray-900 rounded-xl p-6 shadow-lg border border-cyan-700"
                >
                    <div className={iconWrapperStyle}>
                        <Code size={24} />
                    </div>
                    <p className="text-gray-300 leading-relaxed flex-1">
                        The type of work I enjoy the most is building interactive, dynamic applications that make users’ lives easier and more enjoyable. Whether it’s a sleek portfolio site, an intuitive dashboard, or a feature-rich web app, I dive deep into making sure the experience is smooth and engaging.
                    </p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex gap-6 items-start bg-gray-900 rounded-xl p-6 shadow-lg border border-cyan-700"
                >
                    <div className={iconWrapperStyle}>
                        <Trophy size={24} />
                    </div>
                    <p className="text-gray-300 leading-relaxed flex-1">
                        Outside programming, I’m a big fan of sports — especially{' '}
                        <span className="text-yellow-400 font-semibold">cricket</span> and football — and I enjoy painting as a creative outlet. These hobbies help me recharge and bring fresh perspectives into my work.
                    </p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex gap-6 items-start bg-gray-900 rounded-xl p-6 shadow-lg border border-cyan-700"
                >
                    <div className={iconWrapperStyle}>
                        <Palette size={24} />
                    </div>
                    <p className="text-gray-300 leading-relaxed flex-1">
                        Creativity is a core part of my process, and painting fuels that side of me, helping me think differently about problem-solving and design.
                    </p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="flex gap-6 items-start bg-gray-900 rounded-xl p-6 shadow-lg border border-cyan-700"
                >
                    <div className={iconWrapperStyle}>
                        <Star size={24} className="text-yellow-400" />
                    </div>
                    <p className="text-gray-300 leading-relaxed flex-1">
                        I believe that balancing technical skills with creativity and discipline is what makes a great developer and person.
                    </p>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="bg-gray-900 rounded-xl p-6 shadow-lg border border-cyan-700"
                >
                    <p className="text-gray-300 leading-relaxed">
                        I’m always eager to learn, collaborate, and push my boundaries. Thanks for stopping by and learning a little about me!
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
