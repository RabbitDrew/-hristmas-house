import createEl from "../../0_global/1_element-creator";
import renderEl from "../../0_global/2_element-rendering";

const giftsTitles = ["For work", "For health", "For work", "For harmony"];
const giftsSubtitles = [
  "Console.log Guru",
  "Hydration Bot",
  "Merge Master",
  "Spontaneous Coding Philosopher",
];
const imgLinks = [
  "./assets/img-best-gifts/gift-1.png",
  "./assets/img-best-gifts/gift-2.png",
  "./assets/img-best-gifts/gift-3.png",
  "./assets/img-best-gifts/gift-4.png",
];
const titleSubClasses = [
  "title-color--work",
  "title-color--health",
  "title-color--work",
  "title-color--harmony",
];
const createBestGiftsCards = function () {
let result = []
  giftsTitles.forEach((title, i) => {
    const cardObj = {}
    const giftsCard = createEl("div", "best-gifts-card");
        /*img*/
        const giftsCardImgWrapper = createEl("div", "best-gifts-img__wrapper");
            renderEl(giftsCard, giftsCardImgWrapper);
            const imgGifts = createEl("img", "best-gifts-img");
            imgGifts.src = imgLinks[i];
            imgGifts.alt = "ball";
            renderEl(giftsCardImgWrapper, imgGifts);
        /*title*/
        const giftssTitleWrapper = createEl("div","best-gifts-card-title__wrapper");
            renderEl(giftsCard, giftssTitleWrapper);
            const giftsTitle = createEl("h2", "best-gifts-card-title");
            giftsTitle.classList.add(titleSubClasses[i]);
            giftsTitle.textContent = title
            renderEl(giftssTitleWrapper,giftsTitle);
            const giftsSubtitle = createEl("h2", "best-gifts-card-subtitle");
            giftsSubtitle.textContent = giftsSubtitles[i]
            renderEl(giftssTitleWrapper,giftsSubtitle);
    
    cardObj.title = giftsSubtitles[i].toLocaleLowerCase().replace(/\s+/g, "");
    cardObj.element = giftsCard
    result.push(cardObj)
  });
return result
};


export default createBestGiftsCards