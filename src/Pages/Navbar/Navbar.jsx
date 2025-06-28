import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router';
import Logo from '../../../public/1.png';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';  // import Download icon

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => setIsOpen(false);

    const cvUrl = '/files/Mahmudul_CV.pdf';  
    // i will add it after i make it

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed w-full top-0 z-50 bg-black text-white py-4 px-6 border-b-2 border-cyan-500 flex justify-between items-center
            ${scrolled ? 'shadow-lg' : ''} transition-shadow duration-300`}
        >
            {/* Logo */}
            <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2"
            >
                <img src={Logo} alt="Logo" className="h-10 w-10 rounded-full" />
                <span className="hidden sm:inline-block text-xl font-bold tracking-wider text-cyan-400">
                    CraftedByMahmudul
                </span>
            </motion.div>

            {/* Centered Desktop Nav Links */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-8">
                {navLinks.map((link, index) => (
                    <motion.div
                        key={link.name}
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                        className="relative"
                    >
                        <NavLink
                            to={link.path}
                            end
                            className={({ isActive }) =>
                                `hover:text-cyan-400 transition relative py-1 ${isActive ? 'text-cyan-400 font-semibold' : ''
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {link.name}
                                    <motion.span
                                        layoutId="underline"
                                        initial={false}
                                        animate={{ width: isActive ? '100%' : '0%' }}
                                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                        className="absolute bottom-0 left-0 h-[2px] bg-cyan-400 rounded"
                                    />
                                </>
                            )}
                        </NavLink>
                    </motion.div>
                ))}
            </div>

            {/* Download CV Button on Desktop */}
            <div className="hidden lg:flex">
                <motion.a
                    href={cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md font-semibold shadow-md transition cursor-pointer"
                >
                    <Download size={16} /> {/* Download icon */}
                    <span>Resume</span>
                </motion.a>
            </div>

            {/* Hamburger menu button for smaller screens */}
            <button
                className="lg:hidden focus:outline-none z-50"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
            >
                {isOpen ? <X size={24} color="cyan" /> : <Menu size={24} color="cyan" />}
            </button>

            {/* Mobile menu side drawer + backdrop */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black z-40"
                        />

                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-64 bg-black text-white z-50 shadow-lg flex flex-col p-6"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                aria-label="Close Menu"
                                className="self-end mb-8 focus:outline-none"
                            >
                                <X size={24} color="cyan" />
                            </button>

                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={handleLinkClick}
                                    className={({ isActive }) =>
                                        `text-lg py-2 hover:text-cyan-400 transition ${isActive ? 'text-cyan-400 font-semibold' : ''
                                        }`
                                    }
                                    end
                                >
                                    {link.name}
                                </NavLink>
                            ))}

                            {/* Download CV Button mobile */}
                            <a
                                href={cvUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsOpen(false)}
                                className="mt-auto flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md font-semibold shadow-md transition text-center cursor-pointer"
                            >
                                <Download size={16} />
                                <span>Resume</span>
                            </a>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
