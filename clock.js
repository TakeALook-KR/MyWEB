const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h3');

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    clockTitle.innerText = `TakeALook's WEB에 오신걸 환영합니다! 현재 시간은 ${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes} 입니다.`;
}

function init() {
getTime();
setInterval(getTime, 1000);
}

init();