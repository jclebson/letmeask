import { ButtonCloseRoom, ButtonCode, Header, Main } from "./styles";

import LogoImg from "../../assets/images/Logo.svg";
import CopyImg from "../../assets/images/Copy.svg";
import EmptyStateImg from "../../assets/images/Empty-state.svg";
import { useHistory } from "react-router-dom";

export const Room = () => {
  const history = useHistory();

  return (
    <div>
      <Header>
        <div className="content">
          <img src={LogoImg} alt="Letmeask" />
          <div>
            <ButtonCode type="button" variant="outlined">
              <div>
                <img src={CopyImg} alt="Copia código da Sala" />
              </div>
              <span>Sala #65454654</span>
            </ButtonCode>
            <ButtonCloseRoom
              variant="outlined"
              type="button"
              onClick={() => history.push("/")}
            >
              Encerrar sala
            </ButtonCloseRoom>
          </div>
        </div>
      </Header>

      <Main>
        <div className="room-title">
          <h1>Sala React Q&amp;A</h1>
        </div>

        <div className="empty-state">
          <img src={EmptyStateImg} alt="Nenhuma pergunta por aqui..." />
          <h2>Nenhuma pergunta por aqui...</h2>
          <p>
            Envie o código desta sala para seus amigos e comece a responder
            perguntas!
          </p>
        </div>
      </Main>
    </div>
  );
};
