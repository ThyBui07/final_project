import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'breadcrumb-user-component',
  templateUrl: './breadcrumb-user.component.html',
  styleUrls: ['./breadcrumb-user.component.scss']
})
export class BreadcrumbUserComponent implements OnInit {
  username: String;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    const currentUser =JSON.parse(localStorage.getItem('currentUser'));
    // console.log(currentUser);
    this.username = currentUser.hoTen;
    // console.log(this.username);
  }

}
