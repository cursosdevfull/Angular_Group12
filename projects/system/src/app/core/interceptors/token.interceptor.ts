import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { catchError, mergeMap, Observable, retry, throwError } from 'rxjs';

import { AuthApplication } from '../../modules/auth/application/auth.application';
import { StorageApplication } from '../../modules/auth/application/storage.application';
import { ITokens } from '../../modules/auth/domain/tokens.interface';
import { UtilsService } from '../../shared/service/utils.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private readonly storageApplication: StorageApplication,
    private readonly injector: Injector,
    private readonly utilsService: UtilsService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = this.storageApplication.getField('accessToken');

    const clonedRequest = req.clone({
      headers: req.headers.append('Authorization', 'Bearer ' + accessToken),
    });

    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          return this.handlerErrorBackend(error, req, next);
        }

        return throwError(() => new Error(errorMessage));
      })
    );
  }

  handlerErrorBackend(
    error: HttpErrorResponse,
    req: HttpRequest<any>,
    next: HttpHandler
  ) {
    const auth = this.injector.get(AuthApplication);

    if (error.status === 409) {
      const refreshToken = this.storageApplication.getField('refreshToken');

      return auth.getNewAccessToken(refreshToken).pipe(
        retry(3),
        mergeMap((tokens: ITokens) => {
          this.storageApplication.setField('accessToken', tokens.accessToken);
          this.storageApplication.setField('refreshToken', tokens.refreshToken);

          const clonedRequest = req.clone({
            headers: req.headers.append(
              'Authorization',
              'Bearer ' + tokens.accessToken
            ),
          });

          return next.handle(clonedRequest);
        })
      );
    } else if (error.status === 401) {
      auth.logout();
    }

    this.utilsService.showNotification(
      'Ocurri?? un error inesperado. Por favor intente m??s tarde.',
      4000
    );

    return throwError(() => new Error(error.message));
  }
}
