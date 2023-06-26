import styled from "styled-components";

export const StyledQuote = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;

  svg {
    fill: white;
    cursor: pointer;
  }

  @media screen and (min-width: 1200px) {
    p {
      font-size: 1.2rem;
    }
  }
`;
