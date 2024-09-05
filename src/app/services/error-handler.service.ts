import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(
    private injector: Injector,
    private http: HttpClient,
  ) { }

  public baseURL = 'https://localhost: 4200';

  handleError(error: any) {
    // console.error('An error occurred:', error.message);
    // console.error(error);

    let router = this.injector.get(Router);
    console.log('URL: ' + router.url);
    console.error('An error occurred:', error);
    router.navigate(['/error-handling']);
 }

 /**
  * Catch Errors in Service
  * @param userName 
  * @returns 
  */
 getRepos(userName: string): Observable<any> {
  return this.http.get<any>(this.baseURL + 'usersY/' + userName + '/repos')
    .pipe(
      catchError((err) => {
        console.log('error caught in service')
        console.error(err);

        //Handle the error here

        return throwError(err);    //Rethrow it back to component
      })
    )
}
}
