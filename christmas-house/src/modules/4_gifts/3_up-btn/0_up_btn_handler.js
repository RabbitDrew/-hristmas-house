import showUpBtn from "./1_up_btn"
const dataObj = {
    scrollStep: 0
}
window.addEventListener('scroll', ()=> {
    dataObj.scrollStep = window.scrollY
    showUpBtn(dataObj.scrollStep)  
})