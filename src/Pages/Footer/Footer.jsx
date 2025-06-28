import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>

        <div className="flex space-x-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-white transition"
          >
            {/* Twitter Icon */}
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-white transition"
          >
            {/* GitHub Icon */}
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.5 2 2 6.5 2 12a10 10 0 006.84 9.5c.5.1.68-.22.68-.5v-1.73c-2.78.6-3.37-1.34-3.37-1.34a2.66 2.66 0 00-1.12-1.48c-.92-.63.07-.62.07-.62a2.12 2.12 0 011.54 1 2.15 2.15 0 002.94.84 2.14 2.14 0 01.64-1.35c-2.22-.25-4.56-1.11-4.56-4.93a3.84 3.84 0 011-2.67 3.58 3.58 0 01.1-2.64s.84-.27 2.75 1a9.47 9.47 0 015 0c1.9-1.29 2.74-1 2.74-1a3.58 3.58 0 01.1 2.64 3.84 3.84 0 011 2.67c0 3.83-2.34 4.67-4.57 4.92a2.4 2.4 0 01.69 1.86v2.76c0 .28.18.6.69.5A10 10 0 0022 12c0-5.5-4.5-10-10-10z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition"
          >
            {/* LinkedIn Icon */}
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.98 3.5A2.5 2.5 0 002.5 6v12a2.5 2.5 0 002.48 2.5h14a2.5 2.5 0 002.5-2.5V6a2.5 2.5 0 00-2.5-2.5h-14zm.02 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm1 10h-2v-8h2v8zm7-4a3 3 0 012.9 2.24v1.76h-2v-1.5a1 1 0 00-2 0v1.5h-2v-4h2v.75a3 3 0 012-2.5z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
