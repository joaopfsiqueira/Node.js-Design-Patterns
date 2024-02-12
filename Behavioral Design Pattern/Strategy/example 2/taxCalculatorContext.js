// TaxCalculatorContext.js
class TaxCalculatorContext {
	constructor(strategy) {
		this.strategy = strategy;
	}

	setStrategy(strategy) {
		this.strategy = strategy;
	}

	calculateTax(amount) {
		return this.strategy.calculateTax(amount);
	}
}

module.exports = TaxCalculatorContext;
