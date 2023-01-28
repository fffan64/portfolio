import { useEffect, useRef, useState } from 'react';

const data = {
  resources: [
    {
      title: 'Find me on Twitter',
      link: 'https://twitter.com/kendalmintcode',
      imageUrl: 'https://placeimg.com/300/300/any',
    },
    {
      title: 'Welcome to Ark Labs',
      link: 'https://ark-labs.co.uk',
      imageUrl: 'https://placeimg.com/300/300/animals',
    },
    {
      title: 'Some sort of third title',
      link: 'https://twitter.com/kendalmintcode',
      imageUrl: 'https://placeimg.com/300/300/architecture',
    },
    {
      title: 'A personal site perhaps?',
      link: 'https://robkendal.co.uk',
      imageUrl: 'https://placeimg.com/300/300/nature',
    },
    {
      title: 'Super item number five',
      link: 'https://twitter.com/kendalmintcode',
      imageUrl: 'https://placeimg.com/300/300/people',
    },
    {
      title: 'Super item number six',
      link: 'https://twitter.com/kendalmintcode',
      imageUrl: 'https://placeimg.com/300/300/tech',
    },
    {
      title: 'Super item number seven',
      link: 'https://twitter.com/kendalmintcode',
      imageUrl: 'https://placeimg.com/300/300/animals',
    },
    {
      title: 'Super item number eight',
      link: 'https://twitter.com/kendalmintcode',
      imageUrl: 'https://placeimg.com/300/300/people',
    },
    {
      title: 'Super item number the last',
      link: 'https://twitter.com/kendalmintcode',
      imageUrl: 'https://placeimg.com/300/300/tech',
    },
  ],
};

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction: string) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className='carousel mx-auto'>
      {/* <h2 className='mb-12 text-4xl font-semibold leading-8 text-slate-700'>
        Our epic carousel
      </h2> */}
      <div className='relative overflow-hidden'>
        <div className='top left absolute flex h-full w-full justify-between'>
          <button
            onClick={movePrev}
            className='z-10 m-0 h-full w-10 p-0 text-center text-white opacity-75 transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-25 hover:bg-primary-400/75 hover:opacity-100'
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='-ml-5 h-12 w-20'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 19l-7-7 7-7'
              />
            </svg>
            <span className='sr-only'>Prev</span>
          </button>
          <button
            onClick={moveNext}
            className='z-10 m-0 h-full w-10 p-0 text-center text-white opacity-75 transition-all duration-300 ease-in-out disabled:cursor-not-allowed disabled:opacity-25 hover:bg-primary-400/75 hover:opacity-100'
            disabled={isDisabled('next')}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='-ml-5 h-12 w-20'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M9 5l7 7-7 7'
              />
            </svg>
            <span className='sr-only'>Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className='carousel-container relative z-0 flex touch-pan-x snap-x snap-mandatory gap-1 overflow-hidden scroll-smooth'
        >
          {data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                className='carousel-item relative h-64 w-64 snap-start text-center'
              >
                <a
                  href={resource.link}
                  className='z-0 block aspect-square h-full w-full bg-cover bg-left-top bg-no-repeat bg-origin-padding'
                  style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                >
                  <img
                    src={resource.imageUrl || ''}
                    alt={resource.title}
                    className='hidden aspect-square w-full'
                  />
                </a>
                <a
                  href={resource.link}
                  className='absolute top-0 left-0 z-10 block aspect-square h-full w-full bg-primary-400/75 opacity-0 transition-opacity duration-300 hover:opacity-100'
                >
                  <h3 className='mx-auto py-6 px-3 text-xl text-white'>
                    {resource.title}
                  </h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
