import styled, { css } from "styled-components";

//? styles
const Select = styled.select`
  font-weight: 500;
  color: var(--black-2);
  background-color: var(--bg-3);
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 6px;
  cursor: pointer;
  height: auto;
  ${(props) => {
    switch (props.size) {
      case "mini":
        return css`
          width: 150px;
        `;
      case "large":
        return css`
          width: 100%;
        `;
      default:
        break;
    }
  }}
`;
export default Select;
