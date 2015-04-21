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
            to: 'B',
            length: 3
        },
        {
            name: 'AC',
            from: 'A',
            to: 'C',
            length: 3
        },
        {
            name: 'AD',
            from: 'A',
            to: 'D',
            length: 3
        },

        {
            name: 'BE',
            from: 'B',
            to: 'E',
            length: 3
        },
        {
            name: 'BF',
            from: 'B',
            to: 'F',
            length: 3
        },
        {
            name: 'DG',
            from: 'D',
            to: 'G',
            length: 3
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




// console.log(gr.nodes);