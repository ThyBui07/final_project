import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL ='http://elearning0706.cybersoft.edu.vn/api';

  protected currentUserSubject: BehaviorSubject<any>;
  currentUser: Observable<any>;
  // QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom={MaNhom}
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get(uri) {
    return this.http.get(`${this.BASE_URL}/${uri}`).toPromise();
  }

  post(uri, data) {
    return this.http.post(`${this.BASE_URL}/${uri}`, data).toPromise();
    //create new
  }

  put(uri, data) {
    return this.http.put(`${this.BASE_URL}/${uri}`, data).toPromise();
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
