import { add, sub } from "date-fns";

const getDuration = (daysBefore: number, daysAfter: number): [Date, Date] => {
  const today = new Date();
  return [sub(today, { days: daysBefore }), add(today, { days: daysAfter })];
};

export { getDuration };
