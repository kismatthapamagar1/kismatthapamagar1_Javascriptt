//nested scope

function one() //Ice cream magne case if sano bacha le thulo manxe ko icecream magda suhauxa but bot viceversa
{
    const userName="kismat"
    function two()
    {
        website="youtube"
        console.log(userName);
       
    }
     //console.log(website);_this is chaldaina
     two()

}
//one()
/* One is big and can take any variable from function one by function 2 but not viceversa*/
// this is also known as closure :in which the child function can access the parent function variables in the nested function

// if(true)
// {
//     const UserName ="Thapa"
//     if(userName==="Thapa")
//     {
//         const website ="youtube";
//         console.log(userName + website)
//     }
//     console.log(website)
// }
// console.log(userName)
//+++++++++ interestinggg++++++++
function addone(num){   //function

    return num+1;


}
console.log(addone(5))

addTwo(4)
const addTwo=function(num)//expression not just function
{
    return num+2
}
