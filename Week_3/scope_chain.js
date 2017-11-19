

(function () {
   
	var color = 'red';

	function a() {

		var color = 'blue';
		b();
	}

	function b() {
		console.log('color: %s', color);
	}

	a();
	
})();