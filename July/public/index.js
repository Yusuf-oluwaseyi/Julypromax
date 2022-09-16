const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}

// sproduct script

var mainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].addEventListener('click', function () {
    mainImg.src = smallImg[0].src;
});
smallImg[1].addEventListener('click', function () {
    mainImg.src = smallImg[1].src;
});
smallImg[2].addEventListener('click', function () {
    mainImg.src = smallImg[2].src;
});
smallImg[3].addEventListener('click', function () {
    mainImg.src = smallImg[3].src;
});
smallImg[4].addEventListener('click', function () {
    mainImg.src = smallImg[4].src;
});
    
