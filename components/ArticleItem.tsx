interface ArticleItemProps {
  title: string;
  abstract: string;
  author: {
    name: string;
    city: string;
  };
  writtenOn: Date;
  tags: string[];
  freeAccess: boolean;
  timeToRead: number;
}

export const ArticleItem = ({
  title,
  author,
  writtenOn,
  abstract,
  tags,
  timeToRead,
}: ArticleItemProps) => {
  return (
    <div>
      <div>Author thumbnail</div>
      <div>{`${author.name} ${author.city} . ${writtenOn}`}</div>
      <div>{title}</div>
      <div>{abstract}</div>
      <div>
        <div>{tags[0]}</div>
        <div>{timeToRead}</div>
      </div>
      <div>Bookmark icon</div>
      <div>Article thumbnail</div>
    </div>
  );
};
