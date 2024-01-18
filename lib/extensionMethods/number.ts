import Big, { BigSource } from 'big.js';

declare global {
	interface Number {
		asCurrency(
			maximumFractionDigits?: number | undefined,
			forcedCurrency?: string | undefined,
			minIntegerDigits?: number | undefined,
			minimumFractionDigits?: number | undefined
		): string;
		multiply(multiplier: number): number;
	}
}

Number.prototype.asCurrency = function (
	maximumFractionDigits?: number,
	forcedCurrency?: string,
	minIntegerDigits?: number,
	minimumFractionDigits?: number
): string {
	return new Intl.NumberFormat('fr-FR', {
		style: 'currency',
		currency: forcedCurrency || 'EUR',
		maximumFractionDigits,
		minimumFractionDigits,
		minimumIntegerDigits: minIntegerDigits ?? 1,
	}).format(this as number);
};

Number.prototype.multiply = function (multiplier: number): number {
	const multipliedResultsAsBig = Big(this as BigSource).mul(multiplier);
	const multipliedAsNumber = multipliedResultsAsBig.toNumber();
	if (Number.isInteger(multipliedAsNumber)) return multipliedAsNumber;
	return toPrecisedNumber(multipliedAsNumber, multipliedResultsAsBig);
};

function toPrecisedNumber(number: number, bigNumber: Big) {
	return bigNumber.prec(getPrecision(number), Big.roundUp).toNumber();
}

function getPrecision(number: number) {
	const numberOfDigitBeforeDecimal = number.toString().split('.')[0].length;
	return numberOfDigitBeforeDecimal + 2;
}

export {};

