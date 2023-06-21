import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  background-color: salmon;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const ClockInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 3em 2em;

  button {
    border: none;
    border-radius: 10em;
    padding: 1.5em;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    width: 13em;
  }
`;

export const QuoteContainer = styled.div`
  h1 {
    font-size: 1.1rem;
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4em;
`;

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
    }
  }
`;
