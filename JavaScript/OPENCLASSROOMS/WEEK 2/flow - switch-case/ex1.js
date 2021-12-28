class User {
      constructor(name, age, accountLevel) {
            this.name = name;
            this.age = age;
            this.accountLevel = accountLevel;
      }
}

let firstUser = new User('John', 33, 'normal');
let secondUser = new User('Maria', 21, 'premium');
let thirdUser = new User('Audrey', 27, 'mega-premium');

let users = [firstUser, secondUser, thirdUser];

for (let i = 0; i < users.length; i++) {
      switch (users[i].accountLevel) {
            case 'normal':
                  document.write(`${users[i].name} has a normal account!<br>`);
                  break;
            case 'premium':
                  document.write(`${users[i].name} has a premium account!<br>`);
                  break;
            case 'mega-premium':
                  document.write(`${users[i].name} has a mega-premium account!<br>`);
                  break;
            default:
                  document.write(`Unknown account type!<br>`);
            
      }
}