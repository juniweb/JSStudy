

(function () {

	function sum() {
		var _sum = 0;
		for (var name in this) {
			_sum += this[name]
		}

		return _sum;
		
	}
	 
	var o1 = {val1:1, val2:2, val3:3}
	var o2 = {v1:10, v2:50, v3:100, v4:25}

	console.log('o1 : ' + sum.call(o1));

	console.log('o2 : ' + sum.call(o2));

})();