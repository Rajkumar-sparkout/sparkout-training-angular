import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    
  }

  public data: any[] = [];

  /**
   * Create an observable
   * observable 
   */
  myObservable = new Observable((observer)=> {

    /**
     * single data
     */
    // observer.next([1, 2, 3, 4, 5]);

    /**
     * stream of data
     */
    setTimeout(()=> {observer.next(1)},1000);
    setTimeout(()=> {observer.next(2)},2000);
    setTimeout(()=> {observer.next(3)},3000);
    // setTimeout(()=> {observer.error(new Error('something went wrong, Please try again later!'))},3000);
    setTimeout(()=> {observer.next(4)},4000);
    setTimeout(()=> {observer.next(5)},5000);
    setTimeout(()=> {observer.complete()},3000);
  });

  getAsyncData(){
    /**
     * observer
     */
    // this.myObservable.subscribe((val: any)=> {
    //   this.data.push(val);
    // },(err)=> {
    //   alert(err.message)
    // }, ()=> {
    //   alert('All the data is streamed!')
    // })

    this.myObservable.subscribe({
      next: (value: any)=> {
        this.data.push(value);
      },
      error(err){
        alert(err.message);
      },
      complete(){
        alert('All the data is streamed!')
      }
    })
  }

}
