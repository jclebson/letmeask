import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "./styles/ThemeProvider";
import GlobalStyleComposed from "./styles/GlobalStyles";

import { AppRoutes } from "./routes";
import { useAppSelector } from "./hooks/hooksRedux";

const App = () => {
  const { themeMode } = useAppSelector((state) => state);

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyleComposed />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
