var numberOfDrums = document.querySelectorAll(".drum").length;

for (i = 0; i < numberOfDrums; i++) {
    // what to do when the buttons are clicked
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("I Got Clicked");
    })

}