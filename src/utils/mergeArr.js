export const mergeArrays = (arr1, arr2) =>
  arr1 && arr1.map((obj) => (arr2 && arr2.find((p) => p.id === obj.id)) || obj);
