let step = 0
import dataObj from "./0_slider_btns_handler";
/*add reset dureing resizeing of window */

const  moveSlides = function (left, right) {
    const sliderWin = document.querySelector('.slider-win')
    const sliderLine = document.querySelector('.slider-expo')

    const btns = document.querySelectorAll ('.btn')
    const arrows = document.querySelectorAll ('.arrow')


    const windowWidth = window.innerWidth
    const winWidth = sliderWin.offsetWidth
    const sliderLineWidth = sliderLine.scrollWidth

    let stepLength = 0 
    const maxPosition = (sliderLineWidth - winWidth)
    if (windowWidth>768) {
        stepLength = Math.ceil(maxPosition /3)
    }else {
        stepLength = Math.ceil(maxPosition /6)
    }
     //console.log(stepLength)
     //console.log(sliderLineWidth)



  if (left && !right) {
    if (step < 0) {  
        step += stepLength;
        if (step > 0) step = 0; 
        sliderLine.style.transform = `translateX(${step}px)`;

       
        if (btns[1].classList.contains('btn--disabled') && arrows[1].classList.contains('arrow--disabled')) {
            btns[1].classList.remove('btn--disabled');
            arrows[1].classList.remove('arrow--disabled');
        }

        if (step === 0) {
            btns[0].classList.add('btn--disabled');
            arrows[0].classList.add('arrow--disabled');
        }
    }
} 

else if (right && !left) {
    if (step > -maxPosition) {  
        step -= stepLength;
        if (step < -maxPosition) step = -maxPosition; 
        sliderLine.style.transform = `translateX(${step}px)`;



        if (btns[0].classList.contains('btn--disabled') && arrows[0].classList.contains('arrow--disabled')) {
            btns[0].classList.remove('btn--disabled');
            arrows[0].classList.remove('arrow--disabled');
        }

        if (step === -maxPosition) {
            btns[1].classList.add('btn--disabled');
            arrows[1].classList.add('arrow--disabled');
        }
    }
}
};


export default moveSlides

