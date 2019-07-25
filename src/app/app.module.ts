import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SlickModule } from 'ngx-slick';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
// import { HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShowCoursesComponent } from './views/show-courses/show-courses.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { LogInComponent } from './components/header/log-in/log-in.component';
import { SignUpComponent } from './components/header/sign-up/sign-up.component';
import { LogInManagementComponent } from './views/log-in-management/log-in-management.component';
import { BreadcrumbUserComponent } from './components/breadcrumb-user/breadcrumb-user.component';
import { CourseDetailComponent } from './views/course-detail/course-detail.component';
// import { AuthInterceptor} from './services/auth-interceptor';
import { AdminFileUploaderComponent } from './components/admin-file-uploader/admin-file-uploader.component';
import { AdminCourseFormComponent } from './components/admin-course-form/admin-course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    // ComponentsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ShowCoursesComponent,
    BreadCrumbComponent,
    LogInComponent,
    SignUpComponent,
    LogInManagementComponent,
    BreadcrumbUserComponent,
    CourseDetailComponent,
    //admin
    AdminFileUploaderComponent,
    AdminCourseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Specify your library as an import
    SlickModule.forRoot(),
  ],
  providers: [
      // {provide: HTTP_INTERCEPTORS,
      // useClass: AuthInterceptor,
      // multi: true,}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
