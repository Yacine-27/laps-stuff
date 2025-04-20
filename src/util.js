export const getRandomItems = (array, count) => {
  return array.slice(0, count);
};

export const getFullString = (item) => {
  return item.title.split(" ").join("").toLowerCase().concat(item.category);
};

export const getMatchedItems = (searchWord, array) => {
  if (!searchWord) return array;
  if (!array) return null;
  return array.filter((item) =>
    getFullString(item).includes(searchWord.toLowerCase().split(" ").join(""))
  );
};

export const getPriceFormat = (price, coutnryCode, multiplyBy) => {
  return new Intl.NumberFormat("en-EG", {
    style: "currency",
    currency: coutnryCode,
  }).format(Number(price * multiplyBy));
};
