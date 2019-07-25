import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

const BASE_URI = 'QuanLyNguoiDung';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {

  signup(user) {
    return this.post(`${BASE_URI}/ThemNguoiDung`, user);
  }

  viewInfo(user) {
    return this.post(`${BASE_URI}/ThongTinTaiKhoan`, user)
  }

  changeInfo(user) {
    return this.put(`${BASE_URI}/CapNhatThongTinNguoiDung`, user)
  }

  addUser(user) {
    return this.post(`${BASE_URI}/ThemNguoiDung`, user)
  }
}
