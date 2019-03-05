
const _ = require('lodash');

let number = ['one', 'two', 'three'];

let result = _.groupBy(number,'length');

console.log(result);

