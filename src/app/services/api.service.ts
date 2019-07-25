import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL ='http://elearning0706.cybersoft.edu.vn/api';

  protected currentUserSubject: BehaviorSubject<any>;
  private HttpOptions: any;
  currentUser: Observable<any>;
  User: any;

  constructor(private http: HttpClient) {
    // const currentUser = JSON.parse(localStorage.getItem('currenUser'));

    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();

    this.User = JSON.parse(localStorage.getItem('currentUser'));
    const token = this.User ? this.User.accessToken: '';
    // console.log(token);

    this.HttpOptions = {headers: new HttpHeaders(
      {
        'Content-Type':  'application/json',
        'Authorization': 'Bearer ' + token,
      }
    )}
    console.log(this.HttpOptions);
  }

  get(uri) {
    return this.http.get(`${this.BASE_URL}/${uri}`).toPromise();
  }

  post(uri, data) {
    return this.http.post(`${this.BASE_URL}/${uri}`, data, this.HttpOptions).toPromise();
    //create new
  }

  put(uri, data) {
    return this.http.put(`${this.BASE_URL}/${uri}`, data, this.HttpOptions).toPromise();
    //update all properties
  }

  patch(uri, data) {
    return this.http.patch(`${this.BASE_URL}/${uri}`, data).toPromise();
    //update some properties
  }

  delete(uri) {
    return this.http.delete(`${this.BASE_URL}/${uri}`).toPromise();
  }
}
