"use strict";

let favouriteMovies = prompt('Enter 3 favorite movies seperated by a comma');

let movieArr = favouriteMovies.split(',');

console.log(movieArr);

for (let movie of movieArr) {
    console.log(movie);
}

let sentence = prompt("Enter a sentence to reverse");

let reverseString = (sentence) => {
    let words = sentence.split(' ');
    let reversedWords = words.reverse();
    return reversedWords.join(' ')
}

console.log(reverseString(sentence));