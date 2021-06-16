export default function filterByCategories(category, products) {
  const filterProducts = products.filter((product) => product.category === category);
  if (category === 'All') return products;
  return filterProducts;
}
