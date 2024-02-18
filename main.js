
// Слайдер Этапы

const point = document.querySelectorAll('.slider-circles');
const sliderStages = document.querySelector('.stages-cards-container');
const slides = document.querySelectorAll('.stages-cards-div');
const leftBtn = document.getElementById('btnLeft');
const rightBtn = document.getElementById('btnRight');
console.log (point);

point[0].classList.add('circleactive');

let counter = 0;


for(let i=0; i<point.length; i++) {
    point[i].addEventListener('click',()=>{
        for(let k=0; k<5; k++){
            point[k].classList.remove('circleactive');
        }
        counter = i;
        point[counter].classList.add('circleactive');
        sliderStages.style.transform = `translateX(-${counter * 330}px)`;
    })
}



leftBtn.addEventListener('click',()=>{
    for (let k = 0; k<5; k++) {
        point[k].classList.remove('circleactive');
    }
    counter--
    if (counter < 0) {
        counter = 4;
    }

    point[counter].classList.add('circleactive');
    sliderStages.style.transform = `translateX(-${counter*330}px)`;
    
})

rightBtn.addEventListener('click',()=>{
    for (let k = 0; k<5; k++) {
        point[k].classList.remove('circleactive');
    }
    counter++
    if (counter >= 5) {
        counter = 0;
    }

    point[counter].classList.add('circleactive');
    sliderStages.style.transform = `translateX(-${counter*330}px)`;
        
})


const observer = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
      // если элемент появился
        if (entry.isIntersecting) {
        // добавить ему CSS-класс
        entry.target.classList.add('title-animation');
        }
    });
    });
observer.observe(document.querySelector('.h2-title1'));
observer.observe(document.querySelector('.h2-title2'));



const observer2 = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
      // если элемент появился
        if (entry.isIntersecting) {
        // добавить ему CSS-класс
        entry.target.classList.add('title-animation-right');
        document.querySelector('.h3').classList.add('title-animation');
        }
    });
    });
observer2.observe(document.querySelector('.h3-2'));


