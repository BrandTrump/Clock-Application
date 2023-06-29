"use client";
import Clock from "@/components/Clock";
import QuoteSection from "@/components/QuoteSection";
import TimezoneSection from "@/components/TimezoneSection";
import {
  ClockInformation,
  MainContainer,
  PageContainer,
  QuoteContainer,
  TimeContainer,
  TimezoneContainer,
} from "@/components/styles/HomePage.styled";
import { useTimeStore } from "@/store/TimeStore";
import { useEffect, useState } from "react";

export default function Home() {
  const [time, getTime] = useTimeStore((state) => [state.time, state.getTime]);
  const [background, setBackground] = useState(false);

  useEffect(() => {
    getTime();

    const dateTime = new Date();
    const currentHour = dateTime.getHours();
    currentHour >= 18 ? setBackground(false) : setBackground(true);
  }, [getTime]);

  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <PageContainer>
      <MainContainer
        expanded={expanded.toString()}
        background={background.toString()}
      >
        <ClockInformation expanded={expanded.toString()}>
          <QuoteContainer expanded={expanded.toString()}>
            <QuoteSection />
          </QuoteContainer>

          <TimeContainer>
            <Clock time={time} />

            <button onClick={handleClick}>
              {!expanded ? "More" : "Less"}{" "}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 448 512"
                >
                  <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </span>
            </button>
          </TimeContainer>
        </ClockInformation>
      </MainContainer>
      <TimezoneContainer expanded={expanded.toString()}>
        <TimezoneSection time={time} />
      </TimezoneContainer>
    </PageContainer>
  );
}
