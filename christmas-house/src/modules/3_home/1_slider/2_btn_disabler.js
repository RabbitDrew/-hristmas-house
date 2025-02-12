const btnDisabler = function () {
    const btns = document.querySelectorAll ('.btn')
    const arrows = document.querySelectorAll ('.arrow')
    btns[0].classList.add('btn--disabled')
    arrows[0].classList.add('arrow--disabled')
}

const resetSLider = function () {
    const sliderLine = document.querySelector('.slider-expo')

    const btns = document.querySelectorAll ('.btn')
    const arrows = document.querySelectorAll ('.arrow')


    if (btns[1].classList.contains('btn--disabled') && arrows[1].classList.contains('arrow--disabled')) {
        btns[1].classList.remove('btn--disabled');
        arrows[1].classList.remove('arrow--disabled');
    }

    if (step === 0) {
        btns[0].classList.add('btn--disabled');
        arrows[0].classList.add('arrow--disabled');
    }
}

btnDisabler()