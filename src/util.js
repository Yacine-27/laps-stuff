const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
};

export const getRandomItems = (array, count) => {
  const shuffled = shuffleArray(array);
  return shuffled.slice(0, count);
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
