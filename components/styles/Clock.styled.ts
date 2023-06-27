import styled from "styled-components";

export const TimeInformation = styled.div`
  h1 {
    font-size: 6rem;
    padding: 0;
    margin: 0;

    span {
      font-size: 1rem;
      font-weight: 300;
    }
  }

  h2 {
    margin: 0;
    text-transform: uppercase;
    font-weight: 300;

    svg {
      fill: white;
      margin-right: 0.5em;
      width: 0.85em;
      height: auto;
    }
  }

  @media screen and (min-width: 1200px) {
    h1 {
      font-size: 12rem;

      span {
        font-size: 2rem;
      }
    }

    h2 {
      font-size: 2.2rem;
    }
  }
`;
