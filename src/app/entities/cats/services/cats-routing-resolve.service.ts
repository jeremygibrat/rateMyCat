import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { ICat } from '../cat.model';
import { CatsService } from './cats.service';

export const catsResolve = (route: ActivatedRouteSnapshot): Observable<null | ICat> => {
  const id = route.params['id'];
  if (id) {
    return inject(CatsService)
      .find(id)
      .pipe(
        mergeMap((cats: HttpResponse<ICat>) => {
          if (cats.body) {
            return of(cats.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default catsResolve;
