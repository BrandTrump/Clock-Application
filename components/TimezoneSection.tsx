import { TimezoneDetails } from "./styles/HomePage.styled";

type Props = {
  time: FetchedData;
};

function TimezoneSection({ time }: Props) {
  return (
    <>
      <div>
        <TimezoneDetails>
          <h2>Current Timezone</h2>
          <h1>{time.data.timezone.id}</h1>
        </TimezoneDetails>
        <TimezoneDetails>
          <h2>Calling Code</h2>
          <h1>{time.data.location.country.calling_codes[0]}</h1>
        </TimezoneDetails>
      </div>
      <div>
        <TimezoneDetails>
          <h2>Currency</h2>
          <h1>{time.data.location.country.currencies[0].name}</h1>
        </TimezoneDetails>
        <TimezoneDetails>
          <h2>Main Language</h2>
          <h1>{time.data.location.country.languages[0].name}</h1>
        </TimezoneDetails>
      </div>
    </>
  );
}

export default TimezoneSection;
