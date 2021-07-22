import styled from "styled-components";
import { ButtonWrapper } from "../../components/Button";

export const ButtonCode = styled(ButtonWrapper)`
  height: 2.5rem;
  display: flex;

  > span {
    display: block;
    width: 12.5rem;
    flex: 1;
    font-size: 0.875em;
    font-weight: 500;
    line-height: 1.0256rem;
    color: ${(props) => props.theme.colors.primaryColors.black};
  }

  > div {
    height: 2.5rem;
    padding: 0.625rem 0.75rem;
    background-color: ${(props) => props.theme.colors.primaryColors.primary};
    border-radius: 8px 0 0 8px;
  }
`;

export const ButtonCloseRoom = styled(ButtonWrapper)`
  height: 2.5rem;
  font-size: 0.875em;
  font-weight: 500;
  line-height: 1.0256rem;
  padding: 0 1.5rem;
`;

export const Header = styled.header`
  padding: 1.5rem;
  border-bottom: 1px solid #e2e2e2;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 70rem;
    margin: 0 auto;

    > img {
      max-height: 2.8125rem;
    }

    > div {
      display: flex;
      align-items: center;
    }
  }
`;
