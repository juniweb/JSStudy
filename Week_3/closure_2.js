

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
 
	 var out = outerFunc();
	 var out2 = outerFunc();
 
	 debugger;
	 out.innerFunc1();	// 1
	 out.innerFunc2();	// 3
	 out2.innerFunc1();	// 1
	 out2.innerFunc2();	// 3
	 
 })();