import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Question } from ".";

import DeleteImg from "../../assets/images/Excluir.svg";
import AnswerImg from "../../assets/images/Messages.svg";
import CheckImg from "../../assets/images/Check.svg";
import AvatarImg from "../../assets/images/Avatar.svg";

export default {
  title: "Components/Question",
  component: Question,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Question>;

export const QuestionTemplate: ComponentStory<typeof Question> = () => (
  <Question
    content="Uma mensagem qualquer de teste"
    author={{ name: "Jefferson Clebson", avatar: AvatarImg }}
  >
    <button type="button">
      <img src={CheckImg} alt="Marcar pergunta como respondida" />
    </button>
    <button type="button">
      <img src={AnswerImg} alt="Dar destaque a pergunta" />
    </button>
    <button type="button">
      <img src={DeleteImg} alt="Deletar pergunta" />
    </button>
  </Question>
);
