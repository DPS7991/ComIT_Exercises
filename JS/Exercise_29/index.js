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

// Extra Exercises

let favoriteRecipe = {
    title: 'Mole',
    servings: 2,
    ingredients: ['cinnamon', 'cumin', 'cocoa']
};

console.log(favoriteRecipe['title']);
console.log('Serves:', favoriteRecipe['servings']);
console.log('Ingredients:');

for (const item of favoriteRecipe['ingredients']) {
    console.log(item);
}

let readingList = [
    {
        title: 'The Bible',
        author: 'Many writers',
        alreadyRead: true
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        alreadyRead: false
    },
    {
        title: 'The Art of Meditation',
        author: 'Joel GoldSmith',
        alreadyRead: true
    }
]

for (const book of readingList) {
    console.log(`${book['title']} by ${book['author']}`);
}

for (const book of readingList) {
    if (book['alreadyRead']) {
        console.log(`You already read ${book['title']} by ${book['author']}`);
    } else {
        console.log(`You still need to read ${book['title']} by ${book['author']}`);
    }
}
