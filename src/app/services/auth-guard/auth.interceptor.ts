import {HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';

export class AuthInterceptor implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    if(sessionStorage.getItem('token') !== null) {
      const headers = new HttpHeaders().set('Authorization', sessionStorage.getItem('token'))
      const reqCloned = req.clone({headers: headers});
      return next.handle(reqCloned);
    } else {
      return next.handle(req);
    }
  }

}
