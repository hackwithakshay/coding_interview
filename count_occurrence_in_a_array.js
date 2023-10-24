/*
Q.4 Count the occurrence in an given array 

Input -> [1,2,4,1,4,5,6,7,6,8,10,2,3]
Output ->
{
  '1': 2,
  '2': 2,
  '3': 1,
  '4': 2,
  '5': 1,
  '6': 2,
  '7': 1,
  '8': 1,
  '10': 1
}

*/

const Input = [1,2,4,1,4,5,6,7,6,8,10,2,3]

let map = {}
//method 1
// const Output = Input.forEach((el,i,self)=>{
//     let count = 0
//     self.forEach((el2)=>{
//        if(el===el2){
//          count++;
//        }
//     })
//     map[el] = count
// })

//method 2
const Output = Input.reduce(function (prev, curr){
 return prev[curr]?prev[curr]++:prev[curr]=1,prev
},{});

console.log(Output)