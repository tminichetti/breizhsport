/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ICartItem, removeItem, updateItem } from '../redux/slices/cartSlice';
import IProduct from '../interfaces/IProduct';

interface IUseCartItemProps {
	item: ICartItem;
	product: IProduct;
}

/**
 * Hook personnalisé pour gérer un élément du panier.
 * @param {IUseCartItemProps} options - Les options du hook.
 */
export const useCartItem = ({ product, item }: IUseCartItemProps) => {
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(item.numberOfProducts);
	const totalPrice = useMemo(() => {
		return product.price * quantity;
	}, [quantity, product.id]);

	/**
	 * Gère la suppression d'un élément.
	 */
	const handleRemoveItem = () => {
		dispatch(removeItem(product.id));
	};

	/**
	 * Fonction qui gère le changement de quantité d'un élément.
	 * @param value La nouvelle valeur de la quantité.
	 */
	const handleChangeQuantity = (value: number) => {
		setQuantity(value < 0 ? 0 : value);
	};

	/**
	 * Effect qui est déclenché lorsque la quantité d'un élément change.
	 */
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

