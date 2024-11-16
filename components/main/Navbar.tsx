import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex items-center justify-between">
        <a id="#about-me" className="flex items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Capvin17
          </span>
        </a>

        {/* Links Section */}
        <div className="flex flex-col justify-center mr-[70px]">
          <div className="flex items-center justify-between border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 max-w-[500px] w-full space-x-8">
            {/* Added space-x-8 for spacing */}
            <a href="#about-me" className="cursor-pointer">
              About Me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
            <a href="https://drive.google.com/drive/folders/1zP2UMNgrXLblWceHGcFrdtzR5GXZDSKO?usp=sharing" target="_blank" className="cursor-pointer">
                Resume
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <a href={social.link} key={social.name} target="_blank">
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
