import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService,private ngxService: NgxUiLoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.ngxService.start();
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        this.ngxService.stop();
        if (event instanceof HttpResponse && request.method!='GET') {
        this.toastr.success(event.body.message)
        }
        return event;
      }),
        catchError((error: HttpErrorResponse) => {
          this.toastr.error(error.error.message)
          return throwError(error);
        })
)
  }
}
