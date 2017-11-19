

(function () {

	// function A(name) {
	// 	this.name = name;
	// };
	// // debugger;
	// var b = new A('jun');
	// console.log(b);


	function foo(x) {
		this.x = x;
	};
	
	var A = new foo('hello'); 
	console.log(A.x);
	debugger;
	// console.log(A.prototype.x);

	A.prototype = foo.prototype;
	A.prototype.x = 'test';
	console.log(A.prototype.x);
	

})();