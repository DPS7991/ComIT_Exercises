let result = 0;

for (let i = 0; i < 1000; i++) {
    result += i
    if (result > 400) {
        alert(`i: ${i}, and result: ${result}`);
        break;
    }  
}

for (let j = 0; j < 11; j++) {
    console.log(j); 
}

let k = 100;

do {
    console.log(k);
    k--;
} while (k >= 0);

let l = 1

while (l < 100) {
    if (l % 2 == 0) {
        console.log(l);
    }
    l++;
}