const DataFns = require('./datafns');
const Moment = require('./Moment');
class DataAdapter {
	constructor(inputData) {
		this.inputData = inputData;
		this.dataApi = new DataFns(inputData);
	}

	formatToDayMonthYear() {
		console.log(this.dataApi.formatToDayMonthYear());
	}
}

module.exports = DataAdapter;

// class DataAdapter {
//   constructor (inputData) {
//       this.inputData = inputData
//       this.dataApi =  new Moment(inputData)
//   }

//   formatToDayMonthYear() {
//       console.log(this.dataApi.formatToDayMonthYear())
//   }
// };

// module.exports = DataAdapter;
