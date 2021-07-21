import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ToggleTheme } from ".";

export default {
  title: "Components/ToggleTheme",
  component: ToggleTheme,
} as ComponentMeta<typeof ToggleTheme>;

const Template: ComponentStory<typeof ToggleTheme> = () => {
  return <ToggleTheme />;
};

export const ButtonDarkMode = Template.bind({});
