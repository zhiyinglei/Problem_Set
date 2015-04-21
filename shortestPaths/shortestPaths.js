var PriorityQueue = require('priorityqueuejs');
 

module.exports = shortestPaths;

function shortestPaths () {

}

shortestPaths.Dijkstra = function(graph, source){

	var s = graph.getNode(source);

	s['dist'] = 0;
	s['prev'] = null;

	//console.log(s);

	var queue = new PriorityQueue(function(n1, n2) {
		return n2.dist - n1.dist;
	});

	nodes = graph.nodes;
	for(var i in nodes){
		var node = nodes[i]
		if(node != s){
			
			node['dist'] = 3/0;
			node['prev'] = null;
			//console.log(node);
		}
		queue.enq(node);
	}
	// console.log(nodes);

	while( !queue.isEmpty() ){

		var u = queue.deq();
		//console.log(u);
		var edges  = graph.outboundEdges(u)
		for(var i in edges){
			var e = edges[i];
			var length = e.length;
			var v = graph.getNode(e.to);
			var alt = u.dist + length;
			if(alt < v.dist){
				v.dist = alt;
				v.prev = u.name;
			}
		}
	}
}

shortestPaths.BellmanFord = function(graph, source){

	var s = graph.getNode(source);
	s.dist = 0;
	s.prev = null;

	nodes = graph.nodes;
	edges = graph.edges;
	for(var i in nodes){
		var node = nodes[i]
		if(node != s){			
			node['dist'] = 3/0;
			node['prev'] = null;
			//console.log(node);
		}
	}

	// relax edges repeatedly
	for(var i = 1; i < nodes.length; i++ ){
		var converged = true;
		for(var j in edges){
			var e = edges[j];
			var u = graph.getNode(e.from);
			var v = graph.getNode(e.to);
			var length = e.length;
			if(v.dist > u.dist + length){
				v.dist = u.dist + length;
				v.prev = u.name;
				converged = false;
			}
		}
		if(converged) break;        //if it's converged, break 
		//console.log(i);
	}

	// check for negative-length cycles
	for(var j in edges){
		var e = edges[j];
		var u = graph.getNode(e.from);
		var v = graph.getNode(e.to);
		var length = e.length;
		if(v.dist > u.dist + length){
			console.error('Graph contains a negative-length cycle.')
		}
	}	

}