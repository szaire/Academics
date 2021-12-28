for (var i = 10; i<=99; i++) {
      var a = parseInt(i/10);
      var b = i%10;
      var produto = a*b;
      var soma = a + b;
      if (produto == soma) {
          document.write(i);
      }
  }