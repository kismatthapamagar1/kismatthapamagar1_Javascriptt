//const tinderuser = new Object()
const tinderUser ={}
tinderUser.id = "123abc"
tinderUser.name ="Kismat "
tinderUser.isLoggedIn=false

// console.log(tinderUser)

const regularUser={
    email:"000kismatthapamagar@",
    fullname:{
        userFullName:{
            firstName:"kismat",
            lastName:"Thapa Magar"

        }
    }
}
// console.log(regularUser.fullname.userFullName.firstName)
const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
// // const obj3={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)//{}-target and obj1 and obj2 are source

const obj3 ={...obj1,...obj2}

console.log(obj3)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedOut'))

