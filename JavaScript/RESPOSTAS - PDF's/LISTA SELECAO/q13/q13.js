let s = parseFloat(prompt('Indique seu salário'));
let r;
let sFinal;

if (s >= 0 && s <= 400) {
     r = s*0.15;
     sFinal = s + r
     document.write(`Seu novo salário é ${sFinal}`);
}
else {
     if (s >= 400.01 && s <= 800) {
          r = s*0.12;
          sFinal = s + r
          document.write(`Seu novo salário é ${sFinal}`);
     }
     else {
          if (s >= 800.01 && s <= 1200) {
               r = s*0.10;
               sFinal = s + r
               document.write(`Seu novo salário é ${sFinal}`);
          }
          else {
               if (s >= 1200.01 && s <= 2000) {
                    r = s*0.07;
                    sFinal = s + r
                    document.write(`Seu novo salário é ${sFinal}`);
               }
               else {
                         r = s*0.04;
                         sFinal = s + r
                         document.write(`Seu novo salário é ${sFinal}`);
                    }
               }
          }
     }