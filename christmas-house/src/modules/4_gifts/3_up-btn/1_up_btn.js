const showUpBtn = function (scrollStep) {
    const upBtn = document.querySelector('.up-btn')
    
    if (upBtn) {
        if (scrollStep < 300) {
            upBtn.classList.remove('up-btn--reviald')
        }else {
            upBtn.classList.add('up-btn--reviald')
        }
    }
    
}

export default showUpBtn