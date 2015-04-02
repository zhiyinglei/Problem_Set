var BST = require('./BST');

var b =  new BST();
b.buildTreeWithArray([5,10,11,3,4,,5,8,9,7]);   //duplicate will be removed. 

b.inOrder();
b.preOrder();
b.postOrder();

//console.dir(b);
