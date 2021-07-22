import styled from "styled-components";

import { ButtonWrapper } from "../../components/Button";

export const PageAuth = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: stretch;
`;

export const Main = styled.main`
  flex: 8;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => {
    if (props.theme.name === "dark") {
      return props.theme.colors.primaryColors.primary;
    }
    return props.theme.colors.primaryColors.white.background;
  }};

  .toggle-theme {
    position: absolute;
    top: 30px;
    right: 20px;
  }
`;

export const ButtonCreateRoom = styled(ButtonWrapper)``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 20rem;
  align-items: stretch;
  text-align: center;

  > img {
    align-self: center;
  }

  h2 {
    font-family: "Poppins";
    font-weight: 700;
    font-size: 1.5em;
    line-height: 2.25rem;
    color: ${(props) => {
      if (props.theme.name === "dark") {
        return props.theme.colors.primaryColors.white.details;
      }
      return props.theme.colors.primaryColors.black;
    }};
    margin: 3.5rem 0 1.5rem;
  }

  form {
    input {
      width: 100%;
      max-width: 20rem;
      height: 50px;
      border-radius: 8px;
      border: 1px solid
        ${(props) => props.theme.colors.primaryColors.gray.medium};
      background-color: #fff;
      padding: 13px 12px;
      font-size: 1em;
      font-weight: 400;
      line-height: 1.1719rem;
    }

    button {
      margin-top: 1rem;
    }
  }

  p {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.0256rem;
    color: ${(props) => props.theme.colors.primaryColors.gray.dark};
    margin-top: 1rem;

    a {
      color: #e559f9;
      text-decoration: underline;
    }
  }

  & {
    opacity: 0;
    transform: translateX(-20px);
    animation: animeLeft 0.5s forwards;
  }

  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;
