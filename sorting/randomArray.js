module.exports = buildArray;

function buildArray(length){
	var ary = [];
	for(var i=0; i<length; i++){
		ary.push(Math.floor(Math.random() * length));
	}
	return ary;
}