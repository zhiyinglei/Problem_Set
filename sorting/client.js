var buildArray = require('./randomArray');
var mergeSort = require('./mergeSort');
var quickSort = require('./quickSort');

console.log();
console.log('mergeSort testing'); 
var ary = buildArray(15);
console.log('before mergeSort: ', ary);
mergeSort(ary);
console.log('after mergeSort: ', ary);


console.log();
console.log('quickSort testing');
ary = buildArray(16);
console.log('before quickSort: ', ary);
quickSort(ary);
console.log('after quickSort: ', ary);