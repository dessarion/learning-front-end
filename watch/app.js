function watch() {
    let dateInfo = new Date();
    let dateToString = JSON.stringify(dateInfo)
    let seconds = +([dateToString[18], dateToString[19]].join(''));
    let minutes = +([dateToString[15], dateToString[16]].join(''));
    let hours = +([dateToString[12], dateToString[13]].join('')) + 3;
    let arrowS = document.getElementById('secondsArrow');
    let arrowM = document.getElementById('minutesArrow');
    let arrowH = document.getElementById('hourArrow');
    arrowS.style.transform = `rotate(${seconds * 6 - 180}deg) translateX(197px) translateY(197px)`;
    arrowM.style.transform = `rotate(${minutes * 6 - 180}deg) translateX(197px) translateY(197px)`;    
    arrowH.style.transform = `rotate(${(hours * 30 - 180)}deg) translateX(197px) translateY(197px)`; 
};

setInterval(() => {
    watch();
}, 1000);
