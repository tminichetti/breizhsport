import { useState, useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ICartItem, removeItem, updateItem } from '../redux/slices/cartSlice';
import IProduct from '../interfaces/IProduct';

interface IUseCartItemProps {
	item: ICartItem;
	product: IProduct;
}

export const useCartItem = ({ product, item }: IUseCartItemProps) => {
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(item.numberOfProducts);
	const totalPrice = useMemo(() => {
		return product.price * quantity;
	}, [quantity, product.id]);

	const handleRemoveItem = () => {
		dispatch(removeItem(product.id));
	};

	const handleChangeQuantity = (value: number) => {
		setQuantity(value < 0 ? 0 : value);
	};

	useEffect(() => {
		dispatch(
			updateItem({
				id: product.id,
				numberOfProducts: quantity,
				price: product.price,
			})
		);
	}, [quantity]);

	return { quantity, totalPrice, handleRemoveItem, handleChangeQuantity };
};

