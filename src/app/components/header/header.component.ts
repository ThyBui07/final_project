import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';
import { Router} from '@angular/router';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: any [];

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(user => this.currentUser = user);
    // console.log(this.currentUser);
   }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }

}
