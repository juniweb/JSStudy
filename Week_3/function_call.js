

(function () {

	// 1. 일반함수 호출
	function say(something) {
		console.log(something);
	}
	
	say("general heejun");
	
	// 2. 멤버함수 호출
	var funcs = {
		say : function (something) {
			console.log('2. 멤버함수 호출: ' + something);
		}
	}

	funcs.say('memeber heejun');

	// 3. call 을 이용한 호출
	say.call(null, 'call heejun');

	// 4. apply 을 이용한 호출
	say.apply(null, ['apply heejun']);

})();