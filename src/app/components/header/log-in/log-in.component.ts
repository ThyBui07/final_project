import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../services/authentication.service';
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'log-in-component',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  $scopeisAuthenticated = false
  user = {
    taiKhoan: "khai",
    matKhau: "321321",
  };

  constructor( private router: Router,
    private authenticationService: AuthenticationService, ) { }

  ngOnInit() {
  }

  async login() {
    const res = await this.authenticationService.login(this.user);
      // console.log(res);
      // this.authenticationService.setSession(res);
      if (res.accessToken != null) {
        this.$scopeisAuthenticated = true;
    } else {
        this.$scopeisAuthenticated = false;
    }
    // this.router.navigate(['/user/home']);
      // console.log(res.accessToken);
      //  const httpOptions = {
      //   headers: new HttpHeaders({
      //     'Content-Type':  'application/json',
      //     'Authorization': 'Bearer ' + `${res.accessToken}`
      //   })
      // };
      // console.log(httpOptions);

    // if (typeof res === 'string') {
    //   alert(res);
    // } else if (res.maLoaiNguoiDung === "GV") {
    //   this.router.navigate(['/admin/home']);
    // }
  }
}
