const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  amount: 0,
  total: 0,
  price: 125,
  addCart: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase: (state) => {
      state.amount = state.amount + 1;
    },
    decrease: (state) => {
      if (state.amount === 0) {
        state.amount = 0;
      } else {
        state.amount = state.amount - 1;
      }
    },
    showTotal: (state) => {
      state.total = state.total + state.amount * state.price;
    },
    addToCart: (state) => {
      state.addCart = true;
    },
    deleteAll: (state) => {
      state.amount = 0;
      state.total = 0;
    },
  },
});

console.log(cartSlice);

export const { increase, decrease, showTotal, deleteAll, addToCart } =
  cartSlice.actions;

export default cartSlice.reducer;
