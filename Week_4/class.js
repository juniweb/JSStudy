

(function () {

	// 1. function(함수) 사용 
	
	// 1.1 내부 메소드 정의
	function Person1(name, age) {
		this.name = name;
		this.age = age;
		this.getAge = function() {
			return this.age; 
		}
	}
	
	// 1.2 prototype 메소드 정의
	function Person2(name, age) {
		this.name = name;
		this.age = age;
	}
	
	Person2.prototype.getAge = function() {
		return this.age; 
	}
	
	debugger;
	var Kim = new Person1('Kim', 21);
	var Lim = new Person2('Lim', 31);
	
	console.log('Kim age is : ' + Kim.getAge());
	console.log('Lim age is : ' + Lim.getAge());
	console.log(Kim);
	console.log('');
	
	
	// 2. 객체 리터럴(literal) 사용
	
	var Lee = {
		name : 'Lee',
		age : 33,
		getAge : function() {
			return this.age;
		}
	} 
	
	console.log('Lee age is : ' + Lee.getAge());
	console.log(Lee);
	console.log('');
	
	// 3. 함수를 이용한 싱글톤
	
	var Choi = new function() {
		this.name = 'Lee',
		this.age = 38,
		this.getAge = function() {
			return this.age;
		}
	}
	
	Choi.age = 24;
	console.log('Choi age is : ' + Choi.getAge());
	console.log(Choi);
	console.log('');

})();