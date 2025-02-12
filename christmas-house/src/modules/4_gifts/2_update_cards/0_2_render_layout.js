import dataFilter from "./3_data_filter";
import arrShaffler from "../../0_global/3_shaffler";
import createGiftsCards from "./0_1_layout";
import renderEl from "../../0_global/2_element-rendering";

const giftsWrapper = document.querySelector('.gifts__wrapper')
const filteredData = dataFilter('all')
const shuffledFilteredData = arrShaffler(filteredData)
const arrOfCards = createGiftsCards(shuffledFilteredData)

const renderCardsOnPage = function () {
    arrOfCards.forEach(cardObj => {
        renderEl(giftsWrapper, cardObj.element)
    })
}

renderCardsOnPage()
