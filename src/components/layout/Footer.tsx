import UnderlineLink from '@/components/links/UnderlineLink';

export const Footer = () => {
  return (
    <footer className='layout flex w-full flex-shrink-0 flex-grow-0 basis-auto items-center justify-center pb-2 text-gray-700 dark:text-gray-300'>
      {/* <footer className='layout flex w-full items-center justify-center pb-2 text-gray-700 dark:text-gray-300'> */}
      © {new Date().getFullYear()} By{' '}
      <UnderlineLink
        className='ml-1'
        href='https://www.linkedin.com/in/jonathanvacherat'
      >
        Jonathan Vacherat
      </UnderlineLink>
    </footer>
  );
};
