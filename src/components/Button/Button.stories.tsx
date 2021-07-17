import { ComponentStory, ComponentMeta, Story } from "@storybook/react";

import LogInIcon from "../../assets/images/Log-in.svg";

import { ButtonWrapper } from ".";

export default {
  title: "Components/Button",
  component: ButtonWrapper,
  argTypes: {
    variant: {
      options: ["default", "outlined"],
      control: { type: "radio" },
    },
    color: {
      options: ["default", "primary", "danger"],
      control: { type: "radio" },
    },
    type: {
      control: false,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ButtonWrapper>;

const ButtonTemplate: ComponentStory<typeof ButtonWrapper> = ({
  color,
  variant,
  children,
}) => {
  return (
    <>
      <ButtonWrapper type="button" color={color} variant={variant}>
        {children}
      </ButtonWrapper>
      <ButtonWrapper type="button" color={color} variant={variant}>
        <img src={LogInIcon} alt="" />
        {children}
      </ButtonWrapper>
    </>
  );
};

export const ButtonDefault = ButtonTemplate.bind({});
ButtonDefault.args = {
  color: "default",
  variant: "default",
  children: "Entrar na Sala",
};
