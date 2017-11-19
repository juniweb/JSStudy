

(function () {

	// var a = "글로벌";
	// var b = 33;
	
	// function demo(x) {
	//   var c = "함수 컨텍스트";
	// };
	
	// debugger;
	// demo(20);


	// debugger;
	var i=0;
	function foo() {
		if(i === 3 ) {
			console.log('End...');
			return;
		} else {
			foo(i++);
		}
	};

	foo();

})();


