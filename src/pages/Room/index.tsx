import { useContext } from "react";
import { ThemeContext } from "styled-components";

import IllustrationImg from "../../assets/images/Illustration.svg";
import LogoImg from "../../assets/images/Logo.svg";
import LogoLightImg from "../../assets/images/Logo-light.svg";

import { PageAuth, Aside, Main, Content } from "./styles";
import { ToggleTheme } from "../../components/ToggleTheme";
import { ButtonWrapper } from "../../components/Button";

type RoomPropsType = {
  toggleTheme: () => void;
};

export const Room = ({ toggleTheme }: RoomPropsType) => {
  const { name } = useContext(ThemeContext);

  return (
    <PageAuth>
      <Aside>
        <img src={IllustrationImg} alt="Ilustração perguntas e respostas" />
        <div>
          <strong>Toda pergunta tem uma resposta.</strong>
          <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
        </div>
      </Aside>
      <Main>
        <ToggleTheme toggleTheme={toggleTheme} />
        <Content>
          {name === "light" ? (
            <img src={LogoImg} alt="Letmeask" />
          ) : (
            <img src={LogoLightImg} alt="Letmeask" />
          )}
          <h2>Crie uma nova sala</h2>
          <form action="">
            <input type="text" placeholder="Nome da sala" />
            <ButtonWrapper type="submit" color="primary">
              Criar sala
            </ButtonWrapper>
          </form>
          <p>
            Quer entrar em uma sala já existente? <a href="#">Clique aqui</a>
          </p>
        </Content>
      </Main>
    </PageAuth>
  );
};
