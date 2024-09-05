import { Component, ContentChild, ElementRef } from '@angular/core';
import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-child-new',
  standalone: true,
  imports: [],
  templateUrl: './child-new.component.html',
  styleUrl: './child-new.component.css'
})
export class ChildNewComponent {

  /**
   * Content child decorator is used to access the parent component DOM element
   */
  @ContentChild('para') paragraphEl!: ElementRef;

  /**
   * This is used to access the parent component typescript value
   */
  @ContentChild(DashboardComponent) dashboardEl!: DashboardComponent;

  stylePara(){
    console.log(this.paragraphEl.nativeElement);
    console.log(this.dashboardEl.name);
  }

}
