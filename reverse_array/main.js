
// Reverse a given array

// Input -> [1,2,3,4,5]

// Output ->[5,4,3,2,1]

const Input = [1,2,3,4,5]

//Method 1
// const Output = Input.reverse()

// console.log(Output)

//Method 2
for(let i=Input.length-1;i>=0;i--){
    console.log(Input[i])
}