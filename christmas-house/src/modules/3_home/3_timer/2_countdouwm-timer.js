
const targetDate = Date.UTC(2025, 0, 1, 0, 0, 0);

const  timer = function () {
const timeArr = []

const nowDate = new Date().getTime()
const remainedTime = targetDate - nowDate 

const day = Math.floor(remainedTime/1000/60/60/24)
const hour = Math.floor(remainedTime/1000/60/60%24)
const min = Math.floor(remainedTime/1000/60%60)
const sec = Math.floor(remainedTime/1000%60)

timeArr.push(day, hour, min,sec)

return timeArr
}


export default timer