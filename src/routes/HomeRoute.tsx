import { DefaultTheme } from "styled-components";

import { Home } from "../pages/Home";

import usePersistedState from "../hooks/usePersistedState";
import { dark } from "../styles/themes/dark";
import { light } from "../styles/themes/light";

export const HomeRoute = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.name === "light" ? dark : light);
  };

  return <Home toggleTheme={toggleTheme} />;
};
