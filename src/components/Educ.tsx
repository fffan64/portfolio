import Image from 'next/image';

import TagBadge from '@/components/TagBadges';

type EducProps = {
  dateStr: string;
  imgSrcPath?: string;
  imgAlt?: string;
  title: string;
  place: string;
  uniName: string;
  bulletPoints?: string[] | JSX.Element[];
  tags?: string[];
  link?: string;
  flagCode?: string;
};

const Educ = ({
  dateStr,
  imgSrcPath,
  imgAlt,
  title,
  place,
  uniName,
  bulletPoints,
  tags,
  link,
  flagCode,
}: EducProps) => {
  return (
    <div>
      <div className='mt-4 text-gray-500 dark:text-gray-400'>{dateStr}</div>

      <div>
        <h3 className='dark:text-white'>{title}</h3>

        <div className='mb-2 flex items-center'>
          {imgSrcPath && imgAlt && (
            <Image src={imgSrcPath} height={32} width={32} alt={imgAlt} />
          )}

          <span
            className={
              imgSrcPath ? 'flex items-baseline pl-2' : 'flex items-baseline '
            }
          >
            {link ? (
              <>
                <a
                  href={link}
                  className='text-primary-500 hover:underline hover:underline-offset-4'
                >
                  {uniName}
                </a>
                <span className='font-thin text-gray-400 dark:text-gray-300'>{`, ${place}`}</span>
              </>
            ) : (
              <>
                {uniName}
                <span className='font-thin text-gray-400 dark:text-gray-300'>{`, ${place}`}</span>
              </>
            )}
            {flagCode && (
              <span className='pl-2 align-middle'>
                <Image
                  src={`https://flagcdn.com/${flagCode}.svg`}
                  alt={`${flagCode} flag`}
                  height={15}
                  width={22.5}
                  className='border border-gray-500 dark:border-gray-400'
                />
              </span>
            )}
          </span>
        </div>

        {bulletPoints && (
          <ul className='mt-3 ml-3 list-inside list-disc dark:text-white'>
            {bulletPoints.map((point, idx) => (
              <li className='dark:text-white' key={`bulletpoint-${idx}`}>
                {point}
              </li>
            ))}
          </ul>
        )}

        {tags && (
          <p className='mt-4 break-words leading-8'>
            {tags.map((tag, idx) => (
              <TagBadge tag={tag} key={`tag-${idx}`} />
            ))}
          </p>
        )}
      </div>
    </div>
  );
};

export default Educ;
