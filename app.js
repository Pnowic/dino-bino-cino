document.addEventListener("DOMContentLoaded", function(){

    const nextBtn = document.querySelector ('.next'),
        prevBtn = document.querySelector ('.prev'),
        allSlides = document.querySelectorAll ('.slide');

    let index = 0;

    allSlides[index].classList.add('active');

    let showNextSlide = () => {
        allSlides[index].classList.remove('active','fade');
        index++;
        index %= allSlides.length;
        allSlides[index].classList.add('active','fade');
    };

    let showPrevSlide = () => {
        allSlides[index].classList.remove('active','fade');
        index--;
        index = index < 0 ? allSlides.length -1 : index;
        allSlides[index].classList.add('active','fade');
    };


    nextBtn.addEventListener('click', showNextSlide);
    prevBtn.addEventListener('click', showPrevSlide)

});