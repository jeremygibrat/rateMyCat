import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IComment } from '../comment.model';
import { CommentsService } from './comments.service';

export const commentsResolve = (route: ActivatedRouteSnapshot): Observable<null | IComment> => {
  const id = route.params['id'];
  if (id) {
    return inject(CommentsService)
      .find(id)
      .pipe(
        mergeMap((cats: HttpResponse<IComment>) => {
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

export default commentsResolve;
