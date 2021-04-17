export const getDate = (date) => {
  const dateObj = new Date(date);
  let month: string | number = dateObj.getUTCMonth() + 1;
  let day: string | number = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();
  let hour = dateObj.getHours();
  let minutes = dateObj.getMinutes();

  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;

  const fullString = `${day}.${month}.${year} ${hour}:${minutes}`;

  return fullString;
};
