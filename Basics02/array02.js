const marvalHeros=["Thor","Ironman","spiderman"]
const dcHeros=["superman","flash","Batman"]
// marvalHeros.push(dcHeros)
// console.log(marvalHeros)
// console.log(marvalHero[3][1])
//  const allHeros=marvalHeros.concat(dcHeros)
// console.log(allHeros)
const all_new_Heros=[...marvalHeros, ...dcHeros]
console.log(all_new_Heros)


const anotherArray =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArray=anotherArray.flat(Infinity)
console.log(realAnotherArray)




console.log(Array.isArray("kismat"))
console.log(Array.from("kismat"))
console.log(Array.from({name:"kismatthapamagar"})) //interesting case


let score1 =10
let score2 =30
let score3 =20
console.log(Array.of(score1,score2,score3))
