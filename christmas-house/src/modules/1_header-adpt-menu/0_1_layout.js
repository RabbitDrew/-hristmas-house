import createEl from "../0_global/1_element-creator";
import renderEl from "../0_global/2_element-rendering";

const navTitles = ["gifts", "about", "best", "contacts"];
const navLinksHomePage = ["gifts.html", "#about", "#best", "#footer"];
const navLinksGiftsPage = ["#", "home.html#about", "home.html#best", "#footer"];

const createAdptMenu = function (isHomePage) {
  const adptMenu = createEl("div", "adpt-nav__wrapper");
  const adptNav = createEl("ul", "adpt-nav");
  renderEl(adptMenu, adptNav);
  navTitles.forEach((title, i) => {
    const adptNavItem = createEl("li", "adpt-nav-item");
    renderEl(adptNav, adptNavItem);
    const adptNavItemLink = createEl("a", "adpt-nav-item-link");
    if (isHomePage) {
      adptNavItemLink.href = navLinksHomePage[i];
    } else {
      if (i === 0) {
        adptNavItemLink.classList.add('disabled-nav-btn')
        adptNavItemLink.removeAttribute('href');

      } else {
        adptNavItemLink.href = navLinksGiftsPage[i];
      }

    }
    adptNavItemLink.textContent = title;
    renderEl(adptNavItem, adptNavItemLink);
  });
  return adptMenu;
};

export default createAdptMenu;

/*remove link behavior dureing closeing adopt menu for first link*/
