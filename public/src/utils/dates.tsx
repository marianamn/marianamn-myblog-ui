import * as moment from "moment";

export const getDate = (date: string): string => {
  const momentDate = moment(date);
  moment.locale("bg");
  const formattedDate = momentDate.format("MMMM DD, YYYY");

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};
