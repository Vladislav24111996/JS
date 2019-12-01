'use strict'

let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budjet: money,
    timeData: {},
    objectExpenses: {},
    optionalIncome: [],
    additionalIncome: time,
    savings: false
};

// let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),    Легче делать через циклы ...
//     a2 = prompt("Во сколько обойдется?", ''),
//     a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
//     a4 = prompt("Во сколько обойдется?", '');

// appData.timeData.a1 = a2;
// appData.timeData.a3 = a4;

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 20) {
        console.log ("done"); //typeof возвращает тип данных, которые ему предоставленны.
        appData.timeData[a] = b; //новое свойство к объекту может добавляться при помощи символа . или [].
    } else {
        console.log("bed result");
        i--;
    }
    
};

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//         if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 20) {
//         console.log ("done");
//         appData.timeData[a] = b;
// } else {
//     console.log("bed result");
//     i--;
// }
//     i++
// };

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 20) {
//     console.log ("done");
//     appData.expenses[a] = b;
// } else {
//     console.log ("bad result");
//     i--;
// }
//     i++;
// }
// while (i < 2);

appData.moneyPerDay = appData.budjet / 30;

alert("Ежедневный бюджет:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000){
    console.log("Высокий уровень");
} else {
    console.log("Произошла ошибка");
}

