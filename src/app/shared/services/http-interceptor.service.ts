import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpResponse,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class HttpInterceptorService implements HttpInterceptor {
  private _API_KEY = "61797b1eb8f7895ac0e556fa";

  constructor() {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(
      request.clone({ setHeaders: { "app-id": this._API_KEY } })
    );
  }
}
