

(function () {
   
	// 값으로서의 함수
	// 함수의 이름이 없는 익명함수
	var square = function (num) {
		return num * num;
	}

	console.log('square(4) : ' + square(4));
	console.log("");

	// 함수의 Return 값으로 함수 전달
	var multiply = function (num) {
		return function (num2) { return num * num2 }
	}
	
	var returnFunc = multiply(3);
	console.log('returnFunc : ' + returnFunc);
	console.log('returnFunc(5) : ' + returnFunc(5));
	console.log("");

	// 객체 이용 
	var operations = {
		'Addition'			: function(a, b) { return a + b; },
		'subtraction'		: function(a, b) { return a - b; },
		'multiplication'	: function(a, b) { return a * b; },
		'division'			: function(a, b) { return a / b; }
	}

	console.log('operations.Addition(1,2) : ' + operations.Addition(1,2));
	console.log('operations.subtraction(1,2) : ' + operations.subtraction(1,2));
	console.log('operations.multiplication(1,2) : ' + operations.multiplication(1,2));
	console.log('operations.division(1,2) : ' + operations.division(1,2));
	console.log("");

	// 콜백
	var callback = function (cbfunc) {
		if (typeof cbfunc == 'function') {
			var result = cbfunc(5);
			console.log('result: %s', result);
		}
	}

	callback(square);
})();