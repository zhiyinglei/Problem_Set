module.exports = graphSearch;

function graphSearch(){

};

graphSearch.BFS = function (gr, root){
    var queue = [];
    var nodeState = {};    //check if visited or not 
    
    //fetch root node
    var r = gr.getNode(root);
    
    if( r == null ) return;

    queue.push(r);
    nodeState[r] = true;

    while ( queue.length ){
        var n = queue.shift();
        console.log(n);

        var children = gr.outboundEdges(n)
        for(e in children){
            child = children[e].to;
            if(!nodeState[child]){
                queue.push(gr.getNode(child))
                nodeState[child] = true;
            }
        }        
    }
}

graphSearch.DFS = function (gr, root){
    var nodeState = {};    //check if visited or not 
    DFS_help(gr, root, nodeState);
}


function DFS_help(gr, root, nodeState){
    //fetch root node
    var r = gr.getNode(root);
    
    if( r == null ) return;

    console.log(r);
    nodeState[r] = true;

    var edges = gr.outboundEdges(r);
    for(e in edges){
        child = edges[e].to;
            if(!nodeState[child]){
                DFS_help(gr, child, nodeState);
            }
    }

}