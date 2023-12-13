import { formatDistance } from "date-fns";

export const getTimediff = (datestr) => {
  const currDate = new Date();
  const prevDate = new Date(datestr);

  const formatteddiff = formatDistance(prevDate, currDate, {
    addSuffix: true,
  });

  return formatteddiff;
};
