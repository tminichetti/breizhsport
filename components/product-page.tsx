import { cartItemsSelector } from '@/lib/redux/selectors/cartSelector';
import { addItem, updateItem } from '@/lib/redux/slices/cartSlice';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from './ui/button';
import { Input } from './ui/input';

export interface IProduct {
	id: number;
	name: string;
	price: number;
	image: string;
}

interface IProductPageProps {
	product: IProduct;
}

const ProductPage = ({ product }: IProductPageProps) => {
	const dispatch = useDispatch();
	const cartItems = useSelector(cartItemsSelector);
	const cartItem = cartItems.find((item) => item.id === product.id);

	const [numberOfProducts, setNumberOfProducts] = useState(1);

	const handleAddToCart = () => {
		const payload = {
			id: product.id,
			numberOfProducts,
			price: product.price,
		};
		if (!cartItem) {
			dispatch(addItem(payload));
			return;
		}
		dispatch(
			updateItem({
				...payload,
				numberOfProducts: cartItem.numberOfProducts + numberOfProducts,
			})
		);
	};

	const handleOnChange = (value: number) => {
		setNumberOfProducts(value < 0 ? 0 : value);
	};

	return (
		<div className="flex flex-col py-8">
			<Image
				src={`${product.image}`}
				alt={product.name}
				width={100}
				height={100}
				// fill
				className="w-full h-fit"
			/>
			<div className="flex flex-col">
				<span className="uppercase font-light font-xs">
					breizhsport
				</span>
				<span className="text-xl mt-2">{product.name}</span>
				<span className="mt-4 mb-1">{product.price.asCurrency()}</span>
				<span className="text-xs">Taxes incluses</span>

				<div className="mt-4">
					<span className="mb-2">
						Quantité{' '}
						{cartItem && (
							<label className="text-xs">
								({cartItem.numberOfProducts} dans le panier)
							</label>
						)}
					</span>
					<div className="flex border w-fit rounded">
						<Button
							variant="ghost"
							onClick={() =>
								handleOnChange(numberOfProducts - 1)
							}>
							-
						</Button>
						<Input
							type="number"
							min={1}
							step={1}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleOnChange(Number(e.target.value))
							}
							value={numberOfProducts}
							inputMode="numeric"
							className="w-12 text-center border-none"
						/>
						<Button
							variant="ghost"
							onClick={() =>
								handleOnChange(numberOfProducts + 1)
							}>
							+
						</Button>
					</div>
				</div>

				<Button onClick={handleAddToCart} className="mt-8">
					Ajouter au panier
				</Button>
			</div>
		</div>
	);
};

export default ProductPage;

