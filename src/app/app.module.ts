import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SlickModule } from 'ngx-slick';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShowCoursesComponent } from './views/show-courses/show-courses.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { LogInComponent } from './components/header/log-in/log-in.component';


@NgModule({
  declarations: [
    AppComponent,
    // ComponentsComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ShowCoursesComponent,
    BreadCrumbComponent,
    LogInComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
