"use strict";  //per appianare problemi di compatibilità tra le varie versioni di javascript

//questo codice viene eseguito secondo gli standar moderni

/*-------------------------
    DOM ELEMENTS
--------------------------*/
// const daysElm = document.querySelector('#days');
const daysElm = document.getElementById('days');
const hoursElm = document.getElementById('hours');
const minutesElm = document.getElementById('minutes');
const secondsElm = document.getElementById('seconds');
const panelElm = document.querySelector('.panel');

//data di Natale
const endDate = new Date("December 25 2023");
// console.log(endDate);

//millisencondi dal 1/1/1970 al 25 dicembre 2023
const endDateInMs = endDate.getTime();
console.log(endDateInMs);

//prendo la data attuale concatenandola alla funzione getTime .
//oggi in millisecondi
// const nowInMs = new Date().getTime(); 
// console.log(nowInMs);

//differenza in millisecondi
// const diff = endDateInMs - nowInMs;
// console.log(diff);

//tabella in ms

const secondInMs = 1000;
const minuteInMS = 60 * secondInMs;
const hourInMs = 60 * minuteInMS;
const dayInMs = 24 * hourInMs;

// console.log(diff / dayInMs);

// daysElm.innerHTML = Math.floor(diff / dayInMs);

//prendo i ms arrotondati per difetto dai giorni mancanti e li divido per le ore in ms
// hoursElm.innerHTML = Math.floor((diff % dayInMs) / hourInMs);
// minutesElm.innerHTML = Math.floor((diff % hourInMs) / minuteInMS);
// secondsElm.innerHTML = MAth.floor ((diff % minuteInMS) / secondInMs);

const counterTimer = setInterval(timer, 1000);
function timer(){
    //oggi in ms (dal primo gennaio 1970 ad oggi)
    const nowInMs = new Date().getTime();
    //la differenza in ms
    const diff = endDateInMs - nowInMs;
    if(diff > 0){
        //calcoli che vanno ad aggiornare l'html ogni secondo
        daysElm.innerHTML = Math.floor(diff / dayInMs);
        hoursElm.innerHTML = Math.floor((diff % dayInMs) / hourInMs);
        minutesElm.innerHTML = Math.floor((diff % hourInMs) / minuteInMS);
        secondsElm.innerHTML = Math.floor ((diff % minuteInMS) / secondInMs);
    }else{
        clearInterval(timer);
        panelElm.innerHTML = "<h1>Buon Natale ! </h1>"
    }
    
}