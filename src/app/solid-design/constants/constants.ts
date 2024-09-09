import { CompoundInterestCalculator } from "../../service/compound-interest-calculator";
import { InterestCalculator } from "../../service/interest-calculator";
import { BankAccount } from "../class/bank-account";
import { DepositAccount } from "../class/deposit-account";

export const BankMap = ['Savings', 'Deposit'];

export const EntityMap = new Map<string, BankAccount>([

    /**
     * L - Liskov Substitution Principle(LSP)  &&  D - Dependency Inversing Principle(DIP)
     */
    ['Savings', new BankAccount(new InterestCalculator())],
    ['Deposit', new DepositAccount(new CompoundInterestCalculator())],
])