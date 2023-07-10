interface Located {
  continent: {
    code: string;
    name: string;
  };
  country: {
    calling_codes: string[];
    currencies: {
      name: string;
    }[];
    languages: {
      name: string;
    }[];
    name: string;
    timezones: string[];
  };
  city: {
    name: string;
  };
}

interface Timezone {
  id: string;
  current_time: string;
  code: string;
  is_daylight_saving: boolean;
  gmt_offset: number;
}

interface Data {
  timezone: Timezone;
  location: Located;
}

interface FetchedData {
  data: Data;
}
