import { ReactNode } from "react";
import styled from "styled-components";

const Content = styled.div`
  width: 50rem;
  padding: 1.5rem;
  background-color: ${(props) =>
    props.theme.colors.primaryColors.white.details};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);

  p {
    color: ${(props) => props.theme.colors.primaryColors.black};
    font-size: 1em;
    line-height: 1.5rem;
  }

  > footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    color: ${(props) => props.theme.colors.primaryColors.gray.dark};
  }

  .user-info {
    display: flex;
    align-items: center;

    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      margin-right: 8px;
    }
  }

  .questions-options {
    display: flex;
    gap: 16px;

    button {
      border: none;
      background-color: transparent;
      cursor: pointer;
      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.7);
      }
    }
  }
`;

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlighted?: boolean;
};

export const Question = ({
  content,
  author,
  isAnswered = false,
  isHighlighted = false,
  children,
}: QuestionProps) => {
  return (
    <Content>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div className="questions-options">{children}</div>
      </footer>
    </Content>
  );
};
