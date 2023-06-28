import { getTime } from "@/helpers/getCurrentTime";
import { useEffect, useState } from "react";
import { TimeInformation } from "./styles/Clock.styled";

type TimeInfo = {
  utc_datetime: number;
  abbreviation: string;
  timezone: string;
};

function Clock() {
  const [time, setTime] = useState<TimeInfo>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTime();
        setTime(data);
      } catch (error) {
        console.error("Failed to fetch time:", error);
      }
    };

    fetchData();
  }, []);

  if (!time) {
    return <div>Loading...</div>;
  }

  const dateTime = new Date(time!.utc_datetime);
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes().toString().padStart(2, "0");
  const time24HourFormat = `${hours}:${minutes}`;

  let greeting = "Good Morning";
  const currentHour = dateTime.getHours();
  if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good Afternoon";
  } else if (currentHour >= 18) {
    greeting = "Good Evening";
  }

  return (
    <>
      <TimeInformation>
        <h2>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
            </svg>
          </span>
          {greeting}, it&apos;s currently
        </h2>
        <h1>
          {time24HourFormat}
          <span>{time.abbreviation}</span>
        </h1>
        <h2>In {time.timezone}</h2>
      </TimeInformation>
    </>
  );
}

export default Clock;
