import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

const base_uri = 'QuanLyKhoaHoc';
@Injectable({
  providedIn: 'root'
})
export class CourseService extends ApiService {

  // constructor() { }
  listAll() {
    return this.get(`${base_uri}/LayDanhSachKhoaHoc?MaNhom=GP02`);
  }

  listByCategories() {
    return this.get(`${base_uri}/LayDanhMucKhoaHoc`);
  }

  courseByCategory(category_code) {
    const uri = `${base_uri}/LayKhoaHocTheoDanhMuc?maDanhMuc=${category_code}&MaNhom=GP02`;
    return this.get(uri);
  }

  courseRegister(data){
    return this.post(`${base_uri}/DangKyKhoaHoc`,data)
  }

  courseById(id){
    return this.get(`${base_uri}/LayThongTinKhoaHoc?maKhoaHoc=${id}`)
  }
}
