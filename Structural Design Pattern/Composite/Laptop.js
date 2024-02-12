const Item = require('./Item');

class Laptop extends Item {
	constructor(name, model, cost) {
		super(name, 'Laptop'); // O método super é utilizado para chamar métodos da classe pai (ou superclasse) a partir de uma classe filha (ou subclasse), nesse caso, estou passando o nome que eu vou receber na classe laptop e hardcodando o laptop para o type. Da para colocar o mouse em cima de super que vai aparecer os métodos da classe item.
		this.model = model;
		this.cost = cost;
	}
	getDetails() {
		console.log(`${this.getName()} ${this.model}, priced at INR ${this.cost}`);
	}
}

module.exports = Laptop;
