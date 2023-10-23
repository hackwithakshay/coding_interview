// How to remove duplicated elements from an given array

// Input = [1,2,1,6,7,8,9,2,1,7,8,4,6,8]

// const Input = [1,2,1,6,7,8,9,2,1,7,8,4,6,8]

//method 1
// const Output = Input.filter((el,index,self)=>{
//     return self.indexOf(el)===index
// })

// console.log(Output)

//Method 2
let Output = []
const Input = [1,2,1,6,7,8,9,2,1,7,8,4,6,8]
for (let index = 0; index < Input.length; index++) {
    const element = Input[index];
    if(Input.indexOf(element)===index){
        Output.push(element)
    }
}
console.log(Output)

