// Exercise 1: Date #1

const currentDate = new Date();


function newYearTimeLeft() {
    const newYearTime = new Date(`January 01 2023 00:00:00`);
    const diff =  newYearTime - currentDate ;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    const timeLeft =
    console.log(`${d} days ${h} hours ${m} minutes ${s} seconds left until New Year`)

    return timeLeft;
};



// module.exports = {newYearTimeLeft}

// Exercise 2 : Date #2

function birthDate() {
    const birthdate = new Date(`January 06 1996 00:00:00`);
    const diff =  currentDate - birthdate ;
    const m = Math.floor(diff / 1000 / 60);
    const minutsLived =
    console.log(`You lived ${m} minutes`)

    return minutsLived;
}

module.exports = {birthDate}

// Exercise 3: Date #3

// var Holidays = require('date-holidays')
// var hd = new Holidays('IL')


function timeUntilNextHoliday(){
    const RoshHashanah = new Date(`September 25 2022 10:00:00`);
    const diff =  RoshHashanah - currentDate ;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    const timeLeft =
    console.log(`${d} days ${h} hours ${m} minutes ${s} seconds left until Rosh Hashanah`)

    return timeLeft;
}

// console.log(hd.isHoliday(new Date()))

function timeUntilNextHoliday1(){
    const nextHoliday = hd.getHolidays(new Date());
    const diff =  new Date(nextHoliday[0].date) - currentDate ;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
    const timeLeft = `${d} days ${h} hours ${m} minutes ${s} seconds left until ${nextHoliday[0].name}`

    return timeLeft;
}

module.exports = {timeUntilNextHoliday}
