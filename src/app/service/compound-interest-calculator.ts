import { IInterestCalculator } from "../interfaces/interest-calculator-interface";

export class CompoundInterestCalculator implements IInterestCalculator {

  /**
   * D - Dependency Inversing Principle(DIP)
   */
    calculateInterest(rate: number, amount: number): number {
        return (rate * amount) / 100;
    }
}