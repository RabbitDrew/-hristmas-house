import createBestGiftsCards from "./0_layouts";
import arrShaffler from "../../0_global/3_shaffler";
import renderEl from "../../0_global/2_element-rendering";

const parentElement = document.querySelector('.best-gifts-cards__wrapper')
const cardsArr = createBestGiftsCards()
const shaffledArr = arrShaffler(cardsArr)
 
const renderGiftsCards = function () {
     shaffledArr.forEach(card => {
        renderEl(parentElement, card.element)
     });
}

renderGiftsCards()