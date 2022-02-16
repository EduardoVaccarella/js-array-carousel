let i = 0;

let currentImg = document.getElementsByClassName('slide')[i];

currentImg.classList.add('active');

let currentSlide = document.getElementsByClassName('slide-preview')[i];

currentSlide.classList.add('selected');

const btnUp = document.getElementById('upArr');

const btnDo = document.getElementById('doArr');

btnUp.addEventListener('click', function() {
    currentImg.classList.remove('active');
    currentSlide.classList.remove('selected');
    if(i == 0) {
        i = 4;
    } else {
        i--;
    }
    currentImg = document.getElementsByClassName('slide')[i];
    currentSlide = document.getElementsByClassName('slide-preview')[i];
    currentImg.classList.add('active');
    currentSlide.classList.add('selected');
    
})

btnDo.addEventListener('click', function() {
    currentImg.classList.remove('active');
    currentSlide.classList.remove('selected');
    if(i == 4) {
        i = 0;
    } else {
        i++;
    }
    currentImg = document.getElementsByClassName('slide')[i];
    currentSlide = document.getElementsByClassName('slide-preview')[i];
    currentImg.classList.add('active');
    currentSlide.classList.add('selected');

})