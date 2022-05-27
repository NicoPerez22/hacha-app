import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserModel } from '../model/userModel';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  API_URL = environment.API_URL;

  registerUser(user: any): Observable<any>{
    const url = this.API_URL + "auth/register";
    return this.http.
    post<any>(url, user)
  }

}
