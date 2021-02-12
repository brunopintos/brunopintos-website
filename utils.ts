export const getYearsPassed = (from: Date, to: Date): number =>
  to.getFullYear() -
  from.getFullYear() +
  (to.getMonth() - from.getMonth() + 1) / 12;

export const getReadableYears = (value: number): string => {
  const years = Math.floor(value);
  const months = Math.round((value % 1) * 12);
  return `${years > 0 ? `${years}y` : ""}${
    years > 0 && months > 0 ? ", " : ""
  }${months > 0 ? `${months}m` : ""}`;
};
