import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            console.log(state.products);
            if (state.products.find((prod) => prod.id === action.payload.id) === undefined) {
                state.products.push(action.payload);
                state.total += action.payload.price;
                state.quantity += 1;

            } else {
                alert("Produktet er allerede lagt til i orderen..")
            }

        },
        removeProduct: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload.id);
            state.quantity -= 1;
            state.total -= action.payload.price;
        },
        resetCart: (state) => {
            state.products = []
            state.quantity = 0;
            state.total = 0;

        }
    },
});

export const { addProduct } = cartSlice.actions;
export const { removeProduct } = cartSlice.actions;
export const { resetCart } = cartSlice.actions;
export default cartSlice.reducer;