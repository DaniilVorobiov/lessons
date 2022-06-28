let title = "project";
let screens = "Easy, Hard, Interactive";
let screenPrice = 100;
let rollback = 50;
let fullPrice = 150000;
let adaptive = true;

console.log(typeof title); 
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани");
console.log("Стоимость разработки " + fullPrice + " рублей/ долларов/гривен/юани");
console.log(screens.toLowerCase().split());
console.log(fullPrice * (rollback / 100));

title = prompt('Как называется ваш проект?');
screens = prompt('Какие типы экранов нужно разработать?');
screenPrice = +prompt('Сколько будет стоить данная работа?');
adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - rollback);
console.log(servicePercentPrice);

switch (true){
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