let triangulo = prompt().split(" ").map(x => parseFloat(x));
let [A, B, C] = triangulo.sort((a, b) => b - a);

if (C > A - B) {
      let perimetro = A + B + C;
      console.log(`Perimetro = ${perimetro.toFixed(1)}`);
}
else {
      let areaTrapezio = ((A + B) * C) / 2;
      console.log(`Area = ${areaTrapezio.toFixed(1)}`);
}