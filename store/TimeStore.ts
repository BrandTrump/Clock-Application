import { getTime } from "@/helpers/getCurrentTime";
import { create } from "zustand";

interface Time {
  time: FetchedData;
  getTime: () => void;
}

export const useTimeStore = create<Time>()((set) => ({
  time: {
    data: {
      timezone: {
        id: "",
        current_time: "",
        code: "",
        is_daylight_saving: false,
        gmt_offset: 0,
      },
      location: {
        continent: {
          code: "",
          name: "",
        },
        country: {
          calling_codes: [],
          currencies: [{ name: "" }],
          languages: [{ name: "", name_native: "" }],
          name: "",
          name_translated: "",
          timezones: [],
        },
        city: {
          name: "",
          name_translated: "",
        },
      },
    },
  },

  getTime: async () => {
    const time = await getTime();
    set({ time });
  },
}));
