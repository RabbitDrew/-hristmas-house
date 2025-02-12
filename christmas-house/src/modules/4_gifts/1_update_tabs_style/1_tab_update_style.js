const tabUpdateStyle = function (tabs, title) {
   let tabTitle
   tabTitle =Array.from(tabs).find(tab => {
      let tabChield = tab.querySelector('.gifts-tab-btn-title')
      if (tabChield) {
        const tabContent = tabChield.textContent
        if (tabContent.toLocaleLowerCase().replace(/\s+/g, "") === title.toLocaleLowerCase().replace(/\s+/g, "")) {
             tab.classList.add('disable')
        }else {
            tab.classList.remove('disable')
        }
      }
   })


}

export default tabUpdateStyle