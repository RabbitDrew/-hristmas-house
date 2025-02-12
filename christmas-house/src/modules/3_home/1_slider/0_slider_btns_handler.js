import moveSlides from "./1_slider_mover"
const dataObj = {
    step: 0
}

const sliderBtns = document.querySelectorAll ('.btn')

sliderBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        if (i === 0) {
            moveSlides(true, false)
        }else {
            moveSlides(false, true)
        }
    })
})

window.addEventListener('resize', () => {
    dataObj.step = 0 
    moveSlides(true, false)
})


export default dataObj