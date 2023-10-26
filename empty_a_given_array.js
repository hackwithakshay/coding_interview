/*

Q.5 How to empty an given array

let suppose input -> [2,4,6,7,8,9,0]
Output - []

*/


//Method 1
// var input = [2,4,6,7,8,9,0]
// input=[]
// console.log(input)

//Method 2
// var input = [2,4,6,7,8,9,0]
// input.length=0
// console.log(input)

//Method 3
// var input = [2,4,6,7,8,9,0]
// input.splice(0,input.length)
// console.log(input)

//Method 4
var input = [2,4,6,7,8,9,0]
while(input.length){
    input.pop()
}
console.log(input)