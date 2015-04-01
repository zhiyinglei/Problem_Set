module.exports = module_two;


function module_two(){
	console.log('i am in module_two');
};

module_two.fn1 = function() {
	console.log('i am in module_two fn1');
};

module_two.fn2 = function() {
	console.log('i am in module_two fn2');
}

