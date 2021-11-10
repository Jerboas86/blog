interface MenuItemProps {
  image: string;
  name: string;
}

export const MenuItem = ({ image, name }: MenuItemProps) => {
  return (
    <div className="flex gap-1">
      <div>{image}</div>
      <div>{name}</div>
    </div>
  );
};
