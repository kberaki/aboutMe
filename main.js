'use strict'
let favorightPet = prompt('Guess if dog is my favoright pet?')
if (favorightPet.toLocaleLowerCase() === 'yes' || favorightPet.toLocaleUpperCase() === 'YES'){
 alert('Great! you got it right Dog is my favoright Pet')
 } else {
  alert('Don\'t lose hope try again') }
let myfavoriteClub = prompt('Do you think Arsenal is my Team?')
if (myfavoriteClub.toLocaleLowerCase() ==='yes' || myfavoriteClub.toLocaleUpperCase()==='YES'){
 alert('Yes! Arsenal will always be my team')
 } else{
 alert('I feel sorry for you!')
 }

 let bestCity = confirm('Washington DC is the Best 5th city to live in USA')

  if(bestCity){ 
  alert('Yes Washington DC is the best 5th state to live')
  } else {
 alert('No accourding to google.com washington DC is the best 5th city')
  }
let myKids = confirm('I have have 3 kids? click ok for yes cancel for no')
if(myKids){
console.log(myKids)
alert('No! I do\'t have that many kids')
} else {
  alert('You Got it right i don\'t have 3 kids')
}
let myclass = confirm('Are you enjoying the class?')
if(myclass){
console.log(myclass)
alert('That\'s great keep pushing')
} else {
  alert('Ask questions and read more then you will enjoy it')
}






/*let heroArray = []
console.log(heroArray)

let favoriteHero = prompt('who is your fa hero')
console.log('My favoright')
let universe = confirm ('do you follow marvel')
if(favoriteHero.toLocaleLowerCase() === 'tanos' || favoriteHero.toLocaleUpperCase()=== 'THANO'){
  alert (favoriteHero + 'is my favaroit hero too')
} else */


// let counter = 0
// while(counter < 3){
//   counter ++
//   console.log(counter)
// }
// if statements runs once
// loops rund as far as the conditions are true
// counter = counter + 1
// counter += 1

// for loops need to know what they are traking and for how long


// let heroArray = ['thanos', 'Hulk', 'thor', 'Black panter']
// for(let i = 0; i <= heroArray.lenght; i++){
//   if (villian = promptcd)
//   console.log('index is now', i)
//   console.log('for loop is now', heroArray[i] )
// } 
let classArray = ['0', '1', '2', '3']

for(let i = 0; i < classArray.length; i++ ){
let class1 = prompt('Guess how many students are in my coding class?')
if(class1 == 7){
  alert('Great job, you guessed it right')
  break
}
else if(class1>7){
  alert('your number is too high! you have only' + ' ' +  ((classArray.length - 1) - (i)) + ' chances')
  
} else if (class1<7) {
  alert(' your number is too low you have only' + (( classArray.length - 1 ) - (i)) + 'chances')
} else {
    
}
}
 let studentName = ['Simon' ,'Fitsum', 'kesete', 'solomon', 'ayale', 'Eyasu']
let i = 0
let counter=studentName.length

while(i<counter){
  let name = prompt('what are the name of my class mates from silverSpring?')
if(name.toLowerCase() == 'simon'|| name.toLowerCase() == 'ayale'){
  alert('That is right! the possible answers are ' + studentName[0] + ' & ' + studentName[4])
  break
} else {
  alert('Don\'s lose hope try again')
}
i++

}



// while (!correctAnswer){
//   let thanosBirthplace = confirm ('is this cool')
//   if (thanosBirthplace === true) {
//     alert ('good job, have a good day')
//     correctAnswer = true

//   } else {
//     alert(' try again')
//   }
// }