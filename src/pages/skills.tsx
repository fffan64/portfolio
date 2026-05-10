import { motion } from 'framer-motion';

import { getXpLevel } from '@/lib/helper';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import TagBadge from '@/components/TagBadges';

export default function Skills() {
  // Skills data extracted from CV page
  const skillsData = {
    programmingLanguages: [
      'TypeScript',
      'JavaScript',
      'Java',
      'C#',
      'Python',
      'C/C++',
      'GLSL',
      'Lua',
    ],
    frontend: ['React', 'Next.js', 'HTML/CSS', 'Tailwind CSS'],
    backend: ['Node.js', 'Express', 'Spring Boot', 'Dotnet'],
    cloudAndDevOps: [
      'AWS',
      'Google Cloud',
      'Openshift',
      'Serverless',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Jenkins',
    ],
    databases: ['SQL Server', 'MySQL', 'PostgreSQL', 'DynamoDB'],
    methodologies: ['Agile', 'Scrum', 'BDD', 'TDD', 'Gherkin'],
    toolsAndOther: [
      'Git',
      'Webpack',
      'Babel',
      'ESLint',
      'Prettier',
      'Figma',
      'Jira',
      'Confluence',
    ],
  };

  return (
    <Layout>
      <Seo templateTitle='Skills' />

      <div className='flex w-full flex-col items-center pt-20'>
        <h3 className='pb-10 indent-5 text-2xl uppercase tracking-[20px] text-gray-500 dark:text-primary-400'>
          Skills
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
              overview
            </h4>
            <p className='text-base'>
              {`I'm a full-stack dev with more than ${getXpLevel(
                2011
              )} years of experience.
        Love AI, serverless & automation, gaming also !
        Married and proud father of two <3`}
            </p>
          </div>
        </div>

        <div className='mx-auto mt-16 w-full max-w-7xl px-4'>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            {Object.entries(skillsData).map(([category, skills], index) => (
              <motion.div
                key={category}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                viewport={{
                  once: true,
                }}
                className='space-y-4'
              >
                <h3 className='text-xl font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300'>
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {skills.map((skill, idx) => (
                    <TagBadge tag={skill} key={`${category}-${idx}`} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
