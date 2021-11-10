import { IconProps } from "./HomeIcon";

export const WriteIcon = ({ isSelected }: IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-label="Write">
      <path
        stroke={`${isSelected ? "black" : "grey"}`}
        fill={`${isSelected ? "black" : "grey"}`}
        d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3zM21.82 3.82l-1.64-1.64a.25.25 0 0 0-.36 0l-1.64 1.64c-.1.1-.1.26 0 .36l1.64 1.64c.1.1.26.1.36 0l1.64-1.64c.1-.1.1-.26 0-.36zM18.32 7.32l-1.64-1.64a.25.25 0 0 0-.36 0l-7.28 7.28a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06l7.28-7.28c.1-.1.1-.26 0-.36z"
      ></path>
    </svg>
  );
};
