// create an array for the movie list
        let ArrMov = [];

        // function to add movie to the array
        function AddMovie(){
            // short cut to the text input
            let MovieNameText = document.getElementById("MovieNameText");
            let MovieName = MovieNameText.value;

            // console.log to check code is working correctly
           // console.log("MovieName=" + MovieName)

            // check for input
            if (MovieName != ""){
                // add the movie name to array
                ArrMov.push(MovieName);
                // remove text from text box
                MovieNameText.value = "";

                // call function to display
                DisplayMovList();
            }
        }

        // create a function to display the movies
        function DisplayMovList(){
            let MovieDis = document.getElementById("MovieDis");

            // sort movie list before showing it
            ArrMov.sort();
            // this returns the array as a string with a line break in between the items
            MovieDis.innerHTML = ArrMov.join("<BR>")
        }
        // function to reset array list 
        function ResetList(){
            // empty the array contents
            ArrMov = [];
            // updates the div
            DisplayMovList();
        }

        /**
        6/18/2025
        */