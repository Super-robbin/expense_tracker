// NOTE: As getMonth() returns the index of the month, therfore, we have to add +1
export const getFormattedDate = (date) => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

// The below function filters the date minus how many days (7 in our case)
export const getDateMinusDays = (date, days) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
};
