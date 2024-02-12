class CartSystem {
	cartItems = [];

	addItem(item) {
		this.cartItems.push(item);
	}

	removeItem(item) {
		const index = this.cartItems.indexOf(item);
		if (index > -1) {
			this.cartItems.splice(index, 1);
		}
	}

	getTotalPrice() {
		let totalPrice = 0;
		for (const item of this.cartItems) {
			totalPrice += item.price;
		}
		return totalPrice;
	}

	getCartItems() {
		return this.cartItems;
	}

	clearCart() {
		this.cartItems = [];
	}
}

module.exports = CartSystem;
