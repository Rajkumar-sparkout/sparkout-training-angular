import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-error-handler',
  standalone: true,
  imports: [],
  templateUrl: './error-handler.component.html',
  styleUrl: './error-handler.component.css'
})
export class ErrorHandlerComponent implements OnInit {

  title = 'Error handler';

  constructor(private titleService: Title){}

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }

  /**
   * Default Error Handling in Angular
   */
  titles: string = 'Global Error Handler in Angular' ;
  public b!: any;
 
  throwError1() {
    var a = this.b;  
  }

  throwError2() {
    try {
      var a = this.b;  
    } catch (error) {
       //here you can handle the error
       //
    }
  }

  // throwError2() {
  //   try {
  //     var a= b;  
  //   } catch (error) {
  //     throw error;   
  //   }
  // }

  /**
   * Global Error Handler
   */

}
