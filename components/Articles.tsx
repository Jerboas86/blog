import { ReactElement } from "react";

interface ArticlesProps {
  children: ReactElement[];
}

export const Articles = (props: ArticlesProps) => {
  return (
    <div
      className={
        "col-start-2 row-start-1 col-span-3 " +
        "flex flex-col gap-4 " +
        "py-4 pl-10 " +
        "border-l-2 border-r-2 border-gray-300"
      }
    >
      {props.children}
    </div>
  );
};

export const data = [
  {
    title: "You Don't need JWT anymore",
    abstract:
      "A simpler way to authenticate users with web3 using signed messages It’s no secret that the Ethereum login will soon become a user standard and passwords will no longer be needed. Nevertheless, dApp development is still a fairly young direction and many standards for their development are still set. Now",
    author: {
      name: "Miroslaw Shpak",
      city: "Vienna",
    },
    writtenOn: new Date(),
    tags: ["Web 3", "JWT", "Ethereum"],
    freeAccess: true,
    timeToRead: 3,
  },
  {
    title: "Rust on Android",
    abstract:
      "You may have heard of rust, it’s a systems programming language designed for memory safety and speed. Built by Mozilla to power the next generation high performance cross platform software. … It’s no secret that the Ethereum login will soon become a user standard and passwords will no longer be needed. Nevertheless, dApp development is still a fairly young direction and many standards for their development are still set.",
    author: {
      name: "Emil Sjölander",
      city: "Visly",
    },
    writtenOn: new Date(),
    tags: ["Android", "Rust"],
    freeAccess: true,
    timeToRead: 5,
  },
  {
    title: "Microsoft is Finally Ditching Electron",
    abstract:
      "Microsoft recently announced that they have reached a whopping 250 Million active users with Teams. Not Word or Excel but Teams is the rockstar of the Microsoft Office suite. But, It has always been plagued with performance issues as it consumes heaps of system resources. … Many engineering teams get stuck and cannot ship quality software fast because of technical debt. The best engineering teams I’ve talked to use the right tools to continuously refactor code, improve their codebase communication, and address technical debt",
    author: {
      name: "Faisal Khan",
      city: "Mumbay",
    },
    writtenOn: new Date(),
    tags: ["Microsft", "Electrong"],
    freeAccess: true,
    timeToRead: 3,
  },
  {
    title: "How we build Micro Frontends with Lattice",
    abstract:
      "Written by Michael Possumato, Nick Tomlin, Jordan Andree, Andrew Shim, and Rahul Pilani. As we continue to grow here at Netflix, the needs of Revenue and Growth Engineering are rapidly evolving; and our tools must also evolve just as rapidly. The Revenue and Growth Tools (RGT) team decided to set…",
    author: {
      name: "Netflix Technology Blog",
      city: "New York",
    },
    writtenOn: new Date(),
    tags: ["Micro Frontends", "Lattice"],
    freeAccess: true,
    timeToRead: 7,
  },
];
