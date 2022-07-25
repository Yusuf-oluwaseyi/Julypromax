var numberOfDrums = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfDrums; i++) {
    // what to do when the buttons are clicked
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {


            this.style.color = "Yellow";





        // var audio = new Audio('sounds/tom-3.mp3');
        // audio.play();
    })

}