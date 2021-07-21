import styled from "styled-components";

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

  .create-room-button {
    max-width: 100%;
    max-width: 20rem;
    height: 50px;
    border: 1px solid ${(props) => props.theme.colors.primaryColors.gray.medium};
    border-radius: 8px;
    background-color: ${(props) =>
      props.theme.colors.primaryColors.white.details};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.colors.primaryColors.black};
    font-weight: 500;
    line-height: 1.1719rem;
    font-size: 1em;
    cursor: pointer;
    margin-top: 3.5rem;

    img {
      margin-right: 8px;
    }

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  .separator {
    font-size: 0.875em;
    line-height: 1.0256rem;
    font-weight: 400;
    color: ${(props) => props.theme.colors.primaryColors.gray.medium};
    margin: 2rem 0;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      height: 1px;
      flex: 1;
      background-color: ${(props) =>
        props.theme.colors.primaryColors.gray.medium};
      margin-right: 1rem;
    }

    &::after {
      content: "";
      height: 1px;
      flex: 1;
      background-color: ${(props) =>
        props.theme.colors.primaryColors.gray.medium};
      margin-left: 1rem;
    }
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
