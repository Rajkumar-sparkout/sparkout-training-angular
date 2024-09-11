import { CommonModule, DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { concatMap, debounce, debounceTime, delay, exhaustMap, filter, first, from, fromEvent, interval, last, map, mergeMap, Observable, of, reduce, retry, retryWhen, scan, single, skip, skipLast, skipUntil, skipWhile, startWith, switchMap, take, takeLast, takeUntil, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './rxjs-operators.component.html',
  styleUrl: './rxjs-operators.component.css'
})
export class RxjsOperatorsComponent implements OnInit, AfterViewInit{

  constructor(){
    /**
     * debounce & debounceTime
     */
    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(debounceTime(1000));
    // const result = clicks.pipe(debounce(()=> interval(1000)));
    // result.subscribe(n => console.log(n))
  }

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

  /**
   * take takeLast takeWhile operator
   */
    public takeData: any[] = [];
    public numObs$ = of(1, 2, 3, 1, 3, 2, 2, 1, 1);

    onTake(){
      // this.numObs$.pipe(take(3)).subscribe((res: any)=> {
      // this.numObs$.pipe(takeLast(3)).subscribe((res: any)=> {
      this.numObs$.pipe(takeWhile(n => n < 3, true)).subscribe((res: any)=> {
        this.takeData.push(res);
      })
    }

  /**
   * first last and single operator
   */
  public firstLastData: any[] = [];
  public firstObs$ = of(1, 2, 3, 4, 5);

  onFirstLast(){
    // this.firstObs$.pipe(first()).subscribe((res: any)=> {
    // this.firstObs$.pipe(first(val=> val > 3)).subscribe((res: any)=> {
    // this.firstObs$.pipe(last()).subscribe((res: any)=> {
    // this.firstObs$.pipe(last(val=> val < 3)).subscribe((res: any)=> {
    this.firstObs$.pipe(single(val=> val == 3)).subscribe((res: any)=> {
      this.firstLastData.push(res);
    })
  }

  /**
   * skip skipLast skipWhile operator
   */
    public skipData: any[] = [];
    public skipObs$ = of(1, 2, 3, 4, 5, 6, 7, 8);
    public intObs$ = interval((1000));
    // public clicks = fromEvent(document, 'click');

    onSkip(){
      // this.skipObs$.pipe(skip(2)).subscribe((res: any)=> {
      // this.skipObs$.pipe(skipLast(2)).subscribe((res: any)=> {
      this.skipObs$.pipe(skipWhile(val=> val < 4)).subscribe((res: any)=> {
      // this.intObs$.pipe(skipUntil(this.clicks)).subscribe((res: any)=> {
        this.skipData.push(res);
      })
    }

  /**
   * Transformation scan operator
   * Here print fibonacci series using scan
   */
    public scanData: any[] = [];
    public scanObs$ = of(1, 2, 3);
    public fibonacciObs$ = of(1, 2, 3, 4, 5, 6);

    
    onScan(){
      // this.scanObs$.pipe(scan((acc, curr)=> acc + curr, 0)).subscribe((res: any)=> {
      //   this.scanData.push(res);
      // })

      let firstFibonacci = [0, 1]
      this.fibonacciObs$.pipe(scan(([a, b])=> [b, a + b], firstFibonacci), map(([a, b])=> b), startWith(...firstFibonacci)).subscribe((res: any)=> {
        this.scanData.push(res);
      })
    }

  /**
   * Transformation reduce operator
   * reduce operator gives final result.
   */
    public reduceData: any[] = [];
    public reduceObs$ = of(1, 2, 3, 4, 5);  
      
    onReduce(){
        this.reduceObs$.pipe(reduce((acc, val)=>  acc + val, 0)).subscribe((res: any)=> {
        this.reduceData.push(res);
      })
    }

  /**
   * delay operator
   */
    public delayData: any[] = [];
    public delayObs$ = of(1, 2 , 3, 4);
    onDelay(){
      this.delayObs$.pipe(concatMap((value)=> of(value).pipe(delay(1000)))).subscribe((res: any)=> {
      this.delayData.push(res);
    })
  }

  /**
   * retry operator
   */
  retryObs$ = new Observable((obs)=> {
    obs.next(1);
    obs.next(2);
    obs.error('error');
  })

  onRetry(){
    this.retryObs$.pipe(retry(1)).subscribe((data)=> {
      console.log(data);
    })
  }

  /**
   * retryWhen operator
   */
  public userData = {
    responseStatus: '500',
    users: [
      { id: 1, name: 'Vijay' },
      { id: 2, name: 'Vijay2' }
    ]
  }

  retryWhenObs$ = of(...this.userData.users);

  onRetryWhen(){
    this.retryWhenObs$.pipe(delay(1000),
      tap((user)=> {
      if(!this.userData.responseStatus.startsWith('2')){
        // throw 'error'
        throw this.userData.responseStatus;
      }
    }),
    retryWhen((error)=> {
      return error.pipe(
        tap((status)=> {
          if(!status.startsWith('5')){
            throw 'error'
          }
          console.log('retrying'); 
        })
      )
    })
    ).subscribe({
      next: (data)=> {
        console.log(data);
      },
      error: (error)=> {
        console.log(error);
      }
    })

    setTimeout(()=> {
      this.userData.responseStatus = '200'
    }, 2000)
  }

}
