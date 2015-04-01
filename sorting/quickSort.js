module.exports = quickSort;

function quickSort(ary){
	sort(ary, 0, ary.length-1);
}

function sort(ary, left, right){
	var index = partition(ary, left, right);


	if (left < index-1){
		sort(ary, left, index-1);
	}

	if (right > index){
		sort(ary, index  , right);
	}

}

function partition(ary, left, right){
	var pivot = ary[Math.floor((left + right)/2)];

	//console.log(pivot);

	while (left <= right){

		while (ary[left] < pivot ) left++;

		while (ary[right] > pivot ) right--;

		if(left <= right){
			swap(ary, left, right);
			left++;
			right--;
		}

	}
	return left;
}

function swap(ary, left, right){
	var temp = ary[left];
	ary[left] = ary[right];
	ary[right] = temp;
}

