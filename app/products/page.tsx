'use client';
import React from 'react';
import '@/lib/extensionMethods/number';
import '@/lib/extensionMethods/string';
import products from '@/products.json';
import Link from 'next/link';
import { Settings2 } from 'lucide-react';
import Image from 'next/image';

const AllProductsPage = () => {
	return (
		<div className="flex flex-col py-8">
			<h1 className="text-2xl font-medium">Tous les produits</h1>

			<div className="flex justify-between mt-16 mb-4">
				<div className="flex gap-2">
					<Settings2 />
					Filtrer et trier
				</div>
				<div>{products.length} produit(s)</div>
			</div>

			<div className="grid grid-cols-2 gap-8">
				{products.map((product) => (
					<Link key={product.id} href={`/products/${product.slug}`}>
						<div className="w-full h-fit flex flex-col gap-2">
							<Image
								src={`${product.image}`}
								alt={product.name}
								width={100}
								height={100}
								// fill
								className="w-full h-fit"
							/>
							<div className="text-sm">{product.name}</div>
							<div className="font-semibold text-md">
								{product.price.asCurrency()}
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default AllProductsPage;

