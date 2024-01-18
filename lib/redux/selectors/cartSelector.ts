import { createSelector } from 'reselect';
import { RootState } from '../store';
import { ICartItem } from '../slices/cartSlice';

export const cartSelector = (state: RootState) => state.cart;
export const cartItemsSelector = (state: RootState) => state.cart.items;

export const totalCartPriceSelector = createSelector(
	cartItemsSelector,
	(items: ICartItem[]) => {
		return items.reduce(
			(acc, item) => acc + item.price * item.numberOfProducts,
			0
		);
	}
);

export const uniqueProductsCountSelector = createSelector(
	cartItemsSelector,
	(items: ICartItem[]) => items.length
);

