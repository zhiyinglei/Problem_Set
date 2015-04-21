module.exports = quickSort;

function quickSort(ary){
	this.sort(ary, 0, ary.length-1);
};

quickSort.prototype.sort = function(ary, left, right) {
	var index = this.partition(ary, left, right);


	if (left < index-1){
		this.sort(ary, left, index-1);
	}

	if (right > index){
		this.sort(ary, index  , right);
	}
};



quickSort.prototype.partition = function(ary, left, right) {
	var pivot = ary[Math.floor((left + right)/2)];

	//console.log(pivot);

	while (left <= right){

		while (ary[left] < pivot ) left++;

		while (ary[right] > pivot ) right--;

		if(left <= right){
			this.swap(ary, left, right);
			left++;
			right--;
		}

	}
	return left;
};




quickSort.prototype.swap = function(ary, left, right) {
	var temp = ary[left];
	ary[left] = ary[right];
	ary[right] = temp;
};



