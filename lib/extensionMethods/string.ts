declare module 'global' {
	interface String {
		toPascalCase(): string;
	}
}

String.prototype.toPascalCase = function () {
	return this.replace(/(\w)(\w*)/g, function (_, firstChar, restOfString) {
		return firstChar.toUpperCase() + restOfString.toLowerCase();
	});
};

