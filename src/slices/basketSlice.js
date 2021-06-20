//slice to store all items to be dropped in the cart
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // adding items
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    
    // removing items
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

        let newBasket = [...state.items];

        if(index >= 0) {
          //The item exsists in basket -> remove it
          newBasket.splice(index, 1);
        }else{
          console.warn(
            `Can't remove product (id: ${action.payload.id}) as it's not in basket`
          );
        }

        state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + (item.price * 73), 0);

export default basketSlice.reducer;
