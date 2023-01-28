import { motion } from 'framer-motion';
import React from 'react';

const ExperienceCard = () => {
  return (
    <article className='flex  flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg p-10'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className='h-[100px] w-[100px] rounded-full object-cover object-center'
        src='/images/photo.jpg'
        alt=''
      />

      {/* <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className='rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]'
      >
        <Image
          className='margin-auto relative mx-auto rounded-full'
          src='/images/photo.jpg'
          width={128}
          height={128}
          alt='Jonathan Vacherat picture'
        />
      </motion.div> */}

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light dark:text-white'>
          Lead Software Engineer
        </h4>
        <p className='mt-1 text-2xl font-bold dark:text-white'>
          AXA Life Japan
        </p>
        <div className='my-2 flex space-x-2'>
          <img
            className='h-10 w-10 rounded-full'
            src='/images/photo.jpg'
            alt=''
          />
          <img
            className='h-10 w-10 rounded-full'
            src='/images/photo.jpg'
            alt=''
          />
          <img
            className='h-10 w-10 rounded-full'
            src='/images/photo.jpg'
            alt=''
          />
          <img
            className='h-10 w-10 rounded-full'
            src='/images/photo.jpg'
            alt=''
          />
          {/* <Image
            className='margin-auto relative rounded-full'
            src='/images/photo.jpg'
            width={40}
            height={40}
            alt='Jonathan Vacherat picture'
          />
          <Image
            className='margin-auto relative rounded-full'
            src='/images/photo.jpg'
            width={40}
            height={40}
            alt='Jonathan Vacherat picture'
          />
          <Image
            className='margin-auto relative rounded-full'
            src='/images/photo.jpg'
            width={40}
            height={40}
            alt='Jonathan Vacherat picture'
          /> */}
        </div>
        <p className='py-5 uppercase text-gray-300'>
          Started work ... - Ended ...
        </p>
        <ul className='ml-5 list-disc space-y-4 text-lg dark:text-white'>
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
          <li>Summary point</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
