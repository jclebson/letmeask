import { ReactNode } from "react";
import styled, { DefaultTheme } from "styled-components";
import classnames from "classnames";

type ButtonPropsType = {
  type: "button" | "submit" | "reset" | undefined;
  children: ReactNode;
  color?: "default" | "primary" | "danger";
  variant?: "default" | "outlined";
  className?: string;
};

const Button = styled.button`
  width: 100%;
  max-width: 20rem;
  height: 50px;
  border-radius: 8px;
  padding: 13px 0;
  background-color: ${(props) => {
    switch (props.color) {
      case "primary":
        return props.theme.name === "dark"
          ? props.theme.colors.primaryColors.gray.dark
          : props.theme.colors.primaryColors.primary;
      case "danger":
        return props.theme.colors.primaryColors.danger;
      default:
        return props.theme.colors.primaryColors.gray.light;
    }
  }};
  color: ${(props) =>
    props.color !== "default"
      ? props.theme.colors.primaryColors.white.details
      : props.theme.colors.primaryColors.gray.dark};
  border: none;
  font-size: 1em;
  line-height: 1.1719rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    margin-right: 8px;
  }

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const getModeTheme = (themeProps: DefaultTheme) => {
  return themeProps.name === "dark"
    ? themeProps.colors.primaryColors.gray.dark
    : themeProps.colors.primaryColors.primary;
};

const ButtonOutlined = styled(Button)`
  max-width: 20rem;
  background-color: transparent;
  border: 1px solid ${(props) => getModeTheme(props.theme)};
  color: ${(props) => getModeTheme(props.theme)};
`;

export const ButtonWrapper = ({
  type,
  children,
  color = "default",
  variant = "default",
  className,
}: ButtonPropsType) => {
  switch (variant) {
    case "outlined":
      return (
        <ButtonOutlined
          type={type}
          color={color}
          className={classnames(className)}
        >
          {children}
        </ButtonOutlined>
      );
    default:
      return (
        <Button type={type} color={color} className={classnames(className)}>
          {children}
        </Button>
      );
  }
};
