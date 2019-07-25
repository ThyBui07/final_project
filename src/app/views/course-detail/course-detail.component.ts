import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute } from '@angular/router';
import { userInfo } from 'os';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
  authenticated: boolean = false;
  courseInfo: any =[];
  user: any;
  maKhoaHoc: String;

  constructor(private courseService: CourseService, private activatedRoute: ActivatedRoute) {
    //check token
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.user);
    if (this.user && this.user.accessToken) {
      // console.log(user.accessToken);
      this.authenticated = true;
    }
   }

  ngOnInit() {
    this.maKhoaHoc =this.activatedRoute.snapshot.paramMap.get('id');
    this.courseService.courseById(this.maKhoaHoc).then( (res) =>{
      // console.log(res);
      this.courseInfo.push(res);
      console.log(this.courseInfo);
    })
    this.registerCourse();
  }

  async registerCourse() {
    await this.courseService.courseRegister({maKhoaHoc: this.maKhoaHoc, taiKhoan: this.user.taiKhoan });

  }
}
