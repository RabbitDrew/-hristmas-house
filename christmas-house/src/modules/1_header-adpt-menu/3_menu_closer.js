const page = document.querySelector(".page");

const closeAdptMenu = function (flagObj) {
    const getadptNavWrapper = document.querySelector(".adpt-nav__wrapper");
    if (getadptNavWrapper) {
      const getAdptNav = getadptNavWrapper.querySelector(".adpt-nav");
      if (getAdptNav.classList.contains("adpt-nav--open")) {
        getAdptNav.classList.remove("adpt-nav--open");
      }
      getAdptNav.classList.add("adpt-nav--close");

      setTimeout(() => {
        getadptNavWrapper.remove();
        page.style.overflow = "auto";
        flagObj.isMenuOpened =true
      }, 499);
    } else {
      console.debug("element isn`t found");
    }

}

export default closeAdptMenu