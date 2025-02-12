import createEl from "../../0_global/1_element-creator";
import renderEl from "../../0_global/2_element-rendering";
import getAttributesValue from "./4_get_atrributes_value";

const createGiftsCards = function (filteredData) {
let result = []
filteredData.forEach(obj => {
    const attributes = getAttributesValue(obj)
    const cardObj = {}
    const giftsCard = createEl("div", "gifts-card");
        //img
        const giftsCardImgWrapper = createEl("div", "gifts-img__wrapper");
            renderEl(giftsCard, giftsCardImgWrapper);
            const imgGifts = createEl("img", "gifts-img");
            imgGifts.src = attributes[0];
            imgGifts.alt = "ball";
            renderEl(giftsCardImgWrapper, imgGifts);
        //title
        const giftssTitleWrapper = createEl("div","gifts-card-title__wrapper");
            renderEl(giftsCard, giftssTitleWrapper);
            const giftsTitle = createEl("h2", "gifts-card-title");
            giftsTitle.classList.add(attributes[1]);
            giftsTitle.textContent = obj.category
            renderEl(giftssTitleWrapper,giftsTitle);
            const giftsSubtitle = createEl("h2", "gifts-card-subtitle");
            giftsSubtitle.textContent = obj.name
            renderEl(giftssTitleWrapper,giftsSubtitle);
    
    cardObj.title = obj.name.toLocaleLowerCase().replace(/\s+/g, "");
    cardObj.element = giftsCard
    result.push(cardObj)
  });
return result
};


export default createGiftsCards