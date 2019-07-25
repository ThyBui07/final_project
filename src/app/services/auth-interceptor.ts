import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//   constructor(private authService: AuthenticationService) {
//   }

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     const httpOptions = {
//       headers: new HttpHeaders(
//         {
//           'Content-Type':  'application/json',
//           'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('id_token'))
//         })
//     }
// }
// }
