import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ToggleTheme } from ".";

export default {
  title: "Components/ToggleTheme",
  component: ToggleTheme,
} as ComponentMeta<typeof ToggleTheme>;

const Template: ComponentStory<typeof ToggleTheme> = (args) => {
  return <ToggleTheme toggleTheme={() => {}} />;
};

export const ButtonDarkMode = Template.bind({});
