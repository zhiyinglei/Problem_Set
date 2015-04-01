tickets = require('./tickets');


var myTickets = {'city c': 'city d', 'city a': 'city b', 'city f': 'city g', 'city d': 'city e', 'city e':'city f', 'city b': 'city c'};

console.log('before sorting: \n', myTickets);

var myResult = tickets(myTickets);

console.log('after sorting: \n', myResult);