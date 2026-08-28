// Primitive --pass by value type
// 7 types: String,Number,Boolean,Null,Undefined,Symbol(used for uniqueness),Bigint


//JavaScript is dynamically typed.

const score =100
const scoreValue =100.3
const isLoggedIn=false;
let userEmail
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid) //false
//const bigNumber =8888888888888999999999996666


//Reference type/Non primitive -- pass by reference type
//Array, Objects,Functions

// const heros=["Shaktiman","Naagraj","Doga"];{
//     name:"kismat",
//     age:19

// }
const myFunction=function()
{
    console.log("Hello world");
}




