//exercise 1
const car = { brand: "mercedes", model: "e220", year: "2011", speed: "100" };
function print(car) {
    for (const prop in car)
        console.log(prop + ":" + car[prop]);
}
function calculate(speed, car) {
    let value = speed / car.speed;
    let extensionValue = Math.floor(value / 4);
    value += extensionValue;
    console.log(value);
}
//exercise 2
let fraction = { numenator: "1", denominator: "10" };
let fraction2 = Object.assign({}, fraction);
fraction2.numenator = "2";
fraction2.denominator = "10";
function task1(fr1, fr2) {
    let fr = Object.assign({}, fraction)
    if (fr1.denominator === fr2.denominator) {
        fr.numenator = fr1.numenator;
        fr.denominator = fr1.denominator + fr2.denominator;
    }
}
task1(fraction, fraction2);
function task2(fr1, fr2) {
    let fr = Object.assign({}, fraction)
    if (fr1.denominator === fr2.denominator) {
        fr.numenator = fr1.numenator;
        fr.denominator = fr1.denominator - fr2.denominator;
    }
}
function task3(fr1, fr2) {
    let fr = Object.assign({}, fraction)
    fr.numenator = fr1.numenator * fr2.numenator;
    fr.denominator = fr1.denominator * fr2.denominator;
}
function task4(fr1, fr2) {
    let fr = Object.assign({}, fraction)
    fr.numenator = fr1.numenator * fr2.denominator;
    fr.denominator = fr1.denominator * fr2.numenator;
}
function task5(fr) {
    while (fr.numenator % 2 == 0 && fr.denominator % 2 == 0) {
        fr.numenator = fr.numenator / 2;
        fr.denominator = fr.denominator / 2;
    }
    while (fr.numenator % 3 == 0 && fr.denominator % 3 == 0) {
        fr.numenator = fr.numenator / 3;
        fr.denominator = fr.denominator / 3;
    }
}
//exercise 3
const time = { hour: "22", minute: "15", seconds: "30" };
function printTime(time) {
    console.log(`${time.hour} ${time.minute} ${time.seconds}`);
}
function time2(time, sec) {
    let totalSec = (time.hour * 3600) + (time.minute * 60) + parseInt(parseInt(time.seconds) + parseInt(sec));
    time.hour = Math.floor(totalSec / 3600);
    time.minute = Math.floor((totalSec % 3600) / 60);
    time.seconds = (totalSec % 3600) % 60;
}
function time3(time, minute) {
    let totalSec = (time.hour * 3600) + ((parseInt(time.minute) + minute) * 60) + parseInt(time.seconds);
    time.hour = Math.floor(totalSec / 3600);
    time.minute = Math.floor((totalSec % 3600) / 60);
    time.seconds = (totalSec % 3600) % 60;
}
function time4(time, hour) {
    let totalSec = ((parseInt(time.hour) + hour) * 3600) + (time.minute * 60) + parseInt(time.seconds);
    time.hour = Math.floor(totalSec / 3600);
    time.minute = Math.floor((totalSec % 3600) / 60);
    time.seconds = (totalSec % 3600) % 60;
}
