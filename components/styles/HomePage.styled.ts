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
  padding: 2em;

  button {
    border: none;
    border-radius: 10em;
    padding: 1.5em 5em;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
  }
`;
