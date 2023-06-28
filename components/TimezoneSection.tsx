import { TimezoneDetails } from "./styles/HomePage.styled";

type Props = {
  time: TimeInfo;
};

function TimezoneSection({ time }: Props) {
  return (
    <>
      <div>
        <TimezoneDetails>
          <h2>Current Timezone</h2>
          <h1>{time.timezone}</h1>
        </TimezoneDetails>
        <TimezoneDetails>
          <h2>Day of the year</h2>
          <h1>{time.day_of_year}</h1>
        </TimezoneDetails>
      </div>
      <div>
        <TimezoneDetails>
          <h2>Day of the Week</h2>
          <h1>{time.day_of_week}</h1>
        </TimezoneDetails>
        <TimezoneDetails>
          <h2>Week Number</h2>
          <h1>{time.week_number}</h1>
        </TimezoneDetails>
      </div>
    </>
  );
}

export default TimezoneSection;
