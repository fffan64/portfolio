import ExperienceCard from '@/components/ExperienceCard';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function Experience() {
  return (
    <Layout>
      <Seo templateTitle='Experience' />

      <div className='hidden w-full flex-col items-center pt-20 md:flex'>
        <h3 className='pb-10 indent-5 text-2xl uppercase tracking-[20px] text-gray-500 dark:text-primary-400'>
          Experience
        </h3>

        {/* <div className='w-[325px] px-10 sm:w-[600px] md:w-[800px] lg:w-[1115px]'>
          <Carousel />
        </div> */}

        <div className='flex w-[520px] snap-x snap-mandatory space-x-5 overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-primary-400/80 scrollbar-thumb-rounded'>
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </div>

      {/* scroll snap */}
      <div className='flex w-full flex-col items-center overflow-hidden pt-20 md:hidden'>
        <h3 className='pb-10 indent-5 text-2xl uppercase tracking-[20px] text-gray-500 dark:text-primary-400'>
          Experience
        </h3>
        <main className=' snap max-h-[calc(100vh-80px-72px-48px)] w-full snap-y snap-mandatory overflow-y-scroll'>
          <section className='h-[calc(100vh-80px-72px-48px)] w-full snap-start'>
            <ExperienceCard />
          </section>
          <section className='h-[calc(100vh-80px-72px-48px)] w-full snap-start'>
            <ExperienceCard />
          </section>
          <section className='h-[calc(100vh-80px-72px-48px)] w-full snap-start'>
            <ExperienceCard />
          </section>
          <section className='h-[calc(100vh-80px-72px-48px)] w-full snap-start'>
            <ExperienceCard />
          </section>
          <section className='h-[calc(100vh-80px-72px-48px-30px)] w-full snap-start'>
            <ExperienceCard />
          </section>
        </main>
      </div>
    </Layout>

    // <Layout>
    //   <Seo templateTitle='Experience' />

    // </Layout>
  );
}
