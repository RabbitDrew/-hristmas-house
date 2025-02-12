import data from "../../0_global/4_data";

const dataFilter = function (activeTab) {
    let result 
    if (activeTab !=='' && 
        activeTab && 
        typeof activeTab === 'string') {
    result = data.filter((card) => {
            const activeTabFormatted = activeTab.toLocaleLowerCase().replace(/\s+/g, "");
            const title = card.category.toLocaleLowerCase().replace(/\s+/g, "");
            if (title === activeTabFormatted) {
                return true;
            } else {
                return false
            }

    });
    }
    if (result.length === 0 || ! result) {
        result = data
    }

    return result
}

export default dataFilter