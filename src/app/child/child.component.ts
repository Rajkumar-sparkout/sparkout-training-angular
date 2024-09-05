import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() data!: string;

  datafromChild:string = "Message from child to parent";
  @Output() dataEvent = new EventEmitter<string>();
  constructor() { }
  emitData(){
    this.dataEvent.emit(this.datafromChild);
  }

  viewChildData: string = "Message from child to parent using viewchild decorator"
}
