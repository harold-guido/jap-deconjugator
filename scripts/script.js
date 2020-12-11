var conjugator = require('jp-verbs');

let result = conjugator.unconjugate('言われてみれば');
console.log(JSON.stringify(result, null, 2));
