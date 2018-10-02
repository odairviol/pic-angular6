import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable, empty } from "rxjs";
import { catchError } from "rxjs/operators";

export class ErrorHttpInterceptor implements HttpInterceptor {

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                catchError((err) => {
                    if (err.status === 0) {
                        alert("Servidor fora do ar!");
                    } else if (err.status === 400) {
                        alert("Dados inválidos no request");
                    } else if (err.status === 404) {
                        alert("URL inválida, tente novamente");
                    } else if (err.status === 500) {
                        alert("Erro no backend");
                    } else {
                        alert("Erro não mapeado");
                    }
                    return empty();
                })
            );
    }


}