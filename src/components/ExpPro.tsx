import Image from 'next/image';

import TagBadge from '@/components/TagBadges';

type ExProProps = {
  dateStr: string;
  imgSrcPath?: string;
  imgAlt?: string;
  title: string;
  place: string;
  description: string;
  bulletPoints?: string[];
  tags?: string[];
  link?: string;
  flagCode?: string;
};

const ExpPro = ({
  dateStr,
  imgSrcPath,
  imgAlt,
  title,
  place,
  description,
  bulletPoints,
  tags,
  link,
  flagCode,
}: ExProProps) => {
  return (
    <div>
      <div className='mt-4 text-gray-500 dark:text-gray-400'>{dateStr}</div>
      <h3 className='mb-2 mt-2 flex items-center'>
        {imgSrcPath && imgAlt && (
          <Image src={imgSrcPath} height={32} width={32} alt={imgAlt} />
        )}

        <span
          className={`dark:text-white ${
            imgSrcPath ? 'flex items-baseline pl-2' : ''
          }`}
        >
          {link ? (
            <>
              <a
                href={link}
                className='text-primary-500 hover:underline hover:underline-offset-4'
              >
                {title}
              </a>
              <span className='text-base font-thin text-gray-400 dark:text-gray-300'>{`, ${place}`}</span>
            </>
          ) : (
            <>
              {title}
              <span className='text-base font-thin text-gray-400 dark:text-gray-300'>{`, ${place}`}</span>
            </>
          )}
          {flagCode && (
            <span className='pl-2'>
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
      </h3>
      <div>
        <p className='dark:text-white'>{description}</p>
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
          <p className='mt-4 break-words leading-8 '>
            {tags.map((tag, idx) => (
              <TagBadge tag={tag} key={`tag-${idx}`} />
            ))}
          </p>
        )}
      </div>
    </div>
  );
};

export default ExpPro;
