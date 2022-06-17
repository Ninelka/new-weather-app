export const stringToCapitalize = (word: string) => {
  return word
    .toLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, (firstLetter) =>
      firstLetter.toUpperCase()
    );
};
