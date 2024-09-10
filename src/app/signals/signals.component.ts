import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    
  }

  counter = signal(0);
  message = signal<string[]>([]);

  increment(){
    // this.counter.set(this.counter() + 1);
    this.counter.update((prevValue)=> prevValue + 1);
    // this.message.update((prevMessage)=> [...prevMessage, 'CURRENT OF COUNTER IS:' + this.counter()])
    // this.message.mutate((prevMessage:any)=> prevMessage.push('CURRENT OF COUNTER IS:' + this.counter()))
  }

  decrement(){
    // this.counter.set(this.counter() - 1);
    this.counter.update((prevValue)=> prevValue - 1);
    // this.message.mutate((prevMessage:any)=> prevMessage.pop())  
  }
}
