'use client';

import {
	ICartItem,
	removeItem,
	updateItem,
} from '@/lib/redux/slices/cartSlice';
import { IProduct } from './product-page';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import '@/lib/extensionMethods/number';

interface ICartItemProps {
	product: IProduct;
	item: ICartItem;
}

const CartItem = ({ product, item }: ICartItemProps) => {
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(item.numberOfProducts);
	const totalPrice = useMemo(() => {
		return product.price * quantity;
	}, [quantity]);

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

	return (
		<>
			<div className="grid grid-cols-4 grid-rows-2 gap-4 items-center p-4 border-b border-gray-300">
				{/* Colonne 1: Image */}
				<div className="col-span-1 row-span-2 border">
					<Image
						src={product.image}
						alt={product.name}
						width={50}
						height={50}
					/>
				</div>

				{/* Colonne 2-4: Détails du produit */}
				<div className="col-start-2 col-end-3 row-span-1 flex">
					<div>
						<h2 className="text-sm whitespace-nowrap">
							{product.name}
						</h2>
						<p>{Number(product.price).asCurrency()}</p>
					</div>
				</div>

				<div className="col-start-4 col-end-4 row-span-1 flex justify-end w-full">
					<p>{Number(totalPrice).asCurrency()}</p>
				</div>

				{/* Colonne 5: Boutons */}
				<div className="col-start-2 col-end-4 row-start-2 row-end-2 flex justify-between items-center">
					<div className="flex space-x-2">
						<Button
							variant="ghost"
							onClick={() => handleChangeQuantity(quantity - 1)}>
							-
						</Button>
						<Input
							type="number"
							min={1}
							step={1}
							value={quantity}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleChangeQuantity(Number(e.target.value))
							}
							className="w-12 text-center"
						/>
						<Button
							variant="ghost"
							onClick={() => handleChangeQuantity(quantity + 1)}>
							+
						</Button>
					</div>
					<Button variant="destructive" onClick={handleRemoveItem}>
						Supprimer
					</Button>
				</div>
			</div>
		</>
	);
};

export default CartItem;

