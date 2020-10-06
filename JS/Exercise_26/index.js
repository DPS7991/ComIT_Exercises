function showEvenNums() {
    for (let i = 0; i < 101; i++) {
        if (i % 2 == 0) {
            console.log(i);
        };  
    }
}

showEvenNums();

function showUser() {
    console.log(
        'Name: Daniel Peter-Salawu\nAge: 100\nAddress: 888 Newday Avenue\nPostalcode: R3T 6M3\nMarried: false'
    );
}

showUser();

let evenNumbers = () => {
    for (let i = 0; i < 101; i++) {
        if (i % 2 == 0) {
            console.log(i);
        };
    }
};

evenNumbers();
evenNumbers();
evenNumbers();
evenNumbers();
evenNumbers();

let fibonacci = (maxLimit) => {
    if (maxLimit == 1) {
        return 0;
    } else if (maxLimit == 2) {
        return 1;
    } else if ((isNaN(maxLimit)) || (maxLimit <= 0)) {
        console.error("Invalid Number");
        return -1;
    };
    return fibonacci(maxLimit - 1) + fibonacci(maxLimit - 2);
};

let factorial = (num) => {
    if ((num == 0) || (num == 1)) {
        return 1;
    } else if ((isNaN(num)) || (num <= 0)) {
        console.error("Invalid Number");
        return -1;
    };
    return (num * factorial(num - 1));
};

console.log(factorial(4));

console.log(fibonacci(10));

let showName = () => {
    console.log('==========');
    console.log('= Daniel =');
    console.log('==========');
};

showName();
showName();