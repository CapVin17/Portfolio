"use client";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[30]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a
              href="https://github.com/capvin17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/vineet-singh-b5a6b0239/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">LinkedIn</span>
              </p>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://www.instagram.com/capvin17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxInstagramLogo />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </p>
            </a>
            <a
              href="https://x.com/Capvin17"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxTwitterLogo />
                <span className="text-[15px] ml-[6px]">Twitter</span>
              </p>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <a href="mailto:vineetsinghvs@gmail.com">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">Contact Me</span>
              </p>
            </a>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                www.vineetsinghvs@gmail.com
              </span>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; CapVin17 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
