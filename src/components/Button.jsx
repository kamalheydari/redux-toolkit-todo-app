import styled, { css } from "styled-components";

//? styles
const Button = styled.button`
  display: inline-block;
  padding: 0.8rem 2rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1.3rem;
  text-transform: capitalize;
  cursor: pointer;
  opacity: 0.95;
  transition: opacity 0.1s;
  &:hover {
    opacity: 1;
  }
  ${(props) => {
    switch (props.variant) {
      case "primary":
        return css`
          background-color: var(--primaryGreen);
          color: var(--white);
        `;
      case "secondary":
        return css`
          background-color: var(--bg-3);
          color: var(--black-1);
        `;
      case "icon":
        return css`
          font-size: 2.5rem;
          padding: 0.5rem;
          border-radius: 4px;
          width: 32px;
          height: 32px;
          background-color: var(--gray-2);
          color: var(--black-2);
          display: flex;
          align-items: center;
          justify-content: center;
        `;
      default:
        break;
    }
  }}
`;

export default Button;
