import { motion } from 'framer-motion';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function About() {
  return (
    <Layout>
      <Seo templateTitle='About' />

      <div className='flex w-full flex-col items-center pt-20'>
        <h3 className='pb-10 indent-5 text-2xl uppercase tracking-[20px] text-gray-500 dark:text-primary-400'>
          About
        </h3>
        <div className='mx-auto flex max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left'>
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
            className='mb-4 h-56 w-56 flex-shrink-0 rounded-full object-cover md:mb-0 md:h-64 md:w-64 md:rounded-lg xl:h-[300px] xl:w-[300px]'
          ></motion.img>
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
      </div>
    </Layout>
  );
}
