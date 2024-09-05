import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { RouterComponent } from '../router/router.component';
import { CommonModule } from '@angular/common';
import { AppHoverDirective } from '../directive/app-hover.directive';
import { LifecycleHooksComponent } from '../lifecycle-hooks/lifecycle-hooks.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ChangeEventComponent } from '../change-event/change-event.component';
import { DirectivesComponent } from '../directives/directives.component';

@Component({
  selector: 'app-advanced-components',
  standalone: true,
  imports: [RouterComponent, CommonModule, AppHoverDirective, LifecycleHooksComponent],
  templateUrl: './advanced-components.component.html',
  styleUrl: './advanced-components.component.css'
})
export class AdvancedComponentsComponent implements OnInit{

  constructor(){
    console.log("Parent advanced component is called");
  }

  ngOnInit(): void {
    
  } 

  /**
   * Template reference variable
   * @param inputEl 
   */
  public searchText: string = '';

  updatesearchtext(inputEl: HTMLInputElement){
    this.searchText = inputEl.value; 
  }
 
  /**
   * ng-container
   */
  public toggle: boolean = true;
  onToggele(){
    this.toggle = !this.toggle
  }
  
  names = ["Vijay", "Johsep"]

  /**
   * View child decorator
   * @param inputEl 
   */
    public searchTxt: string = '';
    @ViewChild('searchIn') searchInputEl!: ElementRef

    updatesearchtxt(){
      this.searchTxt = this.searchInputEl.nativeElement.value; 
    }

  /**
   * View children decorator
   * @param inputEl 
   */
    public fullName: string = '';
    @ViewChildren('inputEl') inputElements!: QueryList<ElementRef>
    
    show(){
      let name = ''
      this.inputElements.forEach((el)=> {
        // console.log(el.nativeElement.value);
        name += el.nativeElement.value + ' '
      });
      this.fullName = name.trim()
    }

    /**
     * lifecycle hooks
     */
    public inputVal: string = '';
    // public inputVal: string[] = ["Hello", "Hi there"];

    onButtonClicked(inputEl: HTMLInputElement){
      this.inputVal = inputEl.value;
      // this.inputVal.push(inputEl.value);
    }

}
