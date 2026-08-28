//Singleton
// //Object.create
//object literals

const mySym=Symbol("key1")

const Jsuser ={
    name:"kismat",
    [mySym]:"mykey1",
    Age:20,
    location:"Dhulikhel",
    email:"000kismatthapa@gmail.com",
    isLoggedIn:false,
    lasrLoginDays:["monday","friday"]


}
console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser.mySym)

Jsuser.email="kismat2625@student.ku.edu.np"
//Object.freeze(Jsuser);
Jsuser.email="kismat@student.ku.edu.np"
console.log(Jsuser)



Jsuser.greeting =Function()
{
    console.log("hello Js user")

}
console.log(Jsuser.greeting())
