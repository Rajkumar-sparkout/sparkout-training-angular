import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  data: string = "Message from parent";
  dataFromChild!: String;

  receiveData(event: string){
    this.dataFromChild = event
  }

  viewChildDataFromChild!: string;
  @ViewChild(ChildComponent,{static:false}) child!: any;
  // ngAfterViewInit(){
  //   this.viewChildDataFromChild = this.child.viewChildData;
  // }

}
