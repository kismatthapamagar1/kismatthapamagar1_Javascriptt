// console.log("K");
// console.log("i");
// console.log("s");
// console.log("m");
// console.log("a");
// console.log("t");





function sayMyName()
{
console.log("K");
console.log("i");
console.log("s");
console.log("m");
console.log("a");
console.log("t");



}


// sayMyName()

// function addTwoNumbers(number1,number2)
//     {
//         console.log(number1+number2);
//     }
// addTwoNumbers(4,5);   
function addTwoNumbers(number1,number2){
    //let result = number1 + number2
    // console.log("Kismat")//this line will be displayed

    // return result
    return number1+number2
    console.log("Kismat")//this line will not be displayed because after return statement the function is terminated
}
const result=addTwoNumbers(4,5)
// console.log("Result:",result)

function loginUserMessage(username="Raja")
{
    // if(username===undefined) is same as below
    if(!username){
        console.log("Please Enter a Username")
        return

    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("kismat"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())

