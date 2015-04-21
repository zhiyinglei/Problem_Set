var Graph = require('node-graph');
var shortestPaths = require('./shortestPaths');
 
var structure = {
    nodes: [
        {
            name: 'A',
            dist: 0,
            prev: null,
        },
        {
            name: 'B',
            dist: 0,
            prev: null,
        },
        {
            name: 'C',
            dist: 0,
            prev: null,
        },
        {
            name: 'D',
            dist: 0,
            prev: null,
        },
        {
            name: 'E',
            dist: 0,
            prev: null,
        },
        {
            name: 'F',
            dist: 0,
            prev: null,
        }    
    ],
    edges: [
        {
            name: 'AB',
            from: 'A',
            to: 'B',
            length: 7
        },

        {
            name: 'AC',
            from: 'A',
            to: 'C',
            length: 9
        },

        {
            name: 'AF',
            from: 'A',
            to: 'F',
            length: 14
        },

        {
            name: 'BC',
            from: 'B',
            to: 'C',
            length: 10
        },

        {
            name: 'BD',
            from: 'B',
            to: 'D',
            length: 15
        },

        {
            name: 'CD',
            from: 'C',
            to: 'D',
            length: 11
        },

        {
            name: 'CF',
            from: 'C',
            to: 'F',
            length: 2
        },

        {
            name: 'FE',
            from: 'F',
            to: 'E',
            length: 9
        },

        {
            name: 'ED',
            from: 'E',
            to: 'D',
            length: 6
        }        

    ]
}

// ---14-->F-9->-E->
// |       ^       |
// |       2       6
// |       |       |
// A---9-->C--11-->D
// |       ^       ^
// |       10      |
// |       |       |
// ---7--->B---15--|


console.log('---14-->F-9->-E->');
console.log('|       ^       |');
console.log('|       2       6');
console.log('|       |       |');
console.log('A---9-->C--11-->D');
console.log('|       ^       ^');
console.log('|       10      |');
console.log('|       |       |');
console.log('---7--->B---15--|');


//structure_bak = JSON.parse(JSON.stringify(structure));


var gr = new Graph(JSON.parse(JSON.stringify(structure)));
console.log('Original:');
console.log(gr.nodes);
console.log('After running Dijkstra:');
shortestPaths.Dijkstra(gr, 'A');
console.log(gr.nodes);
console.log();


gr = new Graph(JSON.parse(JSON.stringify(structure)));
console.log('Original:');
console.log(gr.nodes);
shortestPaths.BellmanFord(gr, 'A');
console.log('After running Bellman-Ford:');
console.log(gr.nodes);