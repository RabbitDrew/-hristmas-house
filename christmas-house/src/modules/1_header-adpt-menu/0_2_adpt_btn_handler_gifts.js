import btnToggler from "./1_adpt_btn_toggler";
import adptNavMenuToggle from "./2_adpt-menu-toggler";
import createAdptMenu from "./0_1_layout";
const adptBtn = document.querySelector(".adpt-nav-btn");

const flagsObj = {
  isMenuOpened: false,
};

const adptNavWrapper = createAdptMenu(false);
const adptNav = adptNavWrapper.querySelector(".adpt-nav");

adptBtn.addEventListener("click", () => {
  btnToggler(flagsObj);
  console.log(flagsObj.isMenuOpened);
  adptNavMenuToggle(flagsObj, adptNavWrapper, adptNav);
});
