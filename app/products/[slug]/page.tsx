'use client';

import ProductPage from '@/components/product-page';
import EmptyCart from '@/components/empty-product-page';
import products from '@/products.json';
import { usePathname } from 'next/navigation';
import ProductViewModel from '@/lib/view-model/productViewModel';

export default function Product() {
	const router: string | null = usePathname();
	const slug = router?.split('/')[2];
	const product = products.find((product) => product.slug === slug);

	if (!product) return <EmptyCart />;
	return <ProductPage productVM={new ProductViewModel(product)} />;
}

