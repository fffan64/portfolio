import UnderlineLink from '@/components/links/UnderlineLink';

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer
      className={`z-10 flex w-full flex-shrink-0 flex-grow-0 basis-auto items-center justify-center pt-5 pb-2 text-gray-700 dark:text-gray-300 ${className}`}
    >
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
