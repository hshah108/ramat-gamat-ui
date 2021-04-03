import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IUser } from './user/user';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private USER_API = "http://localhost:8080/api/v1/users";
  constructor(private httpClient : HttpClient) { }

  public getUsers(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(this.USER_API)
                          .pipe(catchError(this.errorHandler));
  }

  public errorHandler(error : HttpErrorResponse) {
    return throwError(error.message || "Server error");
  }
}
