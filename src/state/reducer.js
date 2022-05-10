export const initialState = {
  cart: [],
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
    default:
      return state;
  }
};

export default reducer;
