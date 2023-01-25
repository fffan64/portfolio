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

const OpenMobileSvg = ({
  className,
  onClick,
  size,
}: {
  className?: string;
  size?: number;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}) => {
  return (
    <motion.svg
      width={size || '15'}
      height={size || '15'}
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
    >
      <motion.path
        d='M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z'
        fill='currentColor'
        fillRule='evenodd'
        clipRule='evenodd'
        initial={{
          opacity: 0,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
        }}
        transition={{
          // delay: 0.2,
          duration: 0.2,
        }}
      ></motion.path>
    </motion.svg>
  );
};

const CloseMobileSvg = ({
  className,
  onClick,
  size,
}: {
  className?: string;
  size?: number;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}) => {
  return (
    <motion.svg
      width={size || '15'}
      height={size || '15'}
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      onClick={onClick}
    >
      <motion.path
        d='M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z'
        fill='currentColor'
        fillRule='evenodd'
        clipRule='evenodd'
        initial={{
          opacity: 0,
          pathLength: 0,
        }}
        animate={{
          opacity: 1,
          pathLength: 1,
        }}
        transition={{
          // delay: 0.2,
          duration: 0.2,
        }}
      ></motion.path>
    </motion.svg>
  );
};

export default function Header() {
  const [openMenuMobile, setOpenMenuMobile] = React.useState<boolean>(false);
  const isDarkMode = useDarkModeStore((state) => state.isDark);
  return (
    <header className='z-10 flex-shrink-0 flex-grow-0 basis-auto border-b backdrop-blur-sm dark:border-gray-800'>
      <div className='layout flex h-14 items-center justify-between sm:hidden'>
        {/* {openMenuMobile ? (
          // <MdClose
          //   size={30}
          //   className='top-0 right-0 dark:fill-white'
          //   onClick={() => setOpenMenuMobile((open) => !open)}
          // />
          <CloseMobileSvg
            className='dark:text-white'
            size={30}
            onClick={() => setOpenMenuMobile((open) => !open)}
          />
        ) : (
          <OpenMobileSvg
            className='dark:text-white'
            size={30}
            onClick={() => setOpenMenuMobile((open) => !open)}
          />

          // <MdMenu
          //   size={30}
          //   className='dark:fill-white'
          //   onClick={() => setOpenMenuMobile((open) => !open)}
          // />
        )} */}

        <HamburgerMenu
          rounded
          // color='red'
          color={isDarkMode ? 'white' : 'black'}
          // color={clsx(isDarkMode ? '#34d399' : 'white')}
          toggled={openMenuMobile}
          toggle={setOpenMenuMobile}
          size={30}
        />

        <div style={{ height: '30px' }}>
          <Switcher />
        </div>
      </div>

      <div className='layout hidden h-14 items-center justify-between sm:flex'>
        {/* <UnstyledLink
          href='/'
          className='font-bold hover:text-gray-600 dark:text-white dark:hover:text-gray-300'
        > */}
        <UnderlineLink className='dark:text-white' href='/'>
          Home
        </UnderlineLink>
        {/* </UnstyledLink> */}
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                {/* <UnstyledLink
                  href={href}
                  className='hover:text-gray-600 dark:text-white dark:hover:text-gray-300'
                > */}
                <UnderlineLink className='dark:text-white' href={href}>
                  {label}
                </UnderlineLink>
                {/* </UnstyledLink> */}
              </li>
            ))}
            <span className='my-0 mx-2.5 inline-block h-7 border-l border-solid border-gray-300 dark:border-gray-800'></span>
            <div style={{ height: '30px' }}>
              <Switcher />
            </div>
          </ul>
        </nav>
      </div>

      <AnimatePresence>
        {openMenuMobile && (
          <motion.div
            initial={{ translateX: -1000 }}
            animate={{ translateX: 0 }}
            transition={{ duration: 0.4 }}
            exit={{ translateX: -1000 }}
            className='fixed min-h-[calc(100vh-56px-28.8px)] w-3/4 border-r bg-white pt-6 backdrop-blur-sm backdrop-filter dark:border-gray-800 dark:bg-black'
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
    </header>
  );
}
