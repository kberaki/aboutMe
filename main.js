'use strict'
let favorightPet = prompt('Guess if dog is my favoright pet?')
if (favorightPet.toLocaleLowerCase() === 'yes' || favorightPet.toLocaleUpperCase() === 'YES'){
 alert('Great! you got it right Dog is my favoright Pet')
} else {
  alert('Don\'t lose hope try again')
}
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


