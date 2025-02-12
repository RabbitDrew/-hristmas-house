import flagsObj from "./0_2_adpt_btn_handler_home"
import closeAdptMenu from "./3_menu_closer"
import btnToggler from "./1_adpt_btn_toggler"

document.addEventListener('click', (event) => {
 const getNav = document.querySelector('.adpt-nav__wrapper')
 if (getNav && getNav.contains(event.target)) {
    btnToggler(flagsObj)
    closeAdptMenu()
 }

})




/*
document.addEventListener('click', (event) => {
 const getNavItems = document.querySelectorAll('.adpt-nav-item') 
 const getNav = document.querySelector('.adpt-nav__wrapper')
 if (getNavItems.length !==0 && getNav) {
    getNavItems.forEach (item => {
        if (item.contains(event.target)) {
            console.log('el is found')
        }
    })
 if (getNav.contains(event.target)) {
    console.log('el is found')
 }
 }else {
    console.log('elements aren`t found')
 }

})

*/