import styled from "styled-components";

export const PageAuth = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: stretch;
`;

export const Aside = styled.aside`
  background-color: #835afd;
  flex: 7;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  padding: 120px 80px;

  img {
    max-width: 320px;
  }

  strong {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 2em;
    line-height: 2.625rem;
    margin-top: 0.5rem;
  }

  p {
    font-family: "Roboto";
    font-weight: 400;
    font-size: 1.5em;
    line-height: 2rem;
    margin-top: 1rem;
    color: #f8f8f8;
  }
`;

export const Main = styled.main`
  flex: 8;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
    border: none;
    border-radius: 8px;
    background-color: #ea4335;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
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
    color: #a8a8b3;
    margin: 2rem 0;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      height: 1px;
      flex: 1;
      background-color: #a8a8b3;
      margin-right: 1rem;
    }

    &::after {
      content: "";
      height: 1px;
      flex: 1;
      background-color: #a8a8b3;
      margin-left: 1rem;
    }
  }

  form {
    input {
      width: 100%;
      max-width: 20rem;
      height: 50px;
      border-radius: 8px;
      border: 1px solid #a8a8b3;
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
`;
