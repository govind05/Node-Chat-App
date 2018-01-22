let moment = require('moment');

// let date = new Date();
//
// console.log(date.getMonth());

// let date = moment();
// date.add(100, 'y').subtract(9, 'months')
// console.log(date.format('MMM Do, YYYY'));
// new Date().getTime()
let someTimestamp = moment().valueOf();
console.log(someTimestamp);
let createdAt = 1234;
let date = moment(createdAt);
console.log(date.format('h:mm a'));