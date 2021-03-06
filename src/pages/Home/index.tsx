import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { useHistory } from "react-router-dom";

import IllustrationImg from "../../assets/images/Illustration.svg";
import LogoImg from "../../assets/images/Logo.svg";
import LogoLightImg from "../../assets/images/Logo-light.svg";
import GoogleIcon from "../../assets/images/Google-Icon.svg";
import LogInIcon from "../../assets/images/Log-in.svg";

import { PageAuth, Main, Content, ButtonEnterRoom } from "./styles";
import { ToggleTheme } from "../../components/ToggleTheme";
import { Aside } from "../../components/Aside";

import { signInWithGoogle } from "../../store/reducers/auth";
import { useAppDispatch, useAppSelector } from "../../hooks/hooksRedux";
import useCheckAuth from "../../hooks/useCheckAuth";

export const Home = () => {
  const { name } = useContext(ThemeContext);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authGoogle);

  const handleCreateRoomWithGoogle = async () => {
    if (useCheckAuth(user)) {
      await signInWithGoogle(dispatch);
    }
    history.push("/rooms/new");
  };

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
          <button
            type="button"
            className="create-room-button"
            onClick={handleCreateRoomWithGoogle}
          >
            <img src={GoogleIcon} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form action="">
            <input type="text" placeholder="Digite o código da sala" />
            <ButtonEnterRoom
              type="submit"
              color="primary"
              onClick={() => history.push("/admin/room")}
            >
              <img src={LogInIcon} alt="Entrar na sala" />
              Entrar na sala
            </ButtonEnterRoom>
          </form>
        </Content>
      </Main>
    </PageAuth>
  );
};
