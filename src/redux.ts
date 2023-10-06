import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Payload, State } from "./products";

const initialState: State = {
  items: 0,
  price: 0,
  allProducts: [],
  products: [],
};

const productsSlice = createSlice({
  name: "prod",
  initialState,
  reducers: {
    addToCart: (state, { payload }: Payload) => {
      const prod = state.allProducts.find(
        (product) => product.id === payload.id
      );
      state.items += 1;
      if (prod) {
        state.price += prod?.price;
        state.products.push(prod);
      }
    },
    totalProducts: (state, { payload }) => {
      state.allProducts = payload;
    },
  },
});

const { addToCart, totalProducts } = productsSlice.actions;
const store = configureStore({
  reducer: {
    product: productsSlice.reducer,
  },
});
export { store, addToCart, totalProducts };
