import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "../src/styles/ThemeProvider";
import GlobalStyleComposed from "../src/styles/GlobalStyles";
import { Provider } from "react-redux";
import store from "../src/store/configureStore";
import { light } from "../src/styles/themes/light";
import { MemoryRouter as Router } from "react-router-dom";

addDecorator((storyFn) => {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={light}>
          <GlobalStyleComposed />
          {storyFn()}
        </ThemeProvider>
      </Router>
    </Provider>
  );
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
};
