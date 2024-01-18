import { cartItemsSelector } from '@/lib/redux/selectors/cartSelector';
import { ICartItem, addItem, updateItem } from '@/lib/redux/slices/cartSlice';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface IProductPageProps {
	productVM: IProductViewModel;
}

const ProductPage = ({ productVM }: IProductPageProps) => {
	const dispatch = useDispatch();
	const cartItems = useSelector(cartItemsSelector);
	const cartItem = cartItems.find(
		(item: ICartItem) => item.id === productVM.Id
	);

	const [numberOfProducts, setNumberOfProducts] = useState(1);

	const handleAddToCart = () => {
		const payload = {
			id: productVM.Id,
			numberOfProducts,
			price: productVM.Price,
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
				src={`${productVM.Image}`}
				alt={productVM.Name}
				width={100}
				height={100}
				// fill
				className="w-full h-fit border"
			/>
			<div className="flex flex-col mt-4">
				<span className="uppercase font-light font-xs">
					breizhsport
				</span>
				<span className="text-xl mt-2">{productVM.Name}</span>
				<span className="mt-4 mb-1">{productVM.PriceAsCurrency}</span>
				<span className="text-xs font-extralight">Taxes incluses</span>

				<div className="mt-4">
					<span className="mb-4">
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

