import products from '../products.json';
import CartSystem from './cartSystem.js';

describe('CartSystem', () => {
	test('addItem should add an item to the cart', () => {
		const cartSystem = new CartSystem();
		const item = products[0]; // Use the first product from the products array
		cartSystem.addItem(item);
		expect(cartSystem.getCartItems()).toContain(item);
	});

	test('removeItem should remove an item from the cart', () => {
		const cartSystem = new CartSystem();
		const item = products[0]; // Use the first product from the products array
		cartSystem.addItem(item);
		cartSystem.removeItem(item);
		expect(cartSystem.getCartItems()).not.toContain(item);
	});

	test('getTotalPrice should return the total price of all items in the cart', () => {
		const cartSystem = new CartSystem();
		const item1 = products[0]; // Use the first product from the products array
		const item2 = products[1]; // Use the second product from the products array
		cartSystem.addItem(item1);
		cartSystem.addItem(item2);
		expect(cartSystem.getTotalPrice()).toBe(item1.price + item2.price);
	});

	test('clearCart should remove all items from the cart', () => {
		const cartSystem = new CartSystem();
		const item1 = products[0]; // Use the first product from the products array
		const item2 = products[1]; // Use the second product from the products array
		cartSystem.addItem(item1);
		cartSystem.addItem(item2);
		cartSystem.clearCart();
		expect(cartSystem.getCartItems()).toHaveLength(0);
	});
});

