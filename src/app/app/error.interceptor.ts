import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { MatDialog } from "@angular/material";
import { Injectable } from "@angular/core";
import { ErrorComponent } from "../error/error.component";

@Injectable({providedIn: "root"})
export class ErrorInterceptor implements HttpInterceptor {
    
    constructor (private dialog: MatDialog) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                console.log(error);
                let errorMessage = "An Unknow error occured";
                if (error.error.message){
                    errorMessage = error.error.message;
                }
                this.dialog.open(ErrorComponent, {data: {message: errorMessage}});
                return throwError(error);
            })
        );
    }
}