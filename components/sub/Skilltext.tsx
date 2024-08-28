"use client"
import React from 'react'
import {motion} from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/16/solid';


const Skilltext = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-cente">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[15px] px-[4px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">My Tech Stack</h1>
      </motion.div>

      <motion.div variants={slideInFromLeft(0.5)} className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'>
        Making web apps using modern technologies
      </motion.div>

      <motion.div variants={slideInFromRight(0.5)} className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'>
        Always hustling out with something new 
      </motion.div>
    </div>
  );
}

export default Skilltext