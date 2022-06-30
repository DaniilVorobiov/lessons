let title = prompt('Как называется ваш проект?', "пРоЕкТ");
let screens = prompt('Какие типы экранов нужно разработать?', "Простые");
let screenPrice = +prompt('Сколько будет стоить данная работа?', 1000);
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?', "Метрика");
let servicePrice1 = +prompt('Сколько это будет стоить?', 1000);
let service2 = prompt('Какой дополнительный тип услуги нужен?', "Метрика");
let servicePrice2 = +prompt('Сколько это будет стоить?', 1000);
let rollback = 50;

let allServicePrices;
let servicePercentPrice;
let fullPrice;

const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
};

function getFullPrice() {
    return parseInt(screenPrice) + parseInt(allServicePrices);
}

function getTitle() {
    return 
}

function getServicePercentPrices() {
    return fullPrice * (rollback / 100);
}

function getTitle(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(function(word) {
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

allServicePrices = getAllServicePrices();
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