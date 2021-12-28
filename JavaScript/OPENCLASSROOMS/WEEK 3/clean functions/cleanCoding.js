class User {
      constructor(name, online, accountType) {
            this.name = name;
            this.online = online;
            this.accountType = accountType;
      }
}

let firstUser = new User('John', true, 'normal');
let secondUser = new User('Maria', true, 'premium');
let thirdUser = new User('Will', true, 'premium');

const sayHelloToUser = (user) => {
      if(user.online) {
            if (user.accountType === 'normal') {
                  console.log(`Hello\^, ${user.name}!`)
            }
            else {
                  console.log(`Welcome back premium user, ${user.name}!`)
            }
      } 
}

sayHelloToUser(firstUser);
sayHelloToUser(secondUser);
sayHelloToUser(thirdUser);