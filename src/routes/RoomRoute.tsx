import { DefaultTheme } from "styled-components";

import { Room } from "../pages/Room";

import usePersistedState from "../hooks/usePersistedState";
import { dark } from "../styles/themes/dark";
import { light } from "../styles/themes/light";

export const RoomRoute = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.name === "light" ? dark : light);
  };

  return <Room toggleTheme={toggleTheme} />;
};
