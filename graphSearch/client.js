var Graph = require('node-graph');
var graphSearch = require('./graphSearch');
 
var structure = {
    nodes: [
        {
            name: 'A'
        },
        {
            name: 'B',
        },
        {
            name: 'C'
        },
        {
            name: 'D',
        },
        {
            name: 'E'
        },
        {
            name: 'F',
        },
        {
            name: 'G',
        }        

    ],
    edges: [
        {
            name: 'AB',
            from: 'A',
            to: 'B'
        },
        {
            name: 'AC',
            from: 'A',
            to: 'C'
        },
        {
            name: 'AD',
            from: 'A',
            to: 'D'
        },

        {
            name: 'BE',
            from: 'B',
            to: 'E'
        },
        {
            name: 'BF',
            from: 'B',
            to: 'F'
        },
        {
            name: 'DG',
            from: 'D',
            to: 'G'
        },

    ]
}
  // create a tree like below
  //
  //   ----- A -----
  //   |     |     |
  // --B--   C     D
  // |   |         |
  // E   F         G


console.log('    ----- A -----');
console.log('    |     |     |');
console.log('  --B--   C     D');
console.log('  |   |         |');
console.log('  E   F         G');



var gr = new Graph(structure);

console.log();
console.log('result of BFS: ');
graphSearch.BFS(gr, 'A');

console.log();
console.log('result of DFS: ');
graphSearch.DFS(gr, 'A');