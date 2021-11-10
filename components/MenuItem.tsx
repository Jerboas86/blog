import { JSXElementConstructor, ReactElement } from "react";

interface MenuItemProps {
  icon: JSXElementConstructor<{ isSelected: boolean }>;
  name: string;
  isSelected?: boolean;
}

export const MenuItem = ({
  icon: Icon,
  name,
  isSelected = false,
}: MenuItemProps) => {
  return (
    <div
      className={`flex gap-1 pl-4 mb-8 border-l-2 ${
        isSelected ? "border-black" : "border-transparent"
      } hover:border-gray-900 cursor-pointer`}
    >
      <div>
        <Icon isSelected={isSelected} />
      </div>
      <div>{name}</div>
    </div>
  );
};
