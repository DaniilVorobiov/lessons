
let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let rollback = 50;

let allServicePrices;
let servicePercentPrice;
let AllServicePrices;
let fullPrice;

const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
}
function getFullPrice() {
    return screenPrice + AllServicePrices;
}
function getTitle() {
    return title.charAt(0).toUpperCase() + title.slice(1);
}
function getServicePercentPrices() {
    return fullPrice - rollback;
}

allServicePrices = getAllServicePrices(); 
fullPrice = getFullPrice();
title = getTitle();
servicePercentPrice = getServicePercentPrices();


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

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens);
console.log("Стоимость верстки экранов " + screenPrice + " рублей/долларов/гривен/юани");
console.log("Стоимость разработки " + fullPrice + " рублей/долларов/гривен/юани");
console.log(screens.toLowerCase().toString().split(", "));
console.log(fullPrice * (rollback / 100));
console.log(servicePercentPrice);
