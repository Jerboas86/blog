import { MarkIcon } from "./MarkIcon";
import { MoreIcon } from "./MoreIcon";
import { StarIcon } from "./StarIcon";
import profileThumbnail from "../public/profile_thumbnail.jpeg";
import rust from "../public/rust.jpeg";
import Image from "next/image";

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

const months = [
  "Jan",
  "Fev",
  "Mar",
  "Avr",
  "May",
  "Jun",
  "Jul",
  "Aou",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const ArticleItem = ({
  title,
  author,
  writtenOn,
  abstract,
  tags,
  timeToRead,
}: ArticleItemProps) => {
  const formated_date = `${
    months[writtenOn.getMonth()]
  } ${writtenOn.getDay()}, ${writtenOn.getFullYear()}`;
  return (
    <div className="flex flex-1 items-center mx-24 my-2 border-b-2 border-gray-200">
      <div className="w-4/6">
        <div className="flex gap-2 pb-3 items-center text-sm font-normal">
          <Image
            className="rounded-full"
            src={profileThumbnail}
            alt="Author profile"
          />
          <div>{`${author.name} in ${author.city} . ${formated_date}`}</div>
          <div>
            <StarIcon />
          </div>
        </div>
        <div className="pb-1">{title}</div>
        <div className="text-base font-normal text-justify">{abstract}</div>
        <div className="flex items-center text-sm font-normal">
          <div className="flex items-center my-8 p-1">
            <div className="bg-gray-200 rounded-full px-2 py-1">{tags[0]}</div>
            <div className="text-gray-400 p-1">{`${timeToRead} min to read`}</div>
            <div className="text-gray-400 p-0.5">.</div>
            <div className="text-gray-400 p-1">Popular on medium</div>
          </div>
          <div className="ml-auto p-1">
            <MarkIcon />
          </div>
          <div className="p-1">
            <MoreIcon />
          </div>
        </div>
      </div>
      <div className="p-2 pl-8 w-3/12">
        <Image src={rust} alt="Rusty door" />
      </div>
    </div>
  );
};
