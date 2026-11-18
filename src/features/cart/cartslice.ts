import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CartItem, Product } from '../../types';
import type { RootState } from '../../app/store';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<Product>) => {
      const existingItem = state.items.find((item: CartItem) => item.product.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state: CartState, action: PayloadAction<number>) => {
      state.items = state.items.filter((item: CartItem) => item.product.id !== action.payload);
    },
    updateQuantity: (state: CartState, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find((i: CartItem) => i.product.id === action.payload.id);
      if (item && action.payload.quantity > 0) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: (state: CartState) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

// Selector tính tổng số lượng và tổng tiền
export const selectTotalQuantity = (state: RootState): number =>
  state.cart.items.reduce((total: number, item: CartItem) => total + item.quantity, 0);

export const selectTotalPrice = (state: RootState): number =>
  state.cart.items.reduce((total: number, item: CartItem) => total + item.product.price * item.quantity, 0);

export default cartSlice.reducer;