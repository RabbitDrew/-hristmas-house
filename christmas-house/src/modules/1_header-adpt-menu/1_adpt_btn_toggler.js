const adptBtnLines = document.querySelectorAll(".adpt-nav-btn-line");
const classRotateLine = ["top-line--rotate", "bottom-line--rotate"];
const classResetLine = ["top-line--reset", "bottom-line--reset"];

const btnToggler = function (flagsObj) {
    if (!flagsObj.isMenuOpened) {
        adptBtnLines.forEach((line, i) =>{
            if (line.classList.contains(classResetLine[i])) {
                line.classList.remove(classResetLine[i])
            }   
            line.classList.add(classRotateLine[i])
        } )
        flagsObj.isMenuOpened = true 
    } else if(flagsObj.isMenuOpened) {
        adptBtnLines.forEach((line, i) =>{
            if (line.classList.contains(classRotateLine[i])) {
                line.classList.remove(classRotateLine[i])
            }   
            line.classList.add(classResetLine[i])
        } )
        flagsObj.isMenuOpened = false
    }
}



export default btnToggler


/*reduce number of cycles!!!*/