let valores = prompt().split(` `).map(x => parseFloat(x));
let [A, B, C] = valores.sort((a, b) => b - a);

if (A >= B + C) {
      console.log(`NAO FORMA TRIANGULO`);
}
else {
      if (A**2 > B**2 + C**2) {
            console.log(`TRIANGULO OBTUSANGULO`);
      }
}
if (A**2 == B**2 + C**2) {
      console.log(`TRIANGULO RETANGULO`);
}
if (A**2 < B**2 + C**2) {
      console.log(`TRIANGULO ACUTANGULO`);
}
if (A == B && A == C) {
      console.log(`TRIANGULO EQUILATERO`);
}
if ((A == B && B != C) || (A == C && C != B) || (B == C && C != A) || (C == B && B != A)) {
      console.log(`TRIANGULO ISOSCELES`);
}