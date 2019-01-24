import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/IUser';

const authentication = 'api/login';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  login(ImageUrl: string): Observable<IUser> {
    return this.http.post<IUser>(authentication, ImageUrl);
     }
}
