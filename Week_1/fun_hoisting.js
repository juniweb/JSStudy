

(function () {
   
    definitionHoisted();       // Definition hoisted!
    
    // definitionNotHoisted();    // TypeError : undefined is not a function
    
    function definitionHoisted() {
        console.log('Definition hoisted!');
    }
    
    var definitionNotHoisted = function () {
        console.log('Definition not hoisted!');
    }

    function funTest() {
        console.log('name 1 : ' + name);    // undefined
        
        var name = 'juniweb';
        
        console.log('name 2: ' + name);    // juniweb
    }
    
    funTest();
        
})();