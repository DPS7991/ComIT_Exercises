let result = 0;

for (let i = 0; i < 1000; i++) {
    result += i
    if (result > 400) {
        alert(`i: ${i}, and result: ${result}`);
        break;
    }  
}

for (let a = 0; a < 11; a++) {
    console.log(a); 
}

let b = 0;

do {
    console.log(b);
    b++;
} while (b < 11);

let c = 0;

while (c < 11) {
    console.log(c);
    c++;
}

for (let d = 100; d >= 0; d--) {
    console.log(d); 
}

let e = 100;

do {
    console.log(e);
    e--;
} while (e >= 0);

let f = 100;

while (f >= 0) {
    console.log(f);
    f--;
}

for (let g = 1; g < 100; g++) {
    if (g % 2 == 0) {
        console.log(g);
    }    
}

let h = 1;

do {
    if (h % 2 == 0) {
        console.log(h);
    }
    h++;  
} while (h < 100);

let i = 1;

while (i < 100) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++; 
}

let star = '';

for (let j = 0; j < 14; j++) {
    console.log(star);
    star += '*';
}

let star2 = '';
let k = 0;

do {
    console.log(star2);
    k++;
    star2 += '*';
} while (k < 14);

let star3 = '';
let l = 0;

while (l < 14) {
    console.log(star3);
    l++;
    star3 += '*';
}