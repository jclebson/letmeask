import { useContext } from "react";
import { ThemeContext } from "styled-components";

import IllustrationImg from "../../assets/images/Illustration.svg";
import LogoImg from "../../assets/images/Logo.svg";
import LogoLightImg from "../../assets/images/Logo-light.svg";
import GoogleIcon from "../../assets/images/Google-Icon.svg";
import LogInIcon from "../../assets/images/Log-in.svg";

import { PageAuth, Aside, Main, Content } from "./styles";
import { ToggleTheme } from "../../components/ToggleTheme";
import { ButtonWrapper } from "../../components/Button";

type HomePropsType = {
  toggleTheme: () => void;
};

export const Home = ({ toggleTheme }: HomePropsType) => {
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
          <button type="button" className="create-room-button">
            <img src={GoogleIcon} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form action="">
            <input type="text" placeholder="Digite o código da sala" />
            <ButtonWrapper type="submit" color="primary">
              <img src={LogInIcon} alt="Entrar na sala" />
              Entrar na sala
            </ButtonWrapper>
          </form>
        </Content>
      </Main>
    </PageAuth>
  );
};
