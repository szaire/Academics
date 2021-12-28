ehPar = n => {
      if (n % 2 == 0) {
            return true;
      }
      else {
            return false;
      }
}

for (let i = 1; i <= 100; i++) {
      if(ehPar(i)) {
            console.log(i);
      }
}