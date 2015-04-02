var Node = require('./BNode');

module.exports = BST;

function BST(){
	this.root = null;
}

BST.prototype.addNode = function(node) {
	if( this.root == null ){
		this.root = node;
		return;
	}

	var curNode = this.root;
	while(true){
		if(node.data < curNode.data ){
			if (curNode.left == null){
				curNode.left = node;
				node.level = curNode.level + 1;
				break;
			}
			else{
				curNode = curNode.left;
				continue;
			}
		} 
		if(node.data > curNode.data ){
			if (curNode.right == null){
				curNode.right = node;
				node.level = curNode.level + 1;
				break;
			}
			else{
				curNode = curNode.right;
				continue;
			}
		}
		if(node.data == curNode.data){
			break;
		}
	}
};



BST.prototype.buildTreeWithArray = function(ary) {
	for(index in ary){
		var node = new Node(ary[index]);
		this.addNode(node);
	}
};


BST.prototype.inOrder = function(){
	var result = [];
	inOrderHelp(this.root,result);
	console.log('IN ORDER TRAVERSAL\t', result);
	return result;
}

function inOrderHelp(r, result){
	if(r == null) return;
	inOrderHelp(r.left, result);
	//console.log(r.data);
	result.push(r.data);
	inOrderHelp(r.right, result);
}


BST.prototype.preOrder = function(){
	var result = [];
	preOrderHelp(this.root,result);
	console.log('PRE ORDER TRAVERSAL\t', result);
	return result;
}

function preOrderHelp(r, result){
	if(r == null) return;
	//console.log(r.data);
	result.push(r.data);	
	preOrderHelp(r.left, result);
	preOrderHelp(r.right, result);
}


BST.prototype.postOrder = function(){
	var result = [];
	postOrderHelp(this.root, result);
	console.log('POST ORDER TRAVERSAL\t', result);
	return result;
}

function postOrderHelp(r, result){
	if(r == null) return;
	postOrderHelp(r.left, result);
	postOrderHelp(r.right, result);
	//console.log(r.data);
	result.push(r.data);
}


