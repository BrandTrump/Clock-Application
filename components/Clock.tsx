import { getTime } from "@/helpers/getCurrentTime";
import { useEffect, useState } from "react";

type TimeInfo = {
  datetime: number;
  abbreviation: string;
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

  const dateTime = new Date(time!.datetime);
  const hours = dateTime.getUTCHours();
  const minutes = dateTime.getUTCMinutes().toString().padStart(2, "0");
  const time24HourFormat = `${hours}:${minutes}`;

  return (
    <>
      {!time ? (
        <p>Loading...</p>
      ) : (
        <h1>
          {time24HourFormat}
          <span>{time.abbreviation}</span>
        </h1>
      )}
    </>
  );
}

export default Clock;
