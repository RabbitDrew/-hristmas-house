import getTitleAndSubtitle from "./2_get_card";
import createModalWindow from "./0_lapyouts";
import closeModalWindow from "./3_close_modal_window";
import renderEl from "../0_global/2_element-rendering";
const page = document.querySelector(".page");
const pageMain = document.querySelector(".page-main");
let dataObj = {};
const flagsObj = {
  modlaWinIsOpen: false,
};

document.addEventListener("click", (event) => {
  if (!flagsObj.modlaWinIsOpen) {
    dataObj = getTitleAndSubtitle(event);

    if (dataObj.title && dataObj.subtitle) {
        const modalWindow = createModalWindow(dataObj.title, dataObj.subtitle);
        renderEl(pageMain, modalWindow);
        page.style.overflow = "hidden";
        flagsObj.modlaWinIsOpen = true;
    }
  } else {
    closeModalWindow(event, flagsObj);
  }
});
