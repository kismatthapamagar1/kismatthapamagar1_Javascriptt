

function calculateCartPrice(...num1){//... are rest and spread operator but here it is rest
    return num1

}
console.log(calculateCartPrice(200,4,50,600))
function calculateCartPrice( val1,val2,...num1){//... are rest and spread operator but here it is rest
    return num1

}
console.log(calculateCartPrice(200,4,50,600))

const User={
    username:"kismat",
    price:99999
}
function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.username} and the price is ${anyObject.price}`)

}
// handleObject(User)
handleObject({
    username:"Kis",
    price:99
})
const myNewArray=[200,400,600]
function returnSecondValue(getArray)
{
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200,100,400]))