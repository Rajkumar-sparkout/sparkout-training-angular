import { IBankAccount } from "../../interfaces/bank-account";
import { IInterestCalculator } from "../../interfaces/interest-calculator-interface";
import { InterestCalculator } from "../../service/interest-calculator";

export class BankAccount implements IBankAccount, IInterestCalculator {

    /**
     * D - Dependency Inversing Principle(DIP)
     * @param interestCalculator 
     */
    constructor(interestCalculator: IInterestCalculator){
      this.interestCalculator = interestCalculator
    }
    // public interestCalculator: InterestCalculator = new InterestCalculator();
    interestCalculator: InterestCalculator;
  
    /**
     * S - Single Responsibility Principle(SRP)
     */
    public amount = 1000;
    deposit(amount: number): void {
      this.amount += amount;
    }

    withdraw(amount: number): void {
      this.amount -= amount;
    }

    calculateInterest(): number {
      // return (5 * this.amount) / 100;
      return this.interestCalculator.calculateInterest(5, this.amount);
    }
  
  }