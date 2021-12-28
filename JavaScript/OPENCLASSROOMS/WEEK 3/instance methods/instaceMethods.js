class BankAccount {
      constructor(owner, balance) {
            this.owner = owner;
            this.balance = balance;
      }
      showBalance() {
            console.log(`Balance: ${this.balance} EUR`);
      }
      deposit(amount) {
            console.log(`Depositing ${amount} EUR...`);
            this.balance += amount;
            this.balance;
      }
      withdraw(amount) {
            if (amount > this.balance) {
                  console.log('Withdrawal denied!')
            }
            else {
                  console.log(`Withdrawing ${amount} EUR. Please wait a bit...`);
                  this.balance -= amount;
                  this.showBalance();
            }
      }
}

const newAccount = new BankAccount('Will Alexander', 500);

newAccount.showBalance();
newAccount.deposit(50);
newAccount.withdraw(600);