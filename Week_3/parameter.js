

(function () {

	function testParam(one, two) {
		console.log('arguments: ', arguments);		
		console.log('arguments.length: ', arguments.length);
		console.log('');
		console.log('one: ', one);
		console.log('two: ', two);

		// two = two || 10;
		if(two != undefined) {
			console.log(one * two);
		}
	}
	
	testParam(1);
	console.log('---------------------------');

	testParam(1, 2);
	console.log('---------------------------');

	testParam(1, 2, 3);
	console.log('---------------------------');
	

})();