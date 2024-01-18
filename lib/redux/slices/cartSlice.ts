import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ICartItem {
	id: number;
	numberOfProducts: number;
	price: number;
}

interface CartState {
	items: ICartItem[];
}

const initialState: CartState = {
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<ICartItem>) => {
			state.items.push(action.payload);
		},
		removeItem: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter(
				(item: ICartItem) => item.id !== action.payload
			);
		},
		updateItem: (state, action: PayloadAction<ICartItem>) => {
			const { id, numberOfProducts } = action.payload;
			const itemIndex = state.items.findIndex((item) => item.id === id);
			if (itemIndex !== -1) {
				state.items[itemIndex].numberOfProducts = numberOfProducts;
			}
		},
		clearCart: (state) => {
			state.items = [];
		},
	},
});

export const { addItem, removeItem, updateItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

