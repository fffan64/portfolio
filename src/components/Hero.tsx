import Image from 'next/image';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

import BackgroundCircles from '@/components/BackgroundCircles';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['dev', 'ops', 'gamer' /* "Hi, I'm Jonathan" */],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      // initial={{
      //   opacity: 0,
      // }}
      // whileInView={{
      //   opacity: 1,
      // }}
      // transition={{
      //   duration: 1.5,
      // }}
      className='flex h-full w-full flex-col items-center justify-center overflow-hidden pt-7 text-center'
    >
      <BackgroundCircles />
      <Image
        className='relative mx-auto h-32 w-32 rounded-full border border-gray-400 object-cover drop-shadow-[0_0_1em_darkgray] dark:drop-shadow-[0_0_2em_#34d399]'
        src='/images/photo.jpg'
        width={128}
        height={128}
        alt='Jonathan Vacherat picture'
      />
      {/* <div className='z-20 mt-8'> */}
      <div className='z-[1] mt-8'>
        <h2 className='pb-2 text-sm uppercase tracking-[15px] text-gray-500'>
          Lead Software Engineer
        </h2>
        <h1 className=' px-10 text-5xl font-semibold dark:text-white lg:text-6xl'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#34d399' />
        </h1>

        {/* <div className='flex flex-wrap items-center justify-center gap-4 pt-5'>
          <ArrowLink className='dark:text-white' href='/about'>
            About
          </ArrowLink>
          <ArrowLink className='dark:text-white' href='/cv'>
            CV/Resume
          </ArrowLink>
          <ArrowLink className='dark:text-white' href='/experience'>
            Experience
          </ArrowLink>
          <ArrowLink className='dark:text-white' href='/skills'>
            Skills
          </ArrowLink>
          <ArrowLink className='dark:text-white' href='/projects'>
            Projects
          </ArrowLink> */}
        {/* <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Hero;
