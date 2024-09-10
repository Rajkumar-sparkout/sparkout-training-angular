import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, delay, exhaustMap, filter, from, fromEvent, map, mergeMap, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './rxjs-operators.component.html',
  styleUrl: './rxjs-operators.component.css'
})
export class RxjsOperatorsComponent implements OnInit, AfterViewInit{

  constructor(){}

  /**
   * mergeMap, concatMap, switchMap, exhaustMap
   */
  searchForm = new FormGroup({
    search: new FormControl()
  })
  ngOnInit(): void {
    const dummyAPI = (charactor: string)=> {

      if(charactor === 'abc'){
        return of(["AAA", "BBB", "CCC"]).pipe(
          delay(4000)
        );
      }
      else if(charactor === 'abcd'){
        return of(["AAA", "BBB", "CCC", "DDD"]).pipe(
          delay(2000)
        );
      }
      else{
        return of(["Calcifer", "Alchemist", "X-Men", "Link"]).pipe(
          delay(2000)
        );
      }
    }

    this.searchForm.controls['search'].valueChanges.pipe(debounceTime(100), switchMap(x=> 
      dummyAPI(x))).subscribe(x=> {
        console.log(x);
        
      })

  }

  /**
   * of operator
   */
  array1 = [1,2,6,7,8];
  array2 = ['A', 'B', 'C']
  public data: any[] = [];
  // myObservable = of(this.array1, this.array1, 20, 30, 'hello', true);


  /**
   * from operator
   */
  // myObservable = from(this.array1);
  myObservable = from('32145687');
  // promiseData = new Promise((resolve, reject)=> {
  //    resolve([10, 20, 30, 40, 50])
  // });
  // myObservable = from(this.promiseData);

  getAsyncData(){
    this.myObservable.subscribe({
      next: (value: any)=> {
        console.log(value);
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

  /**
   * fromEvent operator
   */
  @ViewChild('createBtn') createBtn!: ElementRef;
  createBtnObs: any;

  //create an observable from this button clicked & convert event into observable
  buttonClicked(){
    let count = 0;
    this.createBtnObs = fromEvent(this.createBtn.nativeElement, 'click').subscribe((data)=> {
      console.log(data);
      this.showItem(++count);
    })
  }

  ngAfterViewInit(): void {
    this.buttonClicked();
  }

  showItem(value: any){
    let div = document.createElement('div');
    div.innerText = 'Item ' + value;
    div.className = 'card'
    document.getElementById('container')?.appendChild(div);
  }


  /**
   * map and filter operator
   */
  public transformData: any[] = [];

  mapObservable = from([2, 4, 6, 8, 10, 12]).pipe(map((value)=> {
    return value * 5
  }), filter((val, i)=> {
    return val % 4 === 0;
  }));;

  // filteredObs = this.mapObservable.pipe(map((value)=> {
  //   return value * 5
  // }), filter((val, i)=> {
  //   return val % 4 === 0;
  // }));

  // filteredObs = this.transformObs.pipe(filter((val, i)=> {
  //   return val % 4 === 0;
  // }))

  getMapAndFilter(){
    this.mapObservable.subscribe({
      next: (value: any)=> {
        this.transformData.push(value);
      },
      error(err){
        alert(err.message);
      }
    })
  }

}
