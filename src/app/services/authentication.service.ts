import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
// import { HttpHeaders } from '@angular/common/http';

const BASE_URI = 'QuanLyNguoiDung';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends ApiService {

  // public httpOptions = {
  //   headers: new HttpHeaders(
  //     {
  //       'Content-Type':  'application/json',
  //        SON.parse(localStorage.getItem('id_token'))
  //     })
  // }


  public get currentUserValue() {
    return this.currentUserSubject.value;
  }
  // constructor() { }
  login(user) {
    const { taiKhoan, matKhau} = user;
    return this.post(`${BASE_URI}/DangNhap`, { taiKhoan, matKhau })
      .then((user) => {
        console.log(user);
        if (typeof user === 'object') {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }
        return user;
      });

  }

  // setSession(authResult) {
  //   localStorage.setItem('id_token', authResult.token);
  // }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('id_token');
    this.currentUserSubject.next(null);
  }
}
