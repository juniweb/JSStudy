

(function () {
   
    var v1 = true;      // Boolean
    var v2 = 123;       // Number
    var v3 = 'juniweb'; // String
    var v4 = null;      // null
    var v5;             // undefined

    var v6 = [1,2,3];       // Object
    var v7 = {name:'juniweb', age:25};       // Object
    var v8 = function (){}; // function
    
    console.log('v1 is %s', typeof v1);
    console.log('v2 is %s', typeof v2);
    console.log('v3 is %s', typeof v3);
    // null 의 typeof 는 object 이며 버그이다.
    // https://github.com/FEDevelopers/tech.description/wiki/%E2%80%9Ctypeof-null%E2%80%9D%EC%9D%98-%EC%97%AD%EC%82%AC 
    console.log('v4 is %s', typeof v4);
    console.log('v5 is %s', typeof v5);

    console.log('v6 is %s', typeof v6);
    console.log('v7 is %s', typeof v7);
    console.log('v8 is %s', typeof v8);
        
})();