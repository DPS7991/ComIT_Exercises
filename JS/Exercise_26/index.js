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
    let a = 1;
    let b = 0;
    let temp;

    while (maxLimit >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        maxLimit--;
    }
    console.log(b);
};

fibonacci(10);

let showName = () => {
    console.log('==========');
    console.log('= Daniel =');
    console.log('==========');
};

showName();
showName();