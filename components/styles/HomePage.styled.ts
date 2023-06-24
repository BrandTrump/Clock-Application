import styled from "styled-components";
import bgImg from "@/assets/images/vuubpj07ny571.jpg";

export const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  background-image: url(${bgImg?.src});
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
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
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    padding: 1em 2em;
    width: 10em;
    color: gray;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      fill: gray;
      width: 1em;
      height: auto;
    }
  }

  @media screen and (min-width: 1200px) {
    button {
      width: 14em;
      height: 5em;
    }
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

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
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
      width: 0.85em;
      height: auto;
    }
  }
`;
