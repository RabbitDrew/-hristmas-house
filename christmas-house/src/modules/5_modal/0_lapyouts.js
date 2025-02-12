import createEl from "../0_global/1_element-creator";
import renderEl from "../0_global/2_element-rendering";

import data from "../0_global/4_data";

const dataObj = {
arrImgLinks: [
                {
                  title:'forwork',
                  link:'./assets/img-gifts/img-cards/img-card-1.png',
                  colorSubClass: 'work--color'
                },

                {
                  title:'forhealth',
                  link:'./assets/img-gifts/img-cards/img-card-2.png',
                  colorSubClass: 'health--color'
                },

                {
                  title:'forharmony',
                  link:'./assets/img-gifts/img-cards/img-card-3.png',
                  colorSubClass: 'harmony--color'
                }
]
}

/*sub function to  get number to vizualize the score*/
const getScoreNum = function (stringNum) {
  const cleanedString = stringNum.replace(/\D/g, ''); 
  const number = parseInt(cleanedString, 10)/100; 
  return number;
}

const createModalWindow = function (title, subtitle) {
  if (!title || !subtitle) {
    return;
  }

  /*data*/
  const getLinkObj = dataObj.arrImgLinks.find(obj => obj.title.toLocaleLowerCase().replace(/\s+/g, "") === title.toLocaleLowerCase().replace(/\s+/g, ""))
  const getDataObject = data.find(obj => obj.name.toLocaleLowerCase().replace(/\s+/g, "") === subtitle.toLocaleLowerCase().replace(/\s+/g, ""))
 
  if (!getLinkObj || !getDataObject) {
    return;
  }

  /*element*/
  const modalWindow = createEl('section', 'page-modal')
    const modalWrapper = createEl ('div', 'modal__wrapper')
    renderEl(modalWindow, modalWrapper)
    /*main img wrapper*/
    const modalImgWrapper = createEl('div', 'modal-img__wrapper')
    renderEl(modalWrapper, modalImgWrapper)
      //main img 
      const modalImg = createEl('img', 'modal-img')
          if (getLinkObj) {
            modalImg.src = getLinkObj.link;
            modalImg.alt = getLinkObj.title
          } 
      renderEl(modalImgWrapper, modalImg)
      //cross close img 
      const crossImgWrapper = createEl('div', 'modal-cross')  
      renderEl(modalImgWrapper, crossImgWrapper)
      const crossImg = createEl('img', 'modal-cross-img')
            crossImg.src = './assets/modal-win/close.png'
            crossImg.alt = 'cross'
      renderEl(crossImgWrapper, crossImg)
     /*detales wrapper*/
     const detailsWrapper = createEl('div', 'modal-details__wrapper') 
     renderEl(modalWrapper, detailsWrapper)
       //detailed title wrapper 
       const detailedtitleWrapper = createEl( 'div', 'modal-details-title__wrapper')
             renderEl(detailsWrapper, detailedtitleWrapper) 
             //dynemic title
             const detailsTitle = createEl('h2', 'details-title')
                  if (getLinkObj) detailsTitle.classList.add(getLinkObj.colorSubClass)
                  if (getDataObject) detailsTitle.textContent = getDataObject.category
             renderEl(detailedtitleWrapper, detailsTitle)
             //dynemic subtitle/name
             const detailsSubtitle = createEl('h2', 'details-subtitle')
             if (getDataObject) detailsSubtitle.textContent = getDataObject.name
             renderEl(detailedtitleWrapper, detailsSubtitle)  
             //dynemic discription
             const detailsDescription = createEl('p', 'details-description')
             if (getDataObject) detailsDescription.textContent = getDataObject.description
             renderEl(detailedtitleWrapper,  detailsDescription)  
       //stat wrapper
       const statDetailWrapper = createEl ('div', 'modal-stat__wrapper')
       renderEl(detailsWrapper, statDetailWrapper) 
              const modalStatTitle = createEl ('h2', 'modal-stat-title')
                    modalStatTitle.textContent = 'Adds superpowers to:'
              renderEl(statDetailWrapper, modalStatTitle) 
              // ul stat list
              const modalStat = createEl('ul', 'modal-stat')
              renderEl(statDetailWrapper, modalStat) 
                    //stat items
                    for (let key in getDataObject.superpowers) {
                      const modalStatItem = createEl('li','modal-stat-item')
                      renderEl(modalStat,  modalStatItem) 
                            const modalStatItemTitle = createEl('h2', 'modal-stat-item-title')
                                   modalStatItemTitle.textContent = key
                             renderEl(modalStatItem, modalStatItemTitle)
                             const modalStatScoreWrapper = createEl ('div', 'modal-stat-score__wrapper')
                             renderEl(modalStatItem,  modalStatScoreWrapper)
                                    const modalStatItemScore = createEl('h2', 'modal-stat-item-score')
                                          modalStatItemScore.textContent = getDataObject.superpowers[key]
                                    renderEl(modalStatScoreWrapper, modalStatItemScore)
                                    const modalStatScoreImgWrapper = createEl('div', 'modal-stat-score-img__wrapper')
                                    renderEl(modalStatScoreWrapper, modalStatScoreImgWrapper)
                                    /*get num of snowflakes*/
                                    const getNumberOfSnowflakes = getScoreNum (getDataObject.superpowers[key])
                                    const getNumberOfSnowflakesFaded = 5 - getNumberOfSnowflakes 
                                    /*create img according to score*/
                                    for (let i = 0; i < getNumberOfSnowflakes; i++) {
                                        const scoreImg = createEl('img', 'score-img')
                                              scoreImg.src = './assets/modal-win/snowflake.png'
                                              scoreImg.alt = 'snowflake'
                                              renderEl(modalStatScoreImgWrapper, scoreImg)
                                    }

                                    for (let i = 0; i < getNumberOfSnowflakesFaded; i++) {
                                      const scoreImg = createEl('img', 'score-img')
                                            scoreImg.src = './assets/modal-win//snowflake-faded.png'
                                            scoreImg.alt = 'snowflake'
                                            renderEl(modalStatScoreImgWrapper, scoreImg)
                                    }                                    
                    }

     return modalWindow
}


createModalWindow ('forwork', 'Console.log Guru')

  export default createModalWindow;