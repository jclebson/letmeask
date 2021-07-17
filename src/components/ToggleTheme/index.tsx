import { useContext } from "react";
import Switch from "react-switch";
import styled, { ThemeContext } from "styled-components";

const Toggle = styled.div`
  display: flex;
  align-items: center;

  span {
    font-family: "Roboto", sans-serif;
    font-size: 1em;
    font-weight: 500;
    line-height: 1.1531rem;
    color: ${(props) => {
      if (props.theme.name === "dark") {
        return props.theme.colors.primaryColors.white.details;
      }
      return props.theme.colors.primaryColors.black;
    }};
    margin-right: 10px;
  }
`;

type ToggleThemePropsType = {
  toggleTheme: () => void;
};

export const ToggleTheme = ({ toggleTheme }: ToggleThemePropsType) => {
  const { colors, name } = useContext(ThemeContext);

  return (
    <Toggle className="toggle-theme">
      <span>Dark Mode</span>
      <Switch
        onChange={toggleTheme}
        checked={name === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={45}
        offColor={colors.primaryColors.gray.dark}
        onColor={colors.primaryColors.danger}
      />
    </Toggle>
  );
};
