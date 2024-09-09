import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
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
   * Content child decorator is used to access the parent component DOM element. The content child will always return a single 
   * reference(first matching template ref var element) based on a given selector.
   */
  @ContentChild('para') paragraphEl!: ElementRef;

  /**
   * This is used to access the parent component typescript value
   */
  @ContentChild(DashboardComponent) dashboardEl!: DashboardComponent;

  /**
   * The content children will always return a all the matching element from projected with a given selector(matching all template ref var element).
   */
  @ContentChildren('para') paraElements!: QueryList<ElementRef>
  @ContentChildren(DashboardComponent) dashboardElements!: QueryList<DashboardComponent>

  stylePara(){
    // console.log(this.paragraphEl.nativeElement);
    // console.log(this.dashboardEl.name);

    // this.paraElements.forEach((el)=> {console.log(el.nativeElement)}); 
    this.dashboardElements.forEach((el)=> {console.log(el)}); 
  }

}
