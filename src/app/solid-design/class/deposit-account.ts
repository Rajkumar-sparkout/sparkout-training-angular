import { BankAccount } from "./bank-account";

export class DepositAccount extends BankAccount {

    /**
     * O - Open/Close Principle(OCP)
     * @param amount 
     */
    override withdraw(amount: number): void {
      this.#checkForFine();
      this.amount -= amount;
    }
  
    override calculateInterest(): number {
      return this.interestCalculator.calculateInterest(8, this.amount)
    }
  
    #checkForFine(){
      //some logic
    }
  }