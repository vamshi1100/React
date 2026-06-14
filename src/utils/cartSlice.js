import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.card.info.id === action.payload.card.info.id
      );

      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
    },

    incrementItem: (state, action) => {
      const item = state.items.find(
        (item) => item.card.info.id === action.payload
      );

      if (item) {
        item.count += 1;
      }
    },

    decrementItem: (state, action) => {
      const item = state.items.find(
        (item) => item.card.info.id === action.payload
      );

      if (item) {
        item.count -= 1;

        if (item.count <= 0) {
          state.items = state.items.filter(
            (item) => item.card.info.id !== action.payload
          );
        }
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.card.info.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
export const {
  addItem,
  incrementItem,
  decrementItem,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;