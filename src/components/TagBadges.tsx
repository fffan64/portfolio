const TagBadge = ({ tag }: { tag: string }) => {
  return (
    <span className='m-[0.1rem] whitespace-nowrap rounded-md border px-3 py-1 text-sm text-gray-500 dark:bg-gray-900 dark:text-gray-200'>
      {tag}
    </span>
  );
};

export default TagBadge;
