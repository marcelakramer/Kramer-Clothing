import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { MessageSweetService } from '../services/message.service';

@Injectable()
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private messageService: MessageSweetService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => this.processErrorResponse(error)));
  }

  processErrorResponse(error: HttpErrorResponse): Observable<HttpEvent<any>> {
    this.messageService.error(error.message);
    return throwError(() => error);
  }

}
