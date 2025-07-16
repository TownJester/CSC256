
        // 2d array to manage piece layout on board
        arrPiece = [
            [null, 'b', null, 'b', null, 'b', null, 'b'],
            ['b', null, 'b', null, 'b', null, 'b', null],
            [null, 'b', null, 'b', null, 'b', null, 'b'],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            ['p', null, 'p', null, 'p', null, 'p', null],
            [null, 'p', null, 'p', null, 'p', null, 'p'],
            ['p', null, 'p', null, 'p', null, 'p', null]
        ];

        // pointer to secret span
        var SecretSpan = document.getElementById("SelectedSquare");

        // function to build board
        function CreateBoard(){
            // shortcut to html
            var Board = document.getElementById("DivCheck");
            // loop to create eight rows
            for (var i = 0; i < 8; i++){
                // inner loop to create eight columns
                for (var j = 0; j < 8; j++){
                    // create div for each square
                    var CheckSquare = document.createElement("div");
                    // add the css class to the div
                    CheckSquare.className = "CheckSquare";
                    // id to know where to move piece
                    CheckSquare.setAttribute("id", "div", + i + j);

                    // use modulus to alternate the colors of the squares
                    // divdes the number by 2 and if the remainer is zero then the number is even
                    if ((i+j) % 2 == 1){
                        // changes the background color of every other space
                        CheckSquare.classList.add("CheckBg");
                        // event listener for the click on the event, then call the move piece function
                        CheckSquare.addEventListener("click", MovePiece); 
                    }

                    // add the spaces to the board
                    Board.appendChild(CheckSquare);

                    // if the corresponding element in the array is not null, add a checkers piece to the square
                    if (arrPiece[i][j]){
                    // 3 arguements passed - pieces, css classs for color of piece, and div where piece should be added
                    CreatePiece("piece" + i + j, "CheckerPiece" + arrPiece[i][j], CheckSquare);
                   }
                }
            }
        }
            // function to create board piece
            function CreatePiece(id, PieceClass, TheSquare){
                //  create a new div
                var NewPiece = document.createElement("div");
                // set id to know what sqaure and piece worked with
                NewPiece.setAttribute("id", id);
                // apply standard checkerpiece class to piece
                NewPiece.classList.add("CheckerPiece");
                // use the value passed in to create a white or black piece
                NewPiece.classList.add(PieceClass);
                // add on onclick event handler to handle when the piece is clicked
                NewPiece.addEventListener("click", SavePieceId);
                // add new piece to the square
                TheSquare.appendChild(NewPiece);
            }
            function MovePiece(event){
                // if corresponding element in array is not null, add a piece to the square
                // value has 'b' or 'p' then if statement will be true
                var NewSquareId = event.target.id;

                // remove any prefix that may be on the new square
                NewSquareId = NewSquareId.replace("piece", "").replace("div", "");

                // get id of the piece to move from the secret span
                var SelectedPieceId = SecretSpan.textContent;

                // ensure user is trying to move piece to different square
                if (NewSquareId != SelectedPieceId){
                    // pointer for old square
                    var OldSquare = document.getElementById("div" + SelectedPieceId);
                    // create pointer to old piece
                    var OldPiece = document.getElementById("piece" + SelectedPieceId);
                    // color of old piece
                    var OldColorClass = OldPiece.classList[1];
                    // remove old piece from board
                    OldSquare.removeChild(OldPiece);
                    // pointer to new square
                    var NewSquare = document.getElementById("div" + NewSquareId);
                    // create new piece on new square
                    CreatePiece("piece" + NewSquareId, OldColorClass, NewSquare);
                    // remove value from secret span
                    SecretSpan.textContent = "";
                }
            }

            function SavePieceId(event){
                //hold id of the piece
                var SelectedPieceId = event.target.id;
                SelectedPieceId = SelectedPieceId.replace("piece", "");

                SecretSpan.textContent = SelectedPieceId;

                console.log("SelectedPieceId =" + SelectedPieceId);
            }
            CreateBoard();