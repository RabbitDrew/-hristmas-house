const page = document.querySelector('.page')

const closeModalWindow = function (event, flagsObj) {
    const pageModal = document.querySelector('.page-modal')
    const crossBtn = document.querySelector('.modal-cross')
    if (pageModal && (event.target === pageModal || crossBtn.contains(event.target))) {
        pageModal.classList.add('page-modal--close')
        page.style.overflow ='auto'
        setTimeout(() => {
            pageModal.remove()
            flagsObj.modlaWinIsOpen = false
            console.log(flagsObj)
        }, 480)
    }
 }

 export default closeModalWindow