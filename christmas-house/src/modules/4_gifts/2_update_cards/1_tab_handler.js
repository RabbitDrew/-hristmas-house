import getTabTitle from "./2_get_tab_title"
import updateCards from "./1_2_update_cards"
import tabUpdateStyle from "../1_update_tabs_style/1_tab_update_style"

const tabs = document.querySelectorAll ('.gifts-tab-btn')
tabs.forEach(tab => { 
    tab.addEventListener('click', (event) => {
        if (!tab.classList.contains('disable')) {
            const tabTitle = getTabTitle(event);  
            tabUpdateStyle(tabs, tabTitle);      
            updateCards(tabTitle);                
        }
    })
})
