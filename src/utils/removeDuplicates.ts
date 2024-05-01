export const removeDuplicates = (values: string[]) => {
  const result = values?.filter(
    (item, index) => values.indexOf(item) === index
  );

  return result;
};
