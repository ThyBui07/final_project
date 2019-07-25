import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-log-in-management',
  templateUrl: './log-in-management.component.html',
  styleUrls: ['./log-in-management.component.scss']
})
export class LogInManagementComponent implements OnInit {
  // userLoggedIn = {
  //   taiKhoan: "khai",
  // }
  user = [{
    taiKhoan: String,
    matKhau: String,
    hoTen: String,
    soDT: String,
    maLoaiNguoiDung: String,
    maNhom: String,
    email: String,
}];

  newUser = {
    taiKhoan: '',
    matKhau: '',
    hoTen: '',
    soDT: '',
    maLoaiNguoiDung: '',
    maNhom: 'GP01',
    email: '',
  };

  typeofUsers= [
    {
      "name": "Giao Vien",
      "value": 'GV'
    },
    {
      "name":"Hoc Vien",
      "value": 'HV'
    }
  ]

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.showInfo();
    // this.changeInfo();
  }

  async showInfo() {
    await this.userService.viewInfo(JSON.parse(localStorage.getItem('currentUser'))).then((res) =>{
      // console.log(res);
      this.user= res;
    });
  }

  async changeInfo() {
    await this.userService.changeInfo(this.user);
    console.log(this.user);
  }

  async addUser(){
    // const userObject = this.newUser[0];
    // console.log(userObject);
    const res = await this.userService.signup(this.newUser);
    console.log(res);

  }

}
