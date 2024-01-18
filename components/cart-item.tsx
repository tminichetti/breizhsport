'use client';

import { useCartItem } from '@/lib/hooks/useCartItem';
import { ICartItem } from '@/lib/redux/slices/cartSlice';
import Image from 'next/image';
import { ChangeEvent } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import IProduct from '@/lib/interfaces/IProduct';
import { Trash2 } from 'lucide-react';

interface ICartItemProps {
	product: IProduct;
	item: ICartItem;
}

const CartItem = ({ product, item }: ICartItemProps) => {
	const { quantity, totalPrice, handleRemoveItem, handleChangeQuantity } =
		useCartItem({
			product,
			item,
		});

	return (
		<>
			<div className="grid grid-cols-4 grid-rows-2 gap-4 items-center p-4 border-b border-gray-300">
				<div className="col-span-1 row-span-2 border">
					<Image
						src={product.image}
						alt={product.name}
						width={50}
						height={50}
					/>
				</div>

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
						<Trash2 />
					</Button>
				</div>
			</div>
		</>
	);
};

export default CartItem;

