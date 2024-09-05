import { CommonModule } from '@angular/common';
import { Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-lifecycle-hooks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css'
})
export class LifecycleHooksComponent implements OnInit, OnChanges, DoCheck{

  constructor(){
    console.log("Life cycle component is called");
  }

  @Input() message!: string;
  // @Input() message!: string[];
  @ViewChild('temp') tempPara!: ElementRef

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges Hook called");
    // console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit Hook called");
    // console.log(this.tempPara.nativeElement.innerHTML);  
  }

  ngDoCheck(): void {
    console.log("DoCheck Hook called");
  }

}
