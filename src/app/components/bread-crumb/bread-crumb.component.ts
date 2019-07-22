import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'bread-crumb-component',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {
  code: any = null;

  constructor(private courseService: CourseService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.code = this.activatedRoute.snapshot.paramMap.get('category');
  }

}
