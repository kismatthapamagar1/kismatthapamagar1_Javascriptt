//IIFE_Immediately Invoked Function Expressions


(function one()
//Named IIFE because the function is given the name
{
    console.log(`DB connected`)
})();//explicit ; is to be given hai taa
// one()

// ()() Global scope variable can cause pollutions and to eliminate such a thing we use iife



// (  function two(){
//     console.log(`DB connected two`)
// })()
(  (name)=>{   // unnamed IIFE with arrow function
    console.log(`DB connected two ${name}`)
})("kismat")