const dataFn = require('date-fns/format');
const parseIso = require('date-fns/parseISO');

class DataFns {
	constructor(inputData) {
		this.inputData = inputData;
	}

	parseISO() {
		return parseIso(this.inputData);
	}

	formatToDayMonthYear() {
		return dataFn(this.parseISO(), 'dd-MM-yyyy');
	}
}

module.exports = DataFn;
