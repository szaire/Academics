class BePolite {
      static sayHello() {
            console.log('Hello!')
      }
      static sayHelloTo(name) {
            console.log(`Hello, ${name}!`);
      }
      static add(firstNumber, secondNumber) {
            return firstNumber + secondNumber;
      }
}

BePolite.sayHello();
BePolite.sayHelloTo('Will');
console.log(BePolite.add(2, 3))