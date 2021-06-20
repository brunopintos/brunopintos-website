export const getYearsPassed = (from, to) =>
  to.getFullYear() -
  from.getFullYear() +
  (to.getMonth() - from.getMonth() + 1) / 12;

export const getReadableYears = (value) => {
  const years = Math.floor(value);
  const months = Math.round((value % 1) * 12);
  return `${years > 1 ? `${years} years` : (years > 0 ? `${years} year` : "")}${
    years > 0 && (months > 0 ? " & " : "")
  }${months > 1 ? `${months} months` : (months > 0 ? `${months} month` : "")}`;
};

export const debounce = (func, wait, immediate) => {
  clearTimeout(timeout);
  return function f(...args) {
    const context = this;
    function later() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    }
    const callNow = immediate && !timeout;
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};
