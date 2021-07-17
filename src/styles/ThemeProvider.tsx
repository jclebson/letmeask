import { ReactNode } from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledProvider,
} from "styled-components";

type ThemeProviderType = {
  theme: DefaultTheme;
  children: ReactNode;
};

export const ThemeProvider = ({ theme, children }: ThemeProviderType) => {
  return <StyledProvider theme={theme}>{children}</StyledProvider>;
};
