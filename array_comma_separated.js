/*
Q.2 Array Comma Separated values
You need to convert the below Input

Input -> ["Amit","Rohan","Rahul","Pooja"]

Output -> Amit, Rohan, Rahul, Pooja

*/

const Input = ["Amit","Rohan","Rahul","Pooja"]

//Method 1
// const Output = Input.join(", ")
// console.log(Output)

//Method 2
let Output = ""
for(let i=0;i<Input.length;i++){
    if(!(i>Input.length-2)){
        Output+=Input[i]+", "
    }else{
        Output+=Input[i]
    }
}
console.log(Output)