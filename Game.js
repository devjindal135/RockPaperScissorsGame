// const score = {
        //     wins: 0,
        //     losses: 0,
        //     ties: 0
        // };
        
        let score = JSON.parse(localStorage.getItem('score')) || { //defalut operator  
          wins: 0,
          losses: 0,
          ties: 0
      };

  updateScore();            
  // if(!score){   //if(score === null){
  //     score ={
  //         wins: 0,
  //         losses: 0,
  //         ties: 0
  //     };
  // }
  // function resetResult(){
  //     score.wins =  0;
  //     score.losses = 0;
  //     score.ties = 0;
  // }
  function playGame(playerMove){
      const computerMove = pickComputerMove();
      let result = '';
      if(playerMove === 'rock'){
          if(computerMove === 'rock'){
              result = 'Tie';
          }
          else if(computerMove === 'paper'){
              result = 'You Lose';
          }
          else if(computerMove === 'scissors'){
              result = 'You Win';
          }
      }
      else if(playerMove === 'paper'){
          if(computerMove === 'rock'){
              result = 'You Win';
          }
          else if(computerMove === 'paper'){
              result = 'Tie';
          }
          else if(computerMove === 'scissors'){
              result = 'You Lose';
          }
      }
      else if(playerMove === 'scissors'){
          if(computerMove === 'rock'){
              result = 'You Lose';
          }
          else if(computerMove === 'paper'){
              result = 'You Win';
          }
          else if(computerMove === 'scissors'){
              result = 'Tie';
          }
      }
      if(result === 'You Win'){
          score.wins++;
      }
      else if(result === 'You Lose'){
          score.losses++;
      }
      else if(result === 'Tie'){
          score.ties++;
      }


      localStorage.setItem('score', JSON.stringify(score));
      updateScore();

      document.querySelector('.js-result').innerHTML = result;
      document.querySelector('.js-move').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;


      
  }

  function updateScore(){
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

  function pickComputerMove(){
      const randomNumber = Math.random();
      if(randomNumber >= 0 && randomNumber < 1/3){  //for Rock
          computerMove = 'rock';
      }
      else if(randomNumber >= 1/3 && randomNumber < 2/3){  //for Paper
          computerMove = 'paper';
      }
      else if(randomNumber >= 2/3 && randomNumber < 1){ // for Scissors
          computerMove = 'scissors';
      }
      return computerMove;
  }