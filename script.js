let title
let screens
let screenPrice
let adaptive
let rollback = 50;
let allServicePrices;
let servicePercentPrice;
let fullPrice;
let service1;
let service2;
const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}
const asking = function () {
    title = prompt('Как называется ваш проект?', "пРоЕкТ");
    screens = prompt('Какие типы экранов нужно разработать?', "Простые");
    do {
        screenPrice = prompt('Сколько будет стоить данная работа?');
    } while (!isNumber(screenPrice));
    
    adaptive = confirm('Нужен ли адаптив на сайте?');
}

const getAllServicePrices = function () {
    let sum = 0;
    let fullSum = 0;
    for (i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?', "Метрика")
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?', "Метрика");
        }
        while (!isNumber(sum)) {
            sum = prompt('Сколько это будет стоить?', 1000);
        } 
        fullSum+=sum;
    }
    return fullSum;
};

function getFullPrice() {
    return Number(screenPrice) + Number(allServicePrices);
}

function getServicePercentPrices() {
    return fullPrice * (rollback / 100);
}

function getTitle(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function (word) {
            return word[0].toUpperCase() + word.substr(1);
        })
        .join(' ');
}
switch (true) {
    case fullPrice >= 30000:
        console.log("Даем скидку в 10%");
        break;
    case 30000 > fullPrice > 15000:
        console.log("Даем скидку в 5%");
        break;
    case fullPrice <= 15000:
        console.log("Скидка не предусмотрена");
        break;
    case fullPrice < 1:
        console.log("Что то пошло не так");
        break;
}
asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle(title);
servicePercentPrice = getServicePercentPrices();

console.log(title + " " + typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log("Стоимость верстки экранов " + screenPrice + " рублей/долларов/гривен/юани");
console.log("Стоимость разработки " + fullPrice + " рублей/долларов/гривен/юани");
console.log(screens.toLowerCase().split(", "));
console.log(servicePercentPrice);
