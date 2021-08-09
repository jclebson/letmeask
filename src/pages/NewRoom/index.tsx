import { FormEvent, useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";
import { Link, useHistory } from "react-router-dom";

import IllustrationImg from "../../assets/images/Illustration.svg";
import LogoImg from "../../assets/images/Logo.svg";
import LogoLightImg from "../../assets/images/Logo-light.svg";

import { PageAuth, Main, Content, ButtonCreateRoom } from "./styles";
import { ToggleTheme } from "../../components/ToggleTheme";
import { Aside } from "../../components/Aside";
import { useAppSelector } from "../../hooks/hooksRedux";
import useCheckAuth from "../../hooks/useCheckAuth";
import { database } from "../../services/firebase";

export const NewRoom = () => {
  const { name } = useContext(ThemeContext);
  const { user } = useAppSelector((state) => state.authGoogle);
  const [newRoom, setNewRoom] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (useCheckAuth(user)) {
      history.push("/");
    }
  }, []);

  async function handleCreateRoom(evt: FormEvent) {
    evt.preventDefault();

    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }

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
          <form action="" onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={({ target }) => setNewRoom(target.value)}
            />
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
