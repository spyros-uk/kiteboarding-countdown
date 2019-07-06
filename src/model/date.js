import { differenceInSeconds } from "date-fns";

export { getDateDifferenceFromNow };

function getDateDifferenceFromNow(endDate) {
  const SECONDS = 1000;
  const MINUTES = SECONDS * 60;
  const HOURS = MINUTES * 60;
  const DAYS = HOURS * 24;

  const difference = endDate.getTime() - new Date().getTime();

  return {
    days: Math.floor(difference / DAYS),
    hours: Math.floor((difference % DAYS) / HOURS),
    minutes: Math.floor((difference % HOURS) / MINUTES),
    seconds: Math.floor((difference % MINUTES) / SECONDS)
  };
}
