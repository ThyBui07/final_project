import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';
// import { AuthenticationService } from '../../services/authentication.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-show-courses',
  templateUrl: './show-courses.component.html',
  styleUrls: ['./show-courses.component.scss']
})
export class ShowCoursesComponent implements OnInit {

  courses: any = [];
  code: any;
  codeIsValid: boolean = false;


  constructor(private courseService: CourseService, private activatedRoute: ActivatedRoute) {
     this.code = this.activatedRoute.snapshot.paramMap.get('category');
     if (this.code == 'TuDuy') {
      this.codeIsValid = !this.codeIsValid;
      }
   }

  ngOnInit() {
    this.getCourseByCategory();
  }

  async getCourseByCategory() {
    // const code = this.activatedRoute.snapshot.paramMap.get('category');
    // console.log(code);
    this.courses = await this.courseService.courseByCategory(this.code);
    console.log(this.courses);
  }

}
