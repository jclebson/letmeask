import { PageAuth, Aside, Main, Content } from "./HomeStyle";

import IllustrationImg from "../../assets/images/Illustration.svg";
import LogoImg from "../../assets/images/Logo.svg";
import GoogleIcon from "../../assets/images/Google-Icon.svg";
import LogInIcon from "../../assets/images/Log-in.svg";

export const Home = () => {
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
        <Content>
          <img src={LogoImg} alt="Letmeask" />
          <button type="button" className="create-room-button">
            <img src={GoogleIcon} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form action="">
            <input type="text" placeholder="Digite o código da sala" />
            <button type="submit">
              <img src={LogInIcon} alt="Entrar na sala" />
              Entrar na sala
            </button>
          </form>
        </Content>
      </Main>
    </PageAuth>
  );
};
