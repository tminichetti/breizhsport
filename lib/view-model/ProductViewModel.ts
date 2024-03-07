import IProduct from '../interfaces/IProduct';
import '@/lib/extensionMethods/number';
import '@/lib/extensionMethods/string';

export default class ProductViewModel {
	private id: number;
	private price: number;
	private name: string;
	private collections: string;
	private slug: string;
	private image: string;

	constructor(product: IProduct) {
		this.id = product.id;
		this.price = Number(product.price);
		this.name = product.name;
		this.collections = product.collections;
		this.slug = product.slug;
		this.image = product.image;
	}

	public get Id(): number {
		return this.id;
	}

	public get Price(): number {
		return this.price;
	}

	public get Name(): string {
		return this.name;
	}

	public get Collection(): string {
		return this.collections;
	}

	public get Slug(): string {
		return this.slug;
	}

	public get Image(): string {
		return this.image;
	}

	public get PriceAsCurrency(): string {
		return this.price.asCurrency();
	}
}

