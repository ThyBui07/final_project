import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'log-in-component',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  user = {
    username: "khai",
    password: "321321",
  };

  constructor( private router: Router,
    private authenticationService: AuthenticationService, ) { }

  ngOnInit() {
  }

  async login() {
    const res = await this.authenticationService.login(this.user);

    // if (typeof res === 'string') {
    //   alert(res);
    // } else if (res.maLoaiNguoiDung === "GV") {
    //   this.router.navigate(['/admin/home']);
    // }
  }
}
