

(function () {
   
    definitionHoisted();       // Definition hoisted!
    
    definitionNotHoisted();    // TypeError : undefined is not a function
    
    function definitionHoisted() {
        console.log('Definition hoisted!');
    }
    
    var definitionNotHoisted = function () {
        console.log('Definition not hoisted!');
    }
    
        
})();