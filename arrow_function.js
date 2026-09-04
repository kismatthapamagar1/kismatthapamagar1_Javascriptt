const user ={
    userName:"Kismat",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.userName},welcome to website `)//this ->current context(simply context means value)
        console.log(this)

    }
}


// user.welcomeMessage()
// user.userName="Sammanikshah"
// user.welcomeMessage()
// console.log(this) //node {}
// function one()
// {
//     let userName="Kismat"
//     console.log(this.userName)
// }
// one()


// const one =function()
// {
//     let userName ="kismat"
//     console.log(this.userName)

// }
// const one =() =>   //function keyword hataune and paramters haru paxi arrow dini and that's it arrow function here we go
// {
//     let userName ="kismat"
//     console.log(this)

// }
// one()

// const addTwo= (num1,num2) => {
//     return num1+num2

// }
const addTwo= (num1,num2) =>  num1+num2   //implicit return ma return dina pardaina for the one line statement


console.log(addTwo(2,5))
