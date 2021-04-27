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
    case 'SET_ALL_PRODUCTS':
      return { ...state, category: payload, loading: true };
    case 'ADD_TO_CART':
      if (state.cart.find((el) => el.id === payload.id)) {
        return { ...state };
      }
      return { ...state, cart: [...state.cart, payload], loading: false };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== payload),
      };

    case 'TOGGLE_AMOUNT':
      let tempCart = state.cart
        .map((cartItem) => {
          if (cartItem.id === payload.id) {
            if (payload.type === 'inc') {
              return { ...cartItem, amount: cartItem.amount + 1 };
            }
            if (payload.type === 'dec') {
              return { ...cartItem, amount: cartItem.amount - 1 };
            }
          }
          return cartItem;
        })
        .filter((cartItem) => cartItem.amount !== 0);
      return { ...state, cart: tempCart };
    case 'GET_TOTALS':
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;

          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        },
      );
      total = parseFloat(total.toFixed(2));

      return { ...state, total, amountTotal: amount };
    case 'CLEAR_CART':
      return { ...state, cart: [] };

    case 'ERROR':
      return { ...state, loading: false };
    default:
      return state;
  }
};
