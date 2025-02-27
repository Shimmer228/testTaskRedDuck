//  ЗАДАЧА 1
//  Додаю проміжну функцію, яка забирає в себе цикл проходження по ключам.
//  В залежності від параметрів(які раніше знаходились відразу в середині своїх функцій, тепер повинні бути виведенні в проміжну функцію),
//  функція розуміє що і куди конкретно записувати, після чого, в випадку з getStyleState, виконує свою подальшу задачу - повертає записаний об'єкт. 
ctx.prototype.__assignKeys = function (source, target, useCanvas) {
    var keys = Object.keys(source), i, key;
    for (i = 0; i < keys.length; i++) {
        key = keys[i];
        target[key] = useCanvas ? source[key].canvas : source[key];
    }
};

ctx.prototype.__applyStyleState = function (styleState) {
    this.__assignKeys(styleState, this, false);
};

ctx.prototype.__setDefaultStyles = function () {
    this.__assignKeys(STYLES, this, true);
};

ctx.prototype.__getStyleState = function () {
    var styleState = {};
    this.__assignKeys(STYLES, styleState, false);
    return styleState;
};

//  ЗАДАЧА 2

//виноска для розуміння multiply і add
// const multiply = (a, b, c) => a * b * c;
// const add = (a, b, c, d, e) => a + b + c + d + e;


//використовується рекурсивне накопичення аргументів - при першому проходженні функція перевіряє чи довжина списку переданих параметрів співпадає
//з довжиною потріною для відповідної функції(додавання або множення). Якщо ні - функція викликає саму себе, передаючи наступний аргумент, поки
//довжина не співпаде, і коли це станеться curry викличе відповідну функцію.
const curry = (f, ...args) => 
    args.length >= f.length ? f(...args) : (...nextArgs) => curry(f, ...args, ...nextArgs);


curry(add)(1)(2)(3)(4)(5) == add(1,2,3,4,5) // should be true
curry(multiply)(1)(2)(3) == multiply(1,2,3) // should be true
