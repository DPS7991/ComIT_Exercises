'use strict';

let favoriteFruits = prompt('List your top 5 favourite fruits seperated by a comma');

let favoriteFruitsArr = favoriteFruits.split(',');

console.log(favoriteFruitsArr);

let [first, second, third] = favoriteFruitsArr;
let [, , ,...rest] = favoriteFruitsArr;

alert(first);
alert(second);
alert(third);
alert(rest);