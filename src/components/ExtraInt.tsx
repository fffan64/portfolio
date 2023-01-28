import TagBadge from '@/components/TagBadges';

type ExtraIntProps = {
  tags: string[];
};

const ExtraInt = ({ tags }: ExtraIntProps) => {
  return (
    <>
      {tags.map((tag, idx) => (
        <TagBadge tag={tag} key={`extra-tag-${idx}`} />
      ))}
    </>
  );
};

export default ExtraInt;
