import timer from "./2_countdouwm-timer";
const renderTimer = function () {
    const timeArr = timer()
    const ctaCountdownItemTime = document.querySelectorAll('.cta-countdown-item-time')
    
   ctaCountdownItemTime.forEach((item, i) => {
     item.textContent = timeArr[i]
   })
}
setInterval(function() {
    renderTimer(); 
  }, 1000);

  