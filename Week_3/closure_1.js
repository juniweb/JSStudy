

(function () {
   
	function outerFunc() {

		var a = 0;

		return {
			innerFunc1 : function() {
				a+=1;
				console.log("a : " + a);
			},
			innerFunc2 : function() {
				a+=2;
				console.log("a : " + a);				
			}
		};
	}

	debugger;
	var out = outerFunc();

	out.innerFunc1();	// 1
	out.innerFunc2();	// 2
	out.innerFunc2();	// 4
	out.innerFunc1();	// 5
	
})();