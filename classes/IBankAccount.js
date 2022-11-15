const uuid = require('uuid');

module.exports = class IBankAccount {
  constructor(title, balance, maxWithdrawal, transactions, id) {
    if (this.constructor === IBankAccount) {
      throw new Error("Can't instantiate abstract class!");
    }
    this.id = id ?? uuid.v4();
    this.title = title;
    this.balance = balance;
    this.maxWithdrawal = maxWithdrawal;
    this.transactions = transactions;
  }
  deposit(amount) {}
  withdraw(amount) {}
  send(amount, to) {}
  receive(amount, from) {}
  getBalance() {}
}