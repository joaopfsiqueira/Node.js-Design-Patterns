// main.js
const TaxFixedStrategy = require('./TaxFixedStrategy');
const TaxVariableStrategy = require('./TaxVariableStrategy');
const TaxCalculatorContext = require('./TaxCalculatorContext');

// Exemplo de uso
const fixedTaxStrategy = new TaxFixedStrategy();
const variableTaxStrategy = new TaxVariableStrategy();

const taxCalculator = new TaxCalculatorContext(fixedTaxStrategy);

const productAmount = 100;

console.log(`Imposto com estratégia fixa: ${taxCalculator.calculateTax(productAmount)}`);

// Trocar a estratégia dinamicamente
taxCalculator.setStrategy(variableTaxStrategy);
console.log(`Imposto com estratégia variável: ${taxCalculator.calculateTax(productAmount)}`);
