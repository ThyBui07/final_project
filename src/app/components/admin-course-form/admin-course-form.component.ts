import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-admin-course-form',
  templateUrl: './admin-course-form.component.html',
  styleUrls: ['./admin-course-form.component.scss']
})
export class AdminCourseFormComponent implements OnInit {
  file: File;
  roles = [];
  @Input() course: any = {};
  @Output()
  submit = new EventEmitter();

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }

  fileOnChange(event: any) {
    this.file = event.dataTransfer ? event.dataTransfer.files[0] : event.target.files[0];
  }

  async save() {
    if (this.file) {
      // await this.courseService.uploadFile(this.file, this.movie.TenPhim);
    }
    this.submit.emit();
  }
}
