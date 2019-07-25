import { Component, OnInit } from '@angular/core';
import { UserService} from '../../../services/user.service';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'sign-up-component',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user ={
      taiKhoan: String,
      matKhau: String,
      hoTen: String,
      soDT: String,
      maLoaiNguoiDung: "HV",
      maNhom: String,
      email: String,
  };

  constructor(private userService: UserService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // this.signup();
  }

  async signup() {
    // const res = await this.userService.signup(this.user);
    // console.log(res);
    // if (typeof res === 'string') {
    //   alert(res);
    // } else {
    //   const { taiKhoan, matKhau } = res;
    //   await this.authenticationService.login({ taiKhoan, matKhau });
    // }
  }
}
