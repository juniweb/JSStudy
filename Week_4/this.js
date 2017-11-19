
// "use strict";

(function () {

	// // 1. 함수 호출

	// // 1-1. 함수표현
	// function functionDeclarationsCall() {
	// 	console.log('functionDeclarations Call');
	// 	console.log(this);
	// }

	// // 1-1. 함수선언
	// var functionExpressionsCall = function () {
	// 	console.log('functionExpressions Call');
	// 	console.log(this);
	// }

	// functionDeclarationsCall();

	// functionExpressionsCall();



	// // 2. 메서드 호출
	// var obj1 = {
	// 	methodFunc : function () {
	// 		console.log('method Function Call');
	// 		console.log(this);			
	// 	}
	// }

	// obj1.methodFunc();



	// 3. 생성자 호출
	// function Person(name, age) {
	// 	this.name = name;
	// 	this.age = age;

	// 	this.getThis = function () {
	// 		console.log('constructor Call');
	// 		console.log(this);				
	// 	}
	// }

	// var person1 = new Person('heejun', 23);

	// person1.getThis();



	// 4. call, apply 호출
	function say(something) {
		console.log('call, apply Call : ', something);
		console.log(this);						
	}

	say('test');

	var callObj = { type: 'call' };
	var applyObj = { type: 'apply' };

	// 4-1. call 을 이용한 호출
	say.call(callObj, 'call heejun');
	
	// 4-2. apply 을 이용한 호출
	say.apply(applyObj, ['apply heejun']);	

})();