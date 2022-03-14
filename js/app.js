class bankAccount {
    constructor(ownerName, balance, acctNum) {
        this.ownerName = ownerName;
        this.balance = balance;
        this.acctNum = acctNum;
    }
    deposit(amount) {
        console.log(this.balance);
    }
    withdraw(amount) {
        console.log(this.balance);
    }
}

class checkingAccount extends bankAccount {
    constructor(ownerName, balance, acctNum, overdraftEnabled) {
        super(ownerName, balance, acctNum);
        this.overdraftEnabled = overdraftEnabled;
    }
    withdraw (amount) {
        this.balance -= amount;
        console.log('Withdrawal successful. Your new balance is ' + this.balance);
    }
}

class savingsAccount extends bankAccount {
    constructor(ownerName, balance, acctNum, overdraftEnabled) {
        super(ownerName, balance, acctNum);
        this.overdraftEnabled = overdraftEnabled;
    }
    withdraw (amount) {
        if (amount > this.balance) {
            this.balance -= amount;
            console.log('Withdrawal successful. Your new balance is ' + this.balance);
        } else {
            console.log('Insufficient funds');
        }
    }   
}

const bank = new bankAccount('John Smith', 1000, 10000);
console.log(bank);
const checking = new checkingAccount('Ben Orloff', 500, 1234, true);
console.log(checking);
const saving = new savingsAccount('Benjamin Orloff', 1000, 45678, false);
console.log(saving)
savingsAccount.withdraw(500);
