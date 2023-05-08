console.log('this works')

const age = 25;
const height = 5;

console.log(age)
console.log(height)

if(age < 8){
    console.log("Check out the merry go round!")
} else if (age > 8 && age < 65 && height > 4.5){
    console.log("check out the roller coaster!")
} else {
    console.log("Check out the Lazy River!")
}


// string Interpolation

// console.log("My "+ noun + "leaps " + adjective)


let nouns = ["heart" , "rainbow" , "ocean"];
let verbs = ["look" , "make" , "continue"];
let adjectives = ["good" , "different" , "possible"];


let noun = nouns[Math.floor(Math.random() * nouns.length)]
let verb = verbs[Math.floor(Math.random() * verbs.length)]
let adjective = adjectives[Math.floor(Math.random() * adjectives.length)]


let sentence = `My ${noun} leaps ${adjective} when I ${verb} at a rainbow in the sky`

console.log(sentence)
document.write(sentence)

