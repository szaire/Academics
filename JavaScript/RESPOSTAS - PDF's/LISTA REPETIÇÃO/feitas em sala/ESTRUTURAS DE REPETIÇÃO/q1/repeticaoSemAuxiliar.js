/*
a) Leia A;
b) Leia B;
c) B recebe A - B;
d) A recebe A - B;
e) B recebe A + B;
f) Mostre A;
g) Mostre B;
*/

let a = 10;
let b = 2;
b = a - b;
a = a - b;
b = a + b;
document.write(a + '<br>');
document.write(b);