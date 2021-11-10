import { useState } from "react";

const INITIAL = "home";

export const useMenu = (initial = INITIAL) => {
  const [menu, setMenu] = useState(initial);

  return { menu, setMenu };
};
