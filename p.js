let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}




let btn_sort=document.querySelector(".list");
btn_sort.addEventListener("click",()=>{
    document.querySelector(".header-02").classList.toggle("active")
})



// animatio on scrool
// document.addEventListener('DOMContentLoaded', function () {
//     const observerOptions = {
//         threshold: 0.1 // Trigger when 10% of the element is active
//     };
  
//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('active');
//                 entry.target.classList.remove('hidden');
//             } else {
//                 entry.target.classList.remove('active');
//                 entry.target.classList.add('hidden');
//             }
//         });
//     }, observerOptions);
  
//     const hiddenElements = document.querySelectorAll('.sec-01 .container .content');
//     const hiddenElements2 = document.querySelectorAll('.sec-01 .container .img .a');
//     hiddenElements.forEach(el => observer.observe(el));
//     hiddenElements2.forEach(el2 => observer.observe(el2));
//   });




window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
