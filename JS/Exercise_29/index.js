let favoriteMovieCharacters = ['John', 'Mary', 'Felix'];

let nameOfParents = ['Danny', 'Elizabeth'];

let newArr = favoriteMovieCharacters.concat(nameOfParents);

console.log(newArr);

newArr.push('Jerry', 'Tom');

console.log(newArr);

console.log(newArr.reverse());

console.log(newArr[3]);

newArr[2] = 'mama';

console.log(newArr);

for (let index = 0; index < newArr.length; index++) {
    console.log(newArr[index]);
    
}

for (let name of newArr) {
    console.log(name);
}