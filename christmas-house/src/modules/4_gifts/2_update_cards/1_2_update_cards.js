import renderEl from "../../0_global/2_element-rendering"
import createGiftsCards from "./0_1_layout"
import dataFilter from "./3_data_filter"

const updateCards = function (title) {
    const giftsWrapper = document.querySelector('.gifts__wrapper')
    giftsWrapper.innerHTML = ''
    const filteredArr = dataFilter(title)
    const filteredCards = createGiftsCards(filteredArr)

    filteredCards.forEach(cardObj => {
        renderEl(giftsWrapper, cardObj.element)
    })
}

export default updateCards