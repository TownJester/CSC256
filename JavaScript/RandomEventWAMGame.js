
        // short cut to spanscore
        let ScoreDis = document.getElementById("SpnScore");
        // array of the holes - get any HTML element with the .hole CSS class and automagicalled add it to an array - this makes it easier to work with the holes
        // or make global updates to elements with the same CSS class
        let DivHoles = document.querySelectorAll(".Hole");
        /// variable to keep track of scores
        let Score = 0;
        // variable to keep track of last hole clicked
        let LastHole;
        // variable to keep track of game time
        let TimeUp = false;

        

        // function to start the game play
        function StartGame(){
            /* Equivelent to how the code is written below - Score.textContent = 0;*/
            // reset the score to zero each time Start Game is clicked
            Score = 0;
            // reset the score ot zero each time Start Game is clicked
            ScoreDis.textContent = Score;

            // reset time up back to false so that the game can run
            TimeUp = false;

            // start having moles popup
            PopUp();

        // specifiy how long the game should last
        setTimeout(function(){
            // this will cause game to stop running because the PopUp function will see that this value is no longer false
            TimeUp = true;

            // 10000 means each round will last 10 seconds
        }, 10000);

        }

        // create a function to generate random amount of time
        function RandomTime(min, max){
            // return a random amount of time
            // multiply the random number by the difference between the min and max
            // then bump the random number to at least the min
            // let's say the range is min = 5, max = 10; multiply the random number by 5
            // and get 3 as the random number, then add 5 to the random number so it is within the rnager
            // the range of 5 - 10 = the random number goes from 3 to 8
            return Math.floor((Math.random() * (max-min)) + min);
        }

        // function to select random hole 
        function RandomHole(DivHoles){
            let RandomNum = Math.floor(Math.random() * DivHoles.length);

            // shortcut to selected hole
            let Hole = DivHoles[RandomNum];

            // if the same random hole is selected in a row, call the function again
            // UX will be better if the mole pops up in a different hole each time
            if (Hole == LastHole){
                return RandomHole(DivHoles);
            }
            // keep track of the last hole for reasons stated above
            LastHole = Hole;
            // return the new hole to the calling code
            return Hole;
            
        }

        // function to make the mole appear in the hole
        function PopUp(){
            // time range - can change how hard the game is (timing)
            let Time = RandomTime(200, 1000);
            // get the random hole
            let Hole = RandomHole(DivHoles);
            // change the css to make the mole appear
            // changes the background color of the hole to the mole color
            Hole.classList.add("Mole");


            // remove the mole after the random amount of time is spent
            // create an anonymous functuoin for the first argument of the setTimeOut  function; setTimeup allows us to run a function for a specific amount of time
            setTimeout(function(){
                // removes the mole from the hole
                Hole.classList.remove("Mole");

                if(!TimeUp){
                    // if the time is not up then pop up another mole
                    PopUp();
                }
                // time is the second argument of the setTimeup function
            }, Time);
        }

        // function to keep score when mole is hit
        function Whack(event){
            // check to see if class contains the mole, if so, user has hit the mole
            if (this.classList.contains("Mole")){
                // add one to score
                Score++;
                // remove mole from hole
                this.classList.remove("Mole");
                // update the score
                ScoreDis.textContent = Score;
            }
        }
        // add event handerler to each of the holes


        DivHoles.forEach(Hole => Hole.addEventListener("click", Whack));
