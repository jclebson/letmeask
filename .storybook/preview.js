import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "../src/styles/ThemeProvider";
import { light } from "../src/styles/themes/light";
import GlobalStyleComposed from "../src/styles/GlobalStyles";

addDecorator((storyFn) => (
  <>
    <ThemeProvider theme={light}>
      <GlobalStyleComposed />
      {storyFn()}
    </ThemeProvider>
  </>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
