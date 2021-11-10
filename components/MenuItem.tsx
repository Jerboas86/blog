import { Dispatch, JSXElementConstructor, ReactElement } from "react";

interface MenuItemProps {
  icon: JSXElementConstructor<{ isSelected: boolean }>;
  id: string;
  label: string;
  isSelected: boolean;
  setSelected: Dispatch<string>;
}

export const MenuItem = ({
  icon: Icon,
  id,
  label: name,
  isSelected,
  setSelected,
}: MenuItemProps) => {
  return (
    <div
      className={`flex gap-1 pl-4 mb-8 border-l-2 ${
        isSelected ? "border-black" : "border-transparent"
      } hover:border-gray-900 cursor-pointer`}
      onClick={() => setSelected(id)}
    >
      <div>
        <Icon isSelected={isSelected} />
      </div>
      <div>{name}</div>
    </div>
  );
};
