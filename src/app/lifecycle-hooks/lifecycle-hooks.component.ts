import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-lifecycle-hooks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lifecycle-hooks.component.html',
  styleUrl: './lifecycle-hooks.component.css'
})
export class LifecycleHooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked, OnDestroy{

  constructor(){
    // console.log("Life cycle component is called");
  }

  @Input() message!: string;
  // @Input() message!: string[];
  @ViewChild('temp') tempPara!: ElementRef
  @ContentChild('para') paraContent!: ElementRef

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("ngOnChanges Hook called");
    // console.log(changes);
  }

  ngOnInit(): void {
    // console.log("ngOnInit Hook called");
    // console.log(this.tempPara.nativeElement.innerHTML);  
  }

  ngDoCheck(): void {
    // console.log("DoCheck Hook called");
    // console.log("In ngDoCheck" + this.paraContent);
  }

  ngAfterContentInit(): void {
    // console.log("AfterContentInit Hook called");
    // console.log("In ngAfterContentInit" + this.paraContent.nativeElement);
  }

  ngAfterContentChecked(): void {
    // console.log("ngAfterContentChecked Hook called");
    // console.log("In ngAfterContentInit" + this.paraContent.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Hook called");
    console.log("In ngAfterViewInit" + this.tempPara);
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked Hook called");
    console.log(this.tempPara.nativeElement.textContent);
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy Hook called");
  }

}
