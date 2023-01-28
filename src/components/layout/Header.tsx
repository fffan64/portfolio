import { AnimatePresence, motion } from 'framer-motion';
import HamburgerMenu from 'hamburger-react';
import * as React from 'react';

import { useDarkModeStore } from '@/hooks/useDarkModeStore';

import UnderlineLink from '@/components/links/UnderlineLink';
import Switcher from '@/components/SwitcherDarkMode';

const links = [
  { href: '/about', label: 'About' },
  { href: '/cv', label: 'CV/Resume' },
  { href: '/experience', label: 'Experience' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
];

export default function Header({ className }: { className?: string }) {
  const [openMenuMobile, setOpenMenuMobile] = React.useState<boolean>(false);
  const isDarkMode = useDarkModeStore((state) => state.isDark);

  return (
    <>
      <header
        className={`fixed z-10 w-full border-b bg-white bg-opacity-10 backdrop-blur-md backdrop-filter dark:border-gray-800 dark:bg-black dark:bg-opacity-10 ${className}`}
      >
        <div className='layout flex h-14 items-center justify-between sm:hidden'>
          <HamburgerMenu
            rounded
            color={isDarkMode ? 'white' : 'black'}
            toggled={openMenuMobile}
            toggle={setOpenMenuMobile}
            size={30}
          />

          <div style={{ height: '30px' }}>
            <Switcher />
          </div>
        </div>
        <div className='layout hidden h-14 items-center justify-between sm:flex'>
          <UnderlineLink className='dark:text-white' href='/'>
            Home
          </UnderlineLink>
          <nav>
            <ul className='flex items-center justify-between space-x-4'>
              {links.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnderlineLink className='dark:text-white' href={href}>
                    {label}
                  </UnderlineLink>
                </li>
              ))}
              <span className='my-0 mx-2.5 inline-block h-7 border-l border-solid border-gray-300 dark:border-gray-800'></span>
              <div style={{ height: '30px' }}>
                <Switcher />
              </div>
            </ul>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {openMenuMobile && (
          <motion.div
            initial={{ translateX: -1000 }}
            animate={{ translateX: 0 }}
            transition={{ duration: 0.4 }}
            exit={{ translateX: -1000 }}
            // className='fixed top-[57px] z-10 min-h-[calc(100vh-56px-28.8px)] w-3/4 border-r bg-opacity-10 pt-6 backdrop-blur-md backdrop-filter dark:border-gray-800 dark:bg-black dark:bg-opacity-10 sm:hidden'
            className='fixed top-[57px] z-10 min-h-[calc(100vh-56px)] w-3/4 border-r bg-opacity-10 pt-6 backdrop-blur-md backdrop-filter dark:border-gray-800 dark:bg-black dark:bg-opacity-10 sm:hidden'
            key='animate_mobile_menu'
          >
            <nav>
              <ul className='flex flex-col items-center justify-between space-y-4'>
                <UnderlineLink
                  className='dark:text-white'
                  href='/'
                  onClick={() => setOpenMenuMobile(false)}
                >
                  Home
                </UnderlineLink>
                {links.map(({ href, label }) => (
                  <li key={`${href}${label}`}>
                    <UnderlineLink
                      className='dark:text-white'
                      href={href}
                      onClick={() => setOpenMenuMobile(false)}
                    >
                      {label}
                    </UnderlineLink>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
