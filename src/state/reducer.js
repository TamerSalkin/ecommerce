export const initialState = {
  cart: [],
  user: null,
};

// Selector
export const getCartTotal = (cart) => cart?.reduce((x, y) => x + y.price, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
