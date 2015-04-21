module.exports = tickets;

function tickets(ts){
	counter = {};
	for ( var k in ts){
		//console.log(k);
		if (!counter[k]) {
			counter[k] = 1;
		}
		else{
			counter[k] ++;
		}

		if (!counter[ts[k]]) {
			counter[ts[k]] = 1;
		}
		else{
			counter[ts[k]] ++;
		}		
	}

	//console.log(counter);

	var start;
	for( var c in counter){
		if (counter[c] == 1 && ts[c]){
			start = c;
			break;
		}
	}

	//create tickets in order 
	var result = {};
	while( ts[start] ){
		result[start] = ts[start];
		start = ts[start];
	}
	return result;

}
