/*

How to create a normal closure and infinite closure function

 suppose example - sum(1)(2)(3)(4)(5)()

*/

function sum(a){
    return function(b){
        if(b){
            return sum(a+b)
        }
         return a
    }
}

console.log(sum(1)(3)(3)(5)(5)(7)())
