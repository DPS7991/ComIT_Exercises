let result = 0;

for (let i = 0; i < 1000; i++) {
    result += i
    if (result > 400) {
        alert(`i: ${i}, and result: ${result}`);
        break;
    }  
}

for (let a = 0; a < 11; a++) {
    console.log('*'.repeat(a)); 
}

let b = 0;

do {
    console.log('*'.repeat(b));
    b++;
} while (b < 11);

let c = 0;

while (c < 11) {
    console.log('*'.repeat(c));
    c++;
}

for (let d = 100; d >= 0; d--) {
    console.log('*'.repeat(d)); 
}

let e = 100;

do {
    console.log('*'.repeat(e));
    e--;
} while (e >= 0);

let f = 100;

while (f >= 0) {
    console.log('*'.repeat(f));
    f--;
}

for (let g = 1; g < 100; g++) {
    if (g % 2 == 0) {
        console.log('*'.repeat(g));
    }    
}

let h = 1;

do {
    if (h % 2 == 0) {
        console.log('*'.repeat(h));
    }
    h++;  
} while (h < 100);

let i = 1;

while (i < 100) {
    if (i % 2 == 0) {
        console.log('*'.repeat(i));
    }
    i++; 
}