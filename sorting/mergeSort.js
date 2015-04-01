//mergeSort([1,3,4,2,10,6,5,3,5,2,1]);

module.exports = mergeSort;

function mergeSort(ary){
	var temp = ary.slice();
	sort(ary, temp, 0, ary.length-1);

}

function sort(ary, temp, low, high){
	if (low >= high) return;

	var mid = Math.floor((low + high) / 2);
	
	sort(ary, temp, low, mid);
	sort(ary, temp, mid + 1,  high);
	merge(ary, temp, low, mid, high);
}

function merge(ary, temp, low, mid, high){
	for(var i = low; i <= high; i++){
		temp[i] = ary[i];
	}

	var left = low;
	var right = mid + 1;
	var index = low;

	while(left <= mid && right <= high){
		if (temp[left] < temp[right]){
			ary[index] = temp[left];
			index++;
			left++;
		}
		else {
			ary[index] = temp[right];
			index++;
			right++;
		}
	}
	if(left <= mid){
		for(var i = 0; i <= mid - left; i++){
			ary[index + i] = temp[left+i]; 
		}
	}
}

