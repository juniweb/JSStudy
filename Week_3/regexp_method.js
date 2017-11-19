

(function () {
   
    // RegExp - exec
    var re1=/x$/;
    var resultExec = re1.exec("box");
    console.log('resultExec');
    console.log(resultExec);
    console.log(""); 

    // RegExp - test
    var resultTest = re1.test("box");
        
    console.log('resultTest : %s', resultTest);
    console.log(""); 
    
    // String - match
    var re2=/Hee/;
    var str = "Lim HeeJun";

    var resultMatch = str.match(re2);
    console.log('resultMatch');
    console.log(resultMatch);
    console.log(""); 

    // String - search
    var resultSearch = str.search(re2);

    console.log('resultSearch : %s', resultSearch);
    console.log(""); 

    // String - replace
    var re3=/Lim/;
    var resultReplace = str.replace(re3, "Kim");

    console.log('resultReplace : %s', resultReplace);
    console.log(""); 
        
    // String - split
    var re4=/,/;
    var str2 = "apple,banana,grape,melon,tomato";
    var resultSplit = str2.split(re4);

    console.log('resultSplit');    
    console.log(resultSplit);
    console.log("");    


    // Flag g
    var reFlag_g1=/sh\w*/;
    var reFlag_g2=/sh\w*/g;
    var str3 = "she sells seashells by the seashore.";

    var resultFlag_G1 = str3.match(reFlag_g1);
    var resultFlag_G2 = str3.match(reFlag_g2);

    console.log('resultFlag_G1');
    console.log(resultFlag_G1);
    console.log('resultFlag_G2');
    console.log(resultFlag_G2);
    console.log("");
    
    
    // Flag i
    var reFlag_i1=/x$/;
    var reFlag_i2=/x$/i;
    var str4 = "BOX";
    var resultFlag_I1 = str4.match(reFlag_i1);
    var resultFlag_I2 = str4.match(reFlag_i2);

    console.log('resultFlag_I1 : %s', resultFlag_I1);
    console.log('resultFlag_I2');
    console.log(resultFlag_I2);
})();