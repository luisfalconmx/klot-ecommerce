export const createSlug = (value: string) => {
  // replace all empty spaces
  let tempValue = value.replaceAll(/\s/g, "-");
  tempValue = tempValue.replaceAll(/-&/g, "");
  // replace all special characters
  tempValue = tempValue.toLowerCase();
  return tempValue;
};
