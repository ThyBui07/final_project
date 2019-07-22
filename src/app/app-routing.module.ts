import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//users
import { HomeComponent } from './views/home/home.component';
import { ShowCoursesComponent } from './views/show-courses/show-courses.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'courses/:category', component:ShowCoursesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
