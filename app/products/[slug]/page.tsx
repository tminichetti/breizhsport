'use client';

import ProductPage from '@/components/product-page';
import EmptyCart from '@/components/empty-product-page';
import '@/lib/extensionMethods/number';
import products from '@/products.json';
import { usePathname } from 'next/navigation';

export default function Product() {
	const router = usePathname();
	const slug = router.split('/')[2];
	const product = products.find((product) => product.slug === slug);

	if (!product) return <EmptyCart />;
	return <ProductPage product={product} />;
}

