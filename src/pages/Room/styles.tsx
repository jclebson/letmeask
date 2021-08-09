import styled from "styled-components";
import { ButtonWrapper } from "../../components/Button";

export const ButtonCode = styled(ButtonWrapper)`
  height: 2.5rem;
  display: flex;

  > span {
    display: block;
    width: 12.5rem;
    flex: 1;
    font-size: 0.875em;
    font-weight: 500;
    line-height: 1.0256rem;
    color: ${(props) => props.theme.colors.primaryColors.black};
  }

  > div {
    height: 2.5rem;
    padding: 0.625rem 0.75rem;
    background-color: ${(props) => props.theme.colors.primaryColors.primary};
    border-radius: 8px 0 0 8px;
  }
`;

export const ButtonCloseRoom = styled(ButtonWrapper)`
  height: 2.5rem;
  font-size: 0.875em;
  font-weight: 500;
  line-height: 1.0256rem;
  padding: 0 1.5rem;
  margin: 0;
`;

export const Header = styled.header`
  padding: 1.5rem;
  border-bottom: 1px solid #e2e2e2;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 70rem;
    margin: 0 auto;

    > img {
      max-height: 2.8125rem;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;

export const Main = styled.main`
  max-width: 50rem;
  margin: 0 auto;

  .room-title {
    margin: 4rem 0 1.5rem;
    font-family: "Poppins";
    font-size: 0.75em;
    font-weight: 700;
    line-height: 2.25rem;
    color: ${(props) => props.theme.colors.primaryColors.black};
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3.75rem;

    > img {
      max-height: 10rem;
    }

    > h2 {
      font-family: "Poppins";
      font-size: 1.125em;
      font-weight: 600;
      line-height: 1.6875rem;
      color: ${(props) => props.theme.colors.primaryColors.black};
      margin-top: 1rem;
      text-align: center;
    }

    > p {
      max-width: 17.8125rem;
      font-size: 0.875em;
      font-weight: 400;
      line-height: 1.3125rem;
      text-align: center;
      margin-top: 8px;
      color: ${(props) => props.theme.colors.primaryColors.gray.dark};
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
