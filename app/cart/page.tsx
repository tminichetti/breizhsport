'use client';
import React from 'react';
import CartItem from '@/components/cart-item';
import {
	cartItemsSelector,
	totalCartPriceSelector,
} from '@/lib/redux/selectors/cartSelector';
import { ICartItem } from '@/lib/redux/slices/cartSlice';
import products from '@/products.json';
import { useSelector } from 'react-redux';

import '@/lib/extensionMethods/number';
import '@/lib/extensionMethods/string';

export default function Cart() {
	const cartItems = useSelector(cartItemsSelector);
	const totalPrice = useSelector(totalCartPriceSelector);

	return (
		<div className="flex min-h-screen flex-col py-4">
			{cartItems.length === 0 ? (
				<span>Votre panier est vide</span>
			) : (
				<div className="">
					<span className="text-xl">Votre panier</span>
					<div className="w-full flex justify-between border-b mt-8 mb-2">
						<span>Produit</span>
						<span>Total</span>
					</div>
					{cartItems.map((item: ICartItem, index: number) => {
						const product = products.find(
							(product) => product.id === item.id
						);
						if (!product) return <></>;

						return (
							<CartItem
								key={item.id}
								product={product}
								item={item}
							/>
						);
					})}
					<span className="flex w-full justify-center mt-8">
						Total estimé : {Number(totalPrice).asCurrency()}
					</span>
				</div>
			)}
		</div>
	);
}

