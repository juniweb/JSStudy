

(function () {
   
    var name = 'juniweb';
    
    function getName() {
        var name = 'huimori';
        name2 = 'john';    // var 키워드를 선언하지 않으면, 전역변수     
    
        console.log('[local] name:' + name);    // huimori : 지역변수
    }
    
    console.log('[global] name:' + name);    // juniweb : 전역변수
    
    getName();
    
    console.log('[global] name2:' + name2);    // john : 전역변수
    
    for (var i=1; i<=5; i++) {
        console.log('i: ' + i);
    }
    
    console.log('[global] i:' + i);    // 5 : 전역변수
        
})();