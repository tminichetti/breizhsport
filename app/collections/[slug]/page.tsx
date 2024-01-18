'use client';

import '@/lib/extensionMethods/number';
import '@/lib/extensionMethods/string';
import products from '@/products.json';
import { Settings2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BasketballCollectionPage() {
	const router = usePathname();
	const slug = router.split('/')[2];

	const collectionProducts = products.filter(
		(product) => product.collections === slug
	);

	return (
		<div className="flex flex-col py-8">
			<h1 className="text-2xl font-medium">{slug.toPascalCase()}</h1>

			<div className="flex justify-between mt-16 mb-4">
				<div className="flex gap-2">
					<Settings2 />
					Filtrer et trier
				</div>
				<div>{collectionProducts.length} produit(s)</div>
			</div>

			{collectionProducts.length > 0 ? (
				<div className="grid grid-cols-2 gap-8">
					{collectionProducts.map((product) => (
						<Link
							key={product.id}
							href={`/products/${product.slug}`}>
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
			) : (
				<div>Aucun produit trouvé pour cette collections</div>
			)}
		</div>
	);
}

