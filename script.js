const btn = document.querySelector(".btn");
      const number = document.getElementById("number");
      const cards = document.querySelectorAll(".card");

      cards.forEach((card)=>{
        card.querySelector(".card-front").innerHTML="?";
      })

      

      let gameplay = true;
      let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
      let boardlocked = false;//not more than 2 cards are selected

      let matchedpair = 0;
      let flipcard = []; //store the 2 card the player has turned

      function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
      }
      //main function
      function initialize_game() {
        matchedpair = 0;
        boardlocked = false;
        gameplay=true;
        flipcard = [];

        number.textContent = matchedpair;
        //shuffle the card value
        shuffle(arr);

        cards.forEach((card, index) => {
          // Remove the 'flip' class from previous games
          card.classList.remove("flip");

          // Find the back face of the card and set its number
          const cardback = card.querySelector(".card-back");
          cardback.textContent = arr[index];

          card.addEventListener("click", clicked);
        });
      }
      //function that will run every time when card it clicked
      function clicked() {
        // 'this' refers to the specific card that was clicked
        if (boardlocked || this.classList.contains("flip") || !gameplay) {
          return;
        }
        //flip the card
        this.classList.add("flip");
        flipcard.push(this);// you are pushing the whole HTML element into the array, not just its number.

        // If two cards are flipped, check for a match
        if (flipcard.length === 2) {
          boardlocked = true; // Lock the board
          checkForMatch();
        }
      }
      function checkForMatch() {
        if(!gameplay){
          return
        }
        const card1 = flipcard[0];
        const card2 = flipcard[1];

        // Get the numbers from the back faces of the cards
        const value1 = card1.querySelector(".card-back").textContent;
        const value2 = card2.querySelector(".card-back").textContent;

        if (value1 === value2) {
          // It's a match!
          disableMatchedCards();
        } 
        else {
          // Not a match, flip them back after a delay
          unflipMismatchedCards();
        }
      }

      function disableMatchedCards() {
        matchedpair++;
        number.textContent = matchedpair;

        // We don't need to do anything to the cards themselves,
        // as the 'flip' class will keep them face-up.

        // Reset for the next turn
        flipcard = [];
        boardlocked = false;

        //check for winner
        if (matchedpair === 5) {
          gameplay=false;
          setTimeout(() => {
            alert("you have won the game");
          }, 2000);
          setTimeout(()=>{
            initialize_game()
          },2000);
        }
        
        
      }

      //if cards do not match
      function unflipMismatchedCards() {
        // Wait 1 second before flipping back
        setTimeout(() => {
          flipcard[0].classList.remove("flip");
          flipcard[1].classList.remove("flip");

          // Reset for the next turn
          flipcard = [];
          boardlocked = false;
        }, 1000);
      }
      btn.addEventListener("click", initialize_game);
      
      //// Call the function once to set up the game when the page loads
      initialize_game();