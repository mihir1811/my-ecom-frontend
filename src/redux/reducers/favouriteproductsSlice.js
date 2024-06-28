import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouriteProducts: [], // Array to store IDs or objects of favourite products
};

const favouriteProductsSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites(state, action) {
      const { productId } = action.payload; // Assuming you have a productId
      const isFavourite = state.favouriteProducts.some(
        (id) => id === productId
      );

      if (!isFavourite) {
        state.favouriteProducts.push(productId); // Add product ID
      }
    },
    removeFromFavourites(state, action) {
      const { productId } = action.payload;
      state.favouriteProducts = state.favouriteProducts.filter(
        (id) => id !== productId
      );
    },
  },
});

export const { addToFavourites, removeFromFavourites } = favouriteProductsSlice.actions;
export default favouriteProductsSlice.reducer;
