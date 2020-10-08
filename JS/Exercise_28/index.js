'use strict';

let userOne = {
    username: 'batman',
    password: 'hunter2'
};

console.log(typeof(userOne));
console.log(userOne);

if (userOne.username == 'batman' && userOne.password == '*******') {
    console.log('Access Granted');    
} else {
    console.log('Access Denied');
}

let userTwo = {
    username: 'wonderwoman',
    password: '123123',
    greetUser() {
        console.log('Hello, I am', this.username);
    },
    updateUsername(newUsername) {
        userTwo.username = newUsername;
    }
};

userTwo.greetUser();
userTwo.updateUsername('superman');
userTwo.greetUser();