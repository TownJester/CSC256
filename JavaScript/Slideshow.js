let ArrImg = [
    "./Images/HeartPainting.jpg",
    "./Images/OldArt.jpg",
    "./Images/PixelHeart.JPG",
    "./Images/ScareCrowCat.jpg"
];

// the first image is at index zero, and will start there
let CurrentSlide = 0;

// function to dsiplay image
function DisplaySlideImg(ImgLocate){
    // set up a short cut to access the HTML element
    let ImageElement = document.getElementById("ImgSlideShow");

    // set image source for slideshow to index of image array that was passed into the function
    ImageElement.src = ArrImg [ImgLocate];
}

// function to navigate to previous slide
function PreviousSlide(){
    //navigate to previous slide by subtracting one from the current slide counter
    CurrentSlide = CurrentSlide - 1;
    // equivelent to CurrentSlide--;

    // check for index less than zero. if not loop around to last image in the array
    if (CurrentSlide < 0){
        // CurrentSlide = 0; to stay at the first image
        // set the index to length of array minus one
        CurrentSlide = ArrImg.length - 1;
    }
    // call the function to swap the images
    DisplaySlideImg(CurrentSlide);
}

// navigate next slide
function NextSlide(){
    CurrentSlide = CurrentSlide + 1;

    if (CurrentSlide == ArrImg){
        //CurrentSlide = arrImages - 1; to stay on slide
        CurrentSlide = 0;
    }
    DisplaySlideImg(CurrentSlide);
}


// lodea the first image when the page loads
DisplaySlideImg(CurrentSlide);






/*
6/4/2025
*/ 