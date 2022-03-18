const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'spock') {
      return userInput;
    } else {
      console.log('Error!');
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';    
    }
  };
    
  const determineWinner = (getUserChoice, getComputerChoice) => {
    if (getUserChoice === getComputerChoice) {
      return 'Pfft Tie!';
    } 
    if (getUserChoice === 'spock') {
      if (getComputerChoice === 'rock' || getComputerChoice === 'paper' || getComputerChoice === 'scissors')
      return 'Cheater Cheater Pumkpin Eater!';
    } 
    if (getUserChoice === 'rock') {
      if (getComputerChoice === 'paper') {
        return `You can't even beat a computer!`;
      } else {
        return 'User Wins!';
      }
    }
    if (getUserChoice === 'paper') {
      if (getComputerChoice === 'scissors') {
        return `You can't even beat a computer!`;
      } else {
        return 'User Wins!';
      }
    }
    if (getUserChoice === 'scissors') {
      if (getComputerChoice === 'rock') {
        return `You can't even beat a computer!`;
      } else {
        return 'User Wins!';
      }
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice('spock');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The Computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  