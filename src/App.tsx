import GlobalStyleComposed from "./styles/GlobalStyles";
import { Home } from "./pages/Home";
import { ThemeProvider } from "./styles/ThemeProvider";
import { light } from "./styles/themes/light";
import { dark } from "./styles/themes/dark";
import usePersistedState from "./hooks/usePersistedState";
import { DefaultTheme } from "styled-components";

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.name === "light" ? dark : light);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyleComposed />
        <Home toggleTheme={toggleTheme} />
      </ThemeProvider>
    </div>
  );
};

export default App;
