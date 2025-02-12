const getTabTitle = function (event) {
  const tabElement = event.target.closest(".gifts-tab-btn");
  if (tabElement) {
    const tabTitle = tabElement.querySelector(".gifts-tab-btn-title");
    if (tabTitle) {
      const result = tabTitle.textContent
        .toLocaleLowerCase()
        .replace(/\s+/g, "");
      return result;
    }
  }
  return null;
};

export default getTabTitle;
