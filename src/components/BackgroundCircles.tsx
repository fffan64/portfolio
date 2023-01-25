import { motion } from 'framer-motion';
import React from 'react';

function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className='relative flex items-center justify-center'
    >
      <div className='absolute mt-32 h-[200px] w-[200px] animate-ping rounded-full border border-primary-500 shadow-[0_0_2em_#34d39980]'></div>
      <div className='absolute mt-32 h-[300px] w-[300px] rounded-full border border-[#333333]'></div>
      <div className='absolute mt-32 h-[500px] w-[500px] rounded-full border border-[#333333]'></div>
      <div className='absolute mt-32 h-[650px] w-[650px] animate-pulse rounded-full border border-primary-400 opacity-20'></div>
      <div className='absolute mt-32 h-[800px] w-[800px] rounded-full border border-[#333333]'></div>
    </motion.div>
  );
}

export default BackgroundCircles;
