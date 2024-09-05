import { Component, OnInit } from '@angular/core';
import { filter, from, map } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  standalone: true,
  imports: [],
  templateUrl: './rxjs-operators.component.html',
  styleUrl: './rxjs-operators.component.css'
})
export class RxjsOperatorsComponent implements OnInit{

  constructor(){}

  array1 = [1,2,6,7,8];

  myObservable = from(this.array1).pipe(map((value)=> {
    return value*5
  }), filter((val)=> {
    return val >= 30
  }));;

  // transformObs = this.myObservable.pipe(map((value)=> {
  //   return value*5
  // }), filter((val)=> {
  //   return val >= 30
  // }));

  // filteredObs = this.transformObs.pipe(filter((value)=> {
  //   return value >= 30;
  // }));

  ngOnInit(): void {
    // if map give transformObs
    // if filter give filteredObs
    this.myObservable.subscribe((val)=> {   
      console.log(val);
    }, error=> {
      console.log(error);
    });
  }

}
