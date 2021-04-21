export const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true };
    case 'DISPLAY_PRODUCTS':
      return { ...state, products: payload, loading: false };
    case 'SET_CATEGORY':
      return { ...state, category: payload, loading: false };
    case 'SET_PRODUCT':
      return { ...state, product: payload, category: payload.category, loading: false };
    case 'FILTER_PRODUCTS':
      return { ...state, products: payload, loading: false };
    case 'ERROR':
      return { ...state, loading: false };
    default:
      return state;
  }
};
// function addNewItem(state, task) {
//   const list = [...state.list];
//   const newItem = {
//     itemId: list.length + 1,
//     task: task,
//     completed: false,
//   };
//   return {
//     list: [...state.list, newItem],
//   };
// }
