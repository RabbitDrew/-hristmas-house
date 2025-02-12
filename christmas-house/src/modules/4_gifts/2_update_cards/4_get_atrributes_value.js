const imgLinks = [
    "./assets/img-gifts/img-cards/img-card-1.png",
    "./assets/img-gifts/img-cards/img-card-2.png",
    "./assets/img-gifts/img-cards/img-card-3.png",
  ];
  const titleSubClasses = [
    "title-color--work",
    "title-color--health",
    "title-color--harmony",
  ];
  const categoryMap = {
    "For Work": 0,
    "For Health": 1,
    "For Harmony": 2,
  };

 const getAttributesValue = function (obj) {
    let result = []
    let index
    for (let k in categoryMap) {
      if (k.toLocaleLowerCase().replace(/\s+/g, "") === obj.category.toLocaleLowerCase().replace(/\s+/g, "")) {
        index = categoryMap[k]
      }
    }
    result.push(imgLinks[index], titleSubClasses[index])
    return result
 }

export default  getAttributesValue 
 