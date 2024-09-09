import { IBankAccount } from "../../interfaces/bank-account";

export class CheckingAccount implements IBankAccount {

    /**
     * I - Interface Segregation Principle(ISP)
     */
    public amount = 0;
    deposit(amount: number): void {
      this.amount = amount
    }
    withdraw(amount: number): void {
      this.amount = amount
    }
  
    /**
     * Here no need to implement calculateInterest(): number; That is define in another interface.
     */
  
  }