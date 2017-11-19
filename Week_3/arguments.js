

(function () {

	// "use strict";

	function testArg(one) {
		console.log('arguments: ', arguments);		
		console.log('arguments.length: ', arguments.length);
		console.log('');
		console.log('arguments[0]: ', arguments[0]);
		console.log('arguments[1]: ', arguments[1]);
		console.log('arguments[2]: ', arguments[2]);
		console.log('');
		console.log('one: ', arguments[0]);
		console.log('one: ', one);

		console.log('arguments.callee: ', arguments.callee);		
		console.log('testArg.caller: ', testArg.caller);
	}
	
	testArg(1, 2, 3);
	
	function checkCaller(a, b, c) {
		testArg(a, b, c);
	}

	checkCaller('apple', 'banana', 'melon');

})();