let valor = parseFloat(prompt());
let sacaCédula5 = parseInt(valor / 20);
valor -= sacaCédula5*20;
let sacaCédula4 = parseInt(valor / 10);
valor -= sacaCédula4*10;
let sacaCédula3 = parseInt(valor / 5);
valor -= sacaCédula3*5;
let sacaCédula2 = parseInt(valor / 2);
valor -= sacaCédula2*2;
let sacaCédula1 = parseInt(valor / 1);
document.write(
     // comentar com o rommel sobre as `Text ${variable} text...`
     `
     Quantidade de cada cédula:<br>
     ${sacaCédula5} de 20;<br>
     ${sacaCédula4} de 10;<br>
     ${sacaCédula3} de 5;<br>
     ${sacaCédula2} de 2;<br>
     ${sacaCédula1} de 1;<br>
     `
);