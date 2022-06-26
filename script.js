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
console.log("Стоимость разработки " + fullPrice + "рублей/ долларов/гривен/юани")
console.log(screens.toLowerCase().split());
console.log(fullPrice*(rollback/100));

let number = 266219;
let arrayNumber = (""+number).split("").map(Number);
sum = 1;
for(let i = 0;i < arrayNumber.length;i++){
    sum *= arrayNumber[i];
}
sum = sum**3;
let arraySum = (""+sum).split("").map(Number);
console.log(arraySum[0],arraySum[1]);

