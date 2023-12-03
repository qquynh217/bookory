export const formatDate = (str) => {
  let date = new Date(str);
  return date.toISOString().split("T")[0];
};
export function round(num, decimalPlaces = 0) {
  if (num < 0) return -round(-num, decimalPlaces);

  num = Math.round(num + "e" + decimalPlaces);
  return Number(num + "e" + -decimalPlaces).toFixed(decimalPlaces);
}
export function truncateString(str = "", num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}
