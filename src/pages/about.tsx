import { motion } from 'framer-motion';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function About() {
  return (
    <Layout>
      <Seo templateTitle='About' />
      {/* 
      <div className='layout relative flex flex-col items-center justify-center text-center'>
        hello
      </div> */}

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
        className='mx-auto flex min-h-[400px] max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left'
      >
        {/* <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500'> */}
        <h3 className='absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500 dark:text-primary-400'>
          About
        </h3>

        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          src='/images/photo.jpg'
          className='-mb-20 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-64 md:w-64 md:rounded-lg xl:h-[300px] xl:w-[300px]'
        ></motion.img>
        {/* <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className='-mb-20 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-64 md:w-64 md:rounded-lg xl:h-[500px] xl:w-[500px]'
      >
        <Image
          className='mx-auto h-32 w-32 rounded-full object-cover object-center'
          src='/images/photo.jpg'
          width={128}
          height={128}
          alt='Jonathan Vacherat picture'
        />
      </motion.div> */}

        <div className='space-y-10 px-0 dark:text-white md:px-10'>
          <h4 className='text-4xl font-semibold'>
            Here is a{' '}
            <span className='underline decoration-primary-400'>little</span>{' '}
            background
          </h4>
          <p className='text-base'>
            {`I'm a full-stack developer with more than 10 years of experience.
        Love serverless & automation, gaming also !
        Married and proud father of two <3`}
          </p>
        </div>
      </div>
    </Layout>
  );
}
