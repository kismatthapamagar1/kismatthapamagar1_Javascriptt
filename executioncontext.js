//Javascript Execution Context
//1.Global execution(environment) context -> (this) here this means current context
//2.FuNctional Execution Context
//3.Eval Execution Context _usually a property of the Global execution context

// runs in two phase
// 1.Memory creation phase
// 2.Execution Phase

let val1=10;  //in memory creation phase val1,val2=undefined
let val2= 5; //val1=10 and val2=5 in the execution phase
function addNum(num1,num2){ //addNum->takes the definition
    let total=num1+num2;
    return total;
}
let result1=addNum(val1,val2)  //result1 and result2 takes undefined in the memory creation phase
let result2=addNum(10,20)  //line 16 and 17 function so newvariable + execution thread  is created thus memory creation and the execution phase rehappens
//and deletes 



//call stack
//Last In First Out _LIFO

function a()
{
    console.log("one")
    b()

}
function b()
{
    console.log("two")
    c()
}
function c()
{
    console.log("three")

}
a()
b()
c()


