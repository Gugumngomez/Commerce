import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

//  This has everything to do with the cart
// from adding items to the cart and remove items from the cart, basically updating the cart

const initialState = {
    isCartOpen: false,
    cart: [],
    items: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        addToCart: (state, action) => {
            console.log('Adding to cart:', action.payload);
            const newItem = {
                ...action.payload.item,
                id: uuidv4(), // Replace this with your logic to generate a unique id
            };
            state.cart = [...state.cart, newItem];
        },
        removeFromCart: (state, action) => {
            console.log('Remove from cart:', action.payload);
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
        increaseCount: (state, action) => {
            console.log('Increasing count:', action.payload);
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);

            if (itemIndex !== -1) {
                state.cart = [
                    ...state.cart.slice(0, itemIndex),
                    { ...state.cart[itemIndex], count: state.cart[itemIndex].count + 1 },
                    ...state.cart.slice(itemIndex + 1),
                ];
            }
        },
        decreaseCount: (state, action) => {
            console.log('Decreasing count:', action.payload);
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);

            if (itemIndex !== -1 && state.cart[itemIndex].count > 1) {
                state.cart = [
                    ...state.cart.slice(0, itemIndex),
                    { ...state.cart[itemIndex], count: state.cart[itemIndex].count - 1 },
                    ...state.cart.slice(itemIndex + 1),
                ];
            }
        },

        setIsCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen
        }
    }
});

export const {
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;