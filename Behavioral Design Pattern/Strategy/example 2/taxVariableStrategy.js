// TaxVariableStrategy.js
class TaxVariableStrategy {
	calculateTax(amount) {
		return amount * 0.2; // 20% de imposto variável
	}
}

module.exports = TaxVariableStrategy;
