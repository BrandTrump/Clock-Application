import styled from "styled-components";
import bgImg from "@/assets/images/vuubpj07ny571.jpg";
import bgImg2 from "@/assets/images/fz9wrpd91qi71.jpg";

interface MainContainerProps {
  expanded: string;
  background?: string;
}

export const PageContainer = styled.div`
  height: 100vh;
`;

export const MainContainer = styled.div<MainContainerProps>`
  margin: 0;
  padding: 0;
  background-image: ${({ background }) =>
    background === "true" ? `url(${bgImg?.src})` : `url(${bgImg2?.src})`};
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  height: ${({ expanded }) => (expanded === "true" ? "50%" : "100%")};
  transition: 0.5s;
`;

export const ClockInformation = styled.div<MainContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ expanded }) =>
    expanded === "true" ? "end" : "space-between"};
  height: 100%;
  padding: 3em 2em;

  button {
    border: none;
    border-radius: 10em;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0.5em 0.5em 0.5em 2em;
    width: 10em;
    color: gray;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.5s;

    &:hover {
      background-color: lightgray;
      transition: 0.5s;
    }

    svg {
      fill: gray;
      width: 1em;
      height: auto;
      background-color: black;
      padding: 1em;
      border-radius: 50%;
      rotate: ${({ expanded }) => (expanded === "true" ? "180deg" : "0")};
    }
  }

  @media screen and (min-width: 1200px) {
    min-width: 1200px;
    margin: 0 auto;

    button {
      width: 14em;
    }
  }
`;

export const QuoteContainer = styled.div<MainContainerProps>`
  display: ${({ expanded }) => (expanded === "true" ? "none" : "")};

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

export const TimezoneContainer = styled.div<MainContainerProps>`
  display: ${({ expanded }) => (expanded === "true" ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  padding: 0 1em;
  height: 50%;
  color: black;
  transition: 1s;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export const TimezoneDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1rem;
    color: gray;
    font-weight: 400;
  }

  h1 {
    font-size: 1.4rem;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: column;
    align-items: start;
    margin-top: 4em;

    h2 {
      font-size: 1.5rem;
      color: gray;
      margin: 0;
    }

    h1 {
      font-size: 3.5rem;
    }
  }
`;
