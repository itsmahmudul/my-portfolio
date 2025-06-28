import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: 'Skill-Stack',
    description:
      'Skill Stack is a comprehensive Course Management System that enables users to browse available courses, enroll with ease, and manage their enrolled courses seamlessly. This project reinforces essential real-world skills such as JWT authentication, Axios interceptors, MongoDB queries, and secure CRUD operations. Users can log in to receive a JWT token, explore courses, and enroll with a single click, all while interacting with protected APIs that ensure data security. Inspired by popular platforms like Coursera and Udemy, Skill Stack delivers a smooth and secure learning experience, making course management intuitive and efficient.',
    github: 'https://github.com/yourusername/skill-stack',
    liveDemo: 'https://skill-stack-e19ed.web.app/',
    image: 'https://i.ibb.co/27yYKPLp/Screenshot-2025-06-28-215257.png',
    techStack: [
      { name: 'React', url: 'https://react.dev/' },
      { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
      { name: 'Express.js', url: 'https://expressjs.com/' },
      { name: 'MongoDB', url: 'https://www.mongodb.com/' },
      { name: 'JWT Auth', url: 'https://jwt.io/' },
      { name: 'Axios', url: 'https://axios-http.com/' },
      { name: 'Node.js', url: 'https://nodejs.org/' },
      { name: 'Firebase Hosting', url: 'https://firebase.google.com/products/hosting' },
    ],
  },
];

const Projects = () => {
  return (
    <div className="w-screen h-screen p-6 bg-black overflow-auto">
      <motion.h2
        className="text-3xl font-bold mb-8 text-center text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-7xl mx-auto">
        {projects.map(({ id, name, description, github, liveDemo, image, techStack }) => (
          <motion.div
            key={id}
            className="p-6 border border-gray-700 rounded-lg shadow bg-gray-800 text-gray-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: id * 0.1 }}
          >
            {image && liveDemo && (
              <a href={liveDemo} target="_blank" rel="noopener noreferrer">
                <motion.img
                  src={image}
                  alt={`${name} screenshot`}
                  className="mb-4 rounded-md object-cover w-full h-48 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            )}

            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="mb-4">{description}</p>

            {techStack && (
              <motion.div
                className="flex flex-wrap gap-2 mb-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
              >
                {techStack.map((tech, index) => (
                  <motion.a
                    key={index}
                    href={tech.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-700 text-white text-sm px-3 py-1 rounded-full hover:bg-blue-600 transition"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    {tech.name}
                  </motion.a>
                ))}
              </motion.div>
            )}

            <div className="flex space-x-4">
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
