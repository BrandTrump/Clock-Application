import { getTime } from "@/helpers/getCurrentTime";
import { create } from "zustand";

interface Time {
  time: TimeInfo;
  getTime: () => void;
}

export const useTimeStore = create<Time>()((set) => ({
  time: {
    utc_datetime: 0,
    abbreviation: "",
    timezone: "",
    day_of_week: 0,
    day_of_year: 0,
    week_number: 0,
  },

  getTime: async () => {
    const time = await getTime();
    set({ time });
  },
}));
