// Footer.jsx
import React from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { AiFillMediumCircle, AiFillLinkedin } from 'react-icons/ai';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className={"bg-slate-900 p-6 mb-0"} style={{ cursor: 'default' }}>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-white text-center sm:text-left w-full font-light text-sm sm:text-base">
          © {year} Chandan Kumar. All rights reserved.
        </p>
        <div className={"flex justify-center sm:justify-start gap-4 sm:w-auto w-full mt-4 sm:mt-0"}>
          <a
            href="mailto:chandan5062002@gmail.com"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
          >
            <FiMail className="text-xl sm:text-2xl text-white" />
          </a>
          <a
            href="https://x.com/Chandan_5602"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
          >
            <FaTwitter className="text-xl sm:text-2xl text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/chandan-kumar-a52a2a253/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
          >
            <AiFillLinkedin className="text-xl sm:text-2xl text-white" />
          </a>
          <a
            href="https://github.com/Chandan-Kumar-05"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
          >
            <FaGithub className="text-xl sm:text-2xl text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Ensure the default export is correct
export default Footer;
