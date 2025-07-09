        // function to build chessboard
        function CreateBoard(){
            // shortcut to html
            let Board = document.getElementById("DivChess");
            // loop to create eight rows
            for (let i = 0; i < 8; i++){
                // inner loop to create eight columns
                for (let j = 0; j < 8; j++){
                    // create div for each square
                    let ChessSquare = document.createElement('div');
                    // add the css class to the div
                    ChessSquare.className = 'ChessSquare';

                    // use modulus to alternate the colors of the squares
                    // divdes the number by 2 and if the remainer is zero then the number is even
                    if ((i+j) % 2 == 0){
                        // changes the background color of every other space
                        ChessSquare.style.backgroundColor = "#9B9ECE"
                    }

                    // add the spaces to the board
                    Board.appendChild(ChessSquare);
                }
            }
        }
        // call the function
        CreateBoard();