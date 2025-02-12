const getTitleAndSubtitle = function (event) {
    const resultObj = {};
    const giftCards = document.querySelectorAll('.best-gifts-card, .gifts-card'); 
    const giftCard = Array.from(giftCards).find(card => card.contains(event.target));

    if (giftCard !== undefined) {
        const titleElement = giftCard.querySelector('.best-gifts-card-title, .gifts-card-title');
        const subtitleElement = giftCard.querySelector('.best-gifts-card-subtitle, .gifts-card-subtitle');
        if (titleElement) {
            resultObj.title = titleElement.textContent.toLocaleLowerCase().replace(/\s+/g, "");
        }
        if (subtitleElement) {
            resultObj.subtitle = subtitleElement.textContent.toLocaleLowerCase().replace(/\s+/g, "");
        }
    }
    return resultObj;
}

export default getTitleAndSubtitle;


