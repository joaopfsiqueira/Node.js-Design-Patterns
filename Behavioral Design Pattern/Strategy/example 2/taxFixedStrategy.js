// TaxFixedStrategy.js
class TaxFixedStrategy {
	calculateTax(amount) {
		return amount * 0.1; // 10% de imposto fixo
	}
}

module.exports = TaxFixedStrategy;
