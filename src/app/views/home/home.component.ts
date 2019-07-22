import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

courses: any = [];
courseByCategories: any = [];
courseByCategory: Object =null;

slides = [
  {name: 'Williams Belly', job: 'Accounts'},
  {name: 'Williams Belly2', job: 'Accounts'},
  {name: 'Williams Belly3', job: 'Accounts'},
  {name: 'Williams Belly4', job: 'Accounts'},
  {name: 'Williams Belly5', job: 'Accounts'},
  {name: 'Williams Belly1', job: 'Accounts'}

];
slideConfig = {
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  infinite: true,
  arrows: false,
  rows: 0, //fix the responsive issue
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 1008,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 960,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  ],
};

  constructor(private courseService: CourseService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.showList();
    this.showListByCategories();
    // this.getCourseByCategory();
  }

  showList(){
    this.courseService.listAll().then((res) => {
      console.log(res);
      this.courses = res;
    });
  }

  showListByCategories() {
    this.courseService.listByCategories().then((res) =>{
      // console.log(res);
      this.courseByCategories = res;
    })
  }



}
