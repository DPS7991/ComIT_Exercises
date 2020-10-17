'use strict';

let styles = ['Jazz', 'Blues'];

styles.push('Rock-n-Roll');

console.log(styles);

function changeMiddleIndex(arr, newWord) {
    if (arr.length % 2 == 1) {
        arr[(arr.length - 1) / 2] = newWord;
    }
}

changeMiddleIndex(styles, 'classics');

console.log(styles);

console.log(styles.shift());

styles.unshift('Rap', 'Reggae');

console.log(styles);