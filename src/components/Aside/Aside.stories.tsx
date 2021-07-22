import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Aside } from ".";
import IllustrationImg from "../../assets/images/Illustration.svg";

export default {
  title: "Components/Aside",
  component: Aside,
} as ComponentMeta<typeof Aside>;

export const AsideTemplate: ComponentStory<typeof Aside> = () => (
  <Aside>
    <img src={IllustrationImg} alt="Ilustração perguntas e respostas" />
    <div>
      <strong>Toda pergunta tem uma resposta.</strong>
      <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
    </div>
  </Aside>
);
