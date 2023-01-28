import { motion } from 'framer-motion';
import * as React from 'react';

import { delay } from '@/lib/helper';

import { Footer } from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function Layout({
  children,
  headerClassName,
  footerClassName,
}: {
  children: React.ReactNode;
  headerClassName?: string;
  footerClassName?: string;
}) {
  // Put Header or Footer Here
  return (
    <div className='flex min-h-screen w-full flex-col bg-white dark:bg-black'>
      <Header className={headerClassName} />
      <motion.div
        initial={{
          // translateX: 300,
          opacity: 0,
        }}
        animate={{
          // translateX: 0,
          opacity: 1,
        }}
        exit={{
          // translateX: 300,
          opacity: 0,
        }}
        transition={
          {
            // type: 'spring',
            // stiffness: 260,
            // damping: 20,
          }
        }
        onAnimationStart={() => document.body.classList.add('overflow-hidden')}
        onAnimationComplete={() =>
          delay(1000).then(() =>
            document.body.classList.remove('overflow-hidden')
          )
        }
        className='flex flex-shrink-0 grow basis-auto'
      >
        {children}
      </motion.div>
      <Footer className={footerClassName} />
    </div>
  );
}
