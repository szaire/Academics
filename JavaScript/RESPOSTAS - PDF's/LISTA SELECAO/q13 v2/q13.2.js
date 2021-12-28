let s = parseFloat(prompt('Indique seu salário'));
let r;
let sFinal;

if (s > 0) {
     r = s*0.15;
     sFinal = s + r;
     document.write(`Seu novo salário é ${sFinal}`);
     if (s >= 400.01) {
          r = s*0.12;
          sFinal = s + r;
          document.write(`Seu novo salário é ${sFinal}`);
          if (s >= 800.01) {
               r = s*0.10;
               sFinal = s + r;
               document.write(`Seu novo salário é ${sFinal}`);
               if (s >= 1200.01) {
                    r = s*0.07;
                    sFinal = s + r;
                    document.write(`Seu novo salário é ${sFinal}`);
                    if (s >= 2000.01) {
                         r = s*0.04;
                         sFinal = s + r;
                         document.write(`Seu novo salário é ${sFinal}`);
                    }
               }

          }
     }
}
else {
     document.write(`Coloque um valor maior que 0!`);
}