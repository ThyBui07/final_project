import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//users
import { HomeComponent } from './views/home/home.component';
import { ShowCoursesComponent } from './views/show-courses/show-courses.component';
import { CourseDetailComponent } from './views/course-detail/course-detail.component';
//log in user
import { LogInManagementComponent } from './views/log-in-management/log-in-management.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'courses/:category', component:ShowCoursesComponent},
  {path: 'courses/:category/:id', component:CourseDetailComponent},
  {path: 'user/home', component:LogInManagementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
