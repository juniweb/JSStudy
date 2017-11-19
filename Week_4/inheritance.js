

(function () {

	////////////////////////////////////////////////////
	// MDN Introduction to Object-Oriented JavaScript //
	////////////////////////////////////////////////////
	// Person
	function Person (firstName) {
	this.firstName = firstName;
  }
  
  Person.prototype.walk = function(){
	console.log("I am walking!");
  };
  
  Person.prototype.sayHello = function(){
	console.log("Hello, I'm " + this.firstName);
  };
  
  // Student
  function Student(firstName, subject) {
	 debugger;
	Person.call(this, firstName);
  
	this.subject = subject;
  }
  
  // Student.prototype
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  
  Student.prototype.sayHello = function(){
	console.log("Hello, I'm " + this.firstName + ". I'm studying "
				+ this.subject + ".");
  };
  
  Student.prototype.sayGoodBye = function(){
	console.log("Goodbye!");
  };

//   var jun = new Student('heejun', 'korean');

  Student('heejun', 'korean');
	

})();