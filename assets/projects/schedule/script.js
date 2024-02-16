import darkMode from "./scripting/dark_mode.js";
import daySchedule from "./scripting/days_schedule.js";
import livingDays from "./scripting/living_days.js";
import timeToYear from "./scripting/time_to_year.js";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  // console.log(e);
  darkMode(".body", ".btn_dark", "dark-mode");
  livingDays("living_days");
  timeToYear("end_year", "June 7,2024 12:00:00");
});

daySchedule();
