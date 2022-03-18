let userName = 'Ryan Schultz';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

const userQuestion = 'How do I become a pterodactyl?';
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

let eightBall = '';

switch (randomNumber) {
  case 0:
    console.log('Polyjuice potion');
    break;
  case 1:
    console.log('Witch doctor');
    break;
  case 2:
    console.log('Council of elves');
    break;  
  case 3:
    console.log('The one ring');
    break;
  case 4:
    console.log('David Hasslehoff');
    break;     
  case 5:
    console.log('Elder wand');
    break;     
  case 6:
    console.log('Djinn');
    break;       
  case 7:
    console.log('Wizard spell');
    break;      
  default:
    console.log('You\'ll never be a pterodactyl!');                         
}