import { ButtonCloseRoom, ButtonCode, Header } from "./styles";

import LogoImg from "../../assets/images/Logo.svg";
import CopyImg from "../../assets/images/Copy.svg";

export const Room = () => {
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
            <ButtonCloseRoom variant="outlined" type="button">
              Encerrar sala
            </ButtonCloseRoom>
          </div>
        </div>
      </Header>
    </div>
  );
};
