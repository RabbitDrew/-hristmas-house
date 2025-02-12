import renderEl from "../0_global/2_element-rendering";
const page = document.querySelector(".page");
const parentEl = document.querySelector(".header-adpt-nav__wrapper");

const adptNavMenuToggle = function (flagObj, adptNavWrapper, adptNav) {
  if (flagObj.isMenuOpened) {
    const getadptNavWrapper = document.querySelector(".adpt-nav__wrapper");

    if (!getadptNavWrapper) {
      renderEl(parentEl, adptNavWrapper);
      if (adptNav.classList.contains("adpt-nav--close")) {
        adptNav.classList.remove("adpt-nav--close");
      }
      adptNav.classList.add("adpt-nav--open");
      page.style.overflow = "hidden";
    } else {
      console.debug("elemen is created");
    }
  } else if (!flagObj.isMenuOpened) {
    const getadptNavWrapper = document.querySelector(".adpt-nav__wrapper");

    if (getadptNavWrapper) {
      const getAdptNav = getadptNavWrapper.querySelector(".adpt-nav");
      if (getAdptNav.classList.contains("adpt-nav--open")) {
        getAdptNav.classList.remove("adpt-nav--open");
      }
      adptNav.classList.add("adpt-nav--close");

      setTimeout(() => {
        getadptNavWrapper.remove();
        page.style.overflow = "auto";
      }, 499);
    } else {
      console.debug("element isn`t found");
    }
  }
};

export default adptNavMenuToggle;
