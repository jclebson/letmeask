import { BrowserRouter } from "react-router-dom";
import { DefaultTheme } from "styled-components";

import { ThemeProvider } from "./styles/ThemeProvider";
import GlobalStyleComposed from "./styles/GlobalStyles";

import usePersistedState from "./hooks/usePersistedState";
import { light } from "./styles/themes/light";
import { AppRoutes } from "./routes";

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyleComposed />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
