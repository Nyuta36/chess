// Слайдер участников
const slider = document.querySelector('.slider-container');
const sliderLine = document.querySelectorAll('blockSlider');
const cards = document.querySelectorAll('.participants-cards_content');


let page1 = document.getElementById('page');
const btnLeft = document.getElementById('leftBtn');
const btnRight = document.getElementById('rightBtn');

console.log (cards);
page1.classList.add('page-active');
cards[0].classList.add('cards_content-active');

let count = 0;
let width ;

// function init() {
//     console.log('resize');
//     width = sliderLine.offsetWidth;
//     cardsBox.style.width = width * cards.length + 'px';
//     cards.forEach(item => {
//         item.style.width = width +'px';
//         item.style.height = 'auto';
//     });
// }

// window.addEventListener('resize', init);
// init();


btnLeft.addEventListener('click',()=>{
    for (let k = 0; k<cards.length; k++) {
        cards[k].classList.remove('cards_content-active');
    }
    count--
    if (count < 0) {
        count = cards.length-1;
    }
    page1.innerHTML = `${count+1}`;
    cards[count].classList.add('cards_content-active');
    slider.style.transform = `translateX(-${count * 300}px)`;
})

btnRight.addEventListener('click',()=>{
    for (let k = 0; k<cards.length; k++) {
        cards[k].classList.remove('cards_content-active');
    }
    count++
    if (count >= cards.length) {
        count = 0;
    }

    page1.innerHTML = `${count+1}`;
    cards[count].classList.add('cards_content-active');
    slider.style.transform = `translateX(-${count * 300}px)`;
    
})



function slowSlider () {
    for (let k = 0; k<cards.length; k++) {
        cards[count].classList.remove('cards_content-active');
    }
    count++

    if(count >= cards.length) {
        count=0
    }
    page1.innerHTML = `${count+1}`;
    cards[count].classList.add('cards_content-active');
    slider.style.transform = `translateX(-${count * 300}px)`;
}
let second = 1000*4;
let TimerImage = setInterval(()=>slowSlider(),second)

slider.addEventListener('mouseover', ()=>{
    clearInterval(TimerImage)
})

slider.addEventListener('mouseleave',()=>{
    TimerImage=setInterval(()=>slowSlider(),second);
})