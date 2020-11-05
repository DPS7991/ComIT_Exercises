let values = [1,2,3,4,5];

let newValues = values.map((item) => item * item);

console.log(values);
console.log(newValues);

let nums = [1,2,3,4,5,6,7,8,9,10];

let evenNums = nums.filter((nums) => nums % 2 == 0);

let oddNums = nums.filter((nums) => nums % 2 != 0);

console.log(nums);
console.log(evenNums);
console.log(oddNums);

let arr = [
    {
        name: 'Daniel',
        age: 25,
        city: 'Winnipeg'
    },
    {
        name: 'John',
        age: 18,
        city: 'Saskatoon'
    },
    {
        name: 'Christie',
        age: 80,
        city: 'Edmonton'
    },
    {
        name: 'Anton',
        age: 20,
        city: 'Toronto'
    },
    {
        name: 'Arash',
        age: 60,
        city: 'Winnipeg'
    }
];

let peopleOverThirty = arr.filter((arr) => arr['age'] > 30);

console.log(peopleOverThirty);

let lessThanTwentyAndInSaskatoon = arr.filter((arr) => (arr['age'] < 20) && (arr['city'] == 'Saskatoon'));

console.log(lessThanTwentyAndInSaskatoon);

let age = arr.map((item) => item['age']);

console.log(age);

let stripVowels = (string) => {
    let arr = string.split('');
    let consonants = arr.filter((item) => (!['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'].includes(item)));
    return consonants.join('');
}

console.log(stripVowels('money'));