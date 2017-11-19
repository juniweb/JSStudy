

(function () {
   
	var color = 'red';

	function foo() {

		var color = 'blue'; // 2

		function bar() {
			console.log(color); // 1
		}

		return bar;
	}

	debugger;	
	var baz = foo(); // 3

	baz(); // 4
	
})();