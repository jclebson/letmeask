import { ReactNode } from "react";
import styled from "styled-components";

const AsideStyle = styled.aside`
  background-color: ${(props) => props.theme.colors.primaryColors.primary};
  display: flex;
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
    color: ${(props) => props.theme.colors.primaryColors.white.background};
  }
`;

type AsideProps = {
  children: ReactNode;
};

export const Aside = ({ children }: AsideProps) => {
  return <AsideStyle>{children}</AsideStyle>;
};
