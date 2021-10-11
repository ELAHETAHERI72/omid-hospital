import { Injectable } from "@angular/core";
import {
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { delay, mergeMap, materialize, dematerialize } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): any {
        let req = request;
        // const token = localStorage.getItem("accessToken");
        // if (token) {
        req = request.clone({
            headers: request.headers.append("Authorization", ` Bearer 2777fcf0-feaa-41c0-acf5-913cc1eb8379`),
        });
        // }
        return next.handle(req);
    }
}