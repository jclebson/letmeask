import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DefaultTheme } from "styled-components";
import usePersistedState from "../../../hooks/usePersistedState";

import { Home } from "../../../pages/Home";
import { dark } from "../../../styles/themes/dark";
import { light } from "../../../styles/themes/light";

export default {
  title: "Pages/Home",
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);
  return (
    <Home toggleTheme={() => setTheme(theme.name === "light" ? dark : light)} />
  );
};

export const HomePage = Template.bind({});
