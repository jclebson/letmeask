import { useContext, useEffect } from "react";
import { ThemeContext } from "styled-components";
import { Link, useHistory } from "react-router-dom";

import IllustrationImg from "../../assets/images/Illustration.svg";
import LogoImg from "../../assets/images/Logo.svg";
import LogoLightImg from "../../assets/images/Logo-light.svg";

import { PageAuth, Main, Content, ButtonCreateRoom } from "./styles";
import { ToggleTheme } from "../../components/ToggleTheme";
import { Aside } from "../../components/Aside";
import { useAppSelector } from "../../hooks/hooksRedux";

export const NewRoom = () => {
  const { name } = useContext(ThemeContext);
  const { user } = useAppSelector((state) => state.authGoogle);
  const history = useHistory();

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      history.push("/");
    }
  }, []);

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
        <ToggleTheme />
        <Content>
          {name === "light" ? (
            <img src={LogoImg} alt="Letmeask" />
          ) : (
            <img src={LogoLightImg} alt="Letmeask" />
          )}
          <h2>Crie uma nova sala</h2>
          <form action="">
            <input type="text" placeholder="Nome da sala" />
            <ButtonCreateRoom type="submit" color="primary">
              Criar sala
            </ButtonCreateRoom>
          </form>
          <p>
            Quer entrar em uma sala já existente?{" "}
            <Link to="/">Clique aqui</Link>
          </p>
        </Content>
      </Main>
    </PageAuth>
  );
};
