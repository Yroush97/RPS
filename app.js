const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Start the Game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //play Match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand img");
        const computerHand = document.querySelector(".computer-hand img");
        const Hands = document.querySelectorAll('.hands img');
        Hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            });
        });

        //Computer Options
        const computerOptions = ["Rock", "Paper", "scissors"];


        options.forEach(Option => {
            Option.addEventListener('click', function () {
                //Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //Hetre is where we call compare Hands
                    comparHands(this.textContent, computerChoice);

                    //Update images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;

                }, 1500);

                //ANIMATION 
                playerHand.style.animation = "shakePlayer 1.5s ease";
                computerHand.style.animation = "shakeComputer 1.5s ease";

            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerSCore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerSCore.textContent = cScore;
    }

    const comparHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        //checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is  tie';
            return;
        }
        //Check for a rock
        if (playerChoice === 'Rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        //Check for a paper
        if (playerChoice === 'Paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        }//Check for a scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'Rock') {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins';
                pScore++;
                updateScore();
                return;
            }
        };
    };

    //Is call all the inner function
    startGame();
    playMatch();
    // updateScore();
};

//start the game function
game();