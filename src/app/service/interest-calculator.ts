import { IInterestCalculator } from "../interfaces/interest-calculator-interface";

export class InterestCalculator implements IInterestCalculator {

  /**
   * S - Single Responsibility Principle(SRP)
   */
    calculateInterest(rate: number, amount: number): number {
        return (rate * amount) / 100;
    }
}