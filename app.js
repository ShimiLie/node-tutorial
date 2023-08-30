//certain dependencies need to be installed first by npm i <packagename>
//eg. npm i lodash

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);
