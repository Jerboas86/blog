import { ReactElement } from "react";

interface MenuProps {
  children: ReactElement[];
}

export const Menu = ({ children }: MenuProps) => {
  return (
    <div className="col-start-1 row-start-1 my-auto py-4 pl-4">{children}</div>
  );
};
