import { DefaultTheme } from "styled-components";

const getLocalStorage = (key: string, initial: DefaultTheme) => {
  try {
    return JSON.parse(localStorage.getItem(key) as string) || initial;
  } catch (err) {}
};

export default getLocalStorage;
