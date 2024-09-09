import { Component } from '@angular/core';
import { IBankAccount } from '../interfaces/bank-account';
import { InterestCalculatorService } from '../services/interest-calculator.service';
import { CommonModule } from '@angular/common';
import { BankMap, EntityMap } from './constants/constants';
import { BankAccount } from './class/bank-account';

@Component({
  selector: 'app-solid-design',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solid-design.component.html',
  styleUrl: './solid-design.component.css'
})
export class SolidDesignComponent {

  /**
   * L - Liskov Substitution Principle(LSP)
   */
  bankTypes = BankMap;

  getInterest(bankType: string){
    const bankAccount: BankAccount = EntityMap.get(bankType)!;
    if(bankAccount){
      const interest = bankAccount.calculateInterest();
      console.log(interest);
      
    }
  }

}
