const createEl = function (tag, tagClassName) {
    const element = document.createElement(tag);  
    element.className = tagClassName;             
    return element;                               
  };
  
  export default createEl;