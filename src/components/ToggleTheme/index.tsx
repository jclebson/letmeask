import { useContext } from "react";
import Switch from "react-switch";
import styled, { ThemeContext } from "styled-components";

import { useAppDispatch } from "../../hooks/hooksRedux";
import { changeTheme } from "../../store/reducers/themeSwitch";
import { dark } from "../../styles/themes/dark";
import { light } from "../../styles/themes/light";

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

export const ToggleTheme = () => {
  const { colors, name } = useContext(ThemeContext);
  const dispatch = useAppDispatch();

  return (
    <Toggle className="toggle-theme">
      <span>Dark Mode</span>
      <Switch
        onChange={() => dispatch(changeTheme(name === "light" ? dark : light))}
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
