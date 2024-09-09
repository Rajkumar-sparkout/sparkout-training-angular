
export interface IBankAccount {
    deposit(amount: number): void;
    withdraw(amount: number): void;
    // calculateInterest(): number;
}