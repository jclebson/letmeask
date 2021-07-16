import { addDecorator } from "@storybook/react";
import GlobalStyleComposed from "../src/styles/GlobalStyles";

addDecorator((storyFn) => (
  <>
    <GlobalStyleComposed />
    {storyFn()}
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
