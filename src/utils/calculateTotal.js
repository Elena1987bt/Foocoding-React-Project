export const subTotal = (quantity, price) => {
  return quantity * price;
};
export const total = (arr) => {
  return arr.reduce((acc, el) => {
    acc += el;
    return acc;
  }, 0);
};
