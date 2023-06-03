import React, { useState } from "react";
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Kuldeep</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}> {link} </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <div className="md:hidden absolute top-20 right-0 bg-black h-screen w-full flex flex-col items-center justify-center text-white transition-all duration-500">
          <ul className="flex flex-col items-center space-y-4">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
              >
                <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}> {link} </Link>
              </li>
            ))}
          </ul>
          <div className="flex mt-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-500 hover:text-white ml-4"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-500 hover:text-white ml-4"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:maddeshiyakuldeep@gmail.com"
              className="flex items-center text-gray-500 hover:text-white ml-4"
            >
              <HiOutlineMail size={24} />
            </a>
            <a
              href="./Kuldeep(Resume).pdf"
              download
              className="flex items-center text-gray-500 hover:text-white ml-4"
            >
              <BsFillPersonLinesFill size={24} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
