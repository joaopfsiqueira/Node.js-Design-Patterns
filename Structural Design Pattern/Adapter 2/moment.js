const moment = require('moment');

class Moment {
	constructor(inputData) {
		this.inputData = inputData;
	}

	formatToDayMonthYear() {
		return moment(this.inputData).format('DD-MM-YYYY');
	}
}
